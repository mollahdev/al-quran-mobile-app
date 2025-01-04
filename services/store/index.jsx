import { createContext, useState, useEffect, useCallback, useMemo } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
import data from './data';

export const StoreContext = createContext()
export const StoreProvider = ({ children }) => {
    /**
     * currently playing track  
     */ 
    const [_isSliding, setIsSliding] = useState(false)
    const [_sound, _setSound] = useState({
        id: null,
        title: null,
        audio: null,
        artwork: null,
        duration: null,
    });
    /**
     * player state 
     */ 
    const [player, _setPlayer] = useState({
        isPlaying: false,
        isRepeating: false,
        isShuffling: false,
        trackId: null,
    })
    const [currentTime, _setCurrentTime] = useState(0)
    const [favorite, _setFavorite] = useState([])
    const [_recent, _setRecent] = useState([])
    const [search, setSearch] = useState({
        query: '',
        isFocused: false,
    })

    /**
     * restore favorite, player, and recent state from async storage
     */ 
    useEffect(() => {
        // restore favorite tracks ID list
        AsyncStorage.getItem('favorite').then((data) => {
            if (data) {
                _setFavorite(JSON.parse(data))
            }
        })
        // restore last played track
        AsyncStorage.getItem('player').then((data) => {
            if (data) {
                _setPlayer( prev => ({...prev, ...JSON.parse(data)}))
            }
        })
        // restore recent tracks ID list
        AsyncStorage.getItem('recent').then((data) => {
            if (data) {
                _setRecent(JSON.parse(data))
            }
        })
    }, [])

    useEffect(() => {
        if( _sound.audio ) {
            _sound.audio.setIsLoopingAsync(player.isRepeating)
        }
    }, [player, _sound])

    /**
     * set recent track
     */ 
    const setRecent = useCallback((trackId) => {
        _setRecent((prev) => {
            // check if track id already exists in recent, move this to first index
            const state = Array.from(prev)
            const index = state.indexOf(trackId)
            if (index !== -1) {
                state.splice(index, 1)
            } 
            
            state.unshift(trackId)
            // limit recent to 5
            if (state.length > 5) {
                state.pop()
            }

            AsyncStorage.setItem('recent', JSON.stringify(state))
            return state
        })
    })

    /**
     * toggle favorite track 
     */ 
    const toggleFavorite =  useCallback((trackId) => {
        _setFavorite((prev) => {
            let list = Array.from(prev)
            if (list.includes(trackId)) {
                list = list.filter((item) => item !== trackId)
            } else {
                list.push(trackId)
            }
            AsyncStorage.setItem('favorite', JSON.stringify(list))
            return list
        })
    }, [])

    /**
     * check if track is favorite
     */
    const isFavoriteById = useCallback((trackId) => {
        return favorite.includes(trackId)
    }, [favorite])

    /**
     * set player state
     */ 
    const setPlayer = (data) => {
        _setPlayer(prev => ({...prev, ...data}))
        AsyncStorage.setItem('player', JSON.stringify(data))
    }

    // get track by id
    const getTrackById = useCallback((trackId) => {
        return data.find((item) => item.id === trackId)
    }, [])

    /**
     * set sound and update recent 
     */ 
    const setSound = async (trackId) => {
        if( player.trackId == trackId && _sound.audio) return;
        if( _sound.audio ) {
            await _sound.audio.unloadAsync()
        }

        const track = getTrackById(trackId)

        // support for IOS
        await Audio.setAudioModeAsync({
            playsInSilentModeIOS: true, // Ensures audio plays in silent mode
        });
    
        const { sound, status } = await Audio.Sound.createAsync(
            track.audio, // Replace with your audio URL if you need
            { shouldPlay: player.isPlaying }
        );
        
        sound.setOnPlaybackStatusUpdate((status) => {
            if (status.isLoaded && !_isSliding) {
                _setCurrentTime(status.positionMillis)
                // if track is finished, set player state to not playing
                if (status.didJustFinish && !status.isLooping) {
                    setPlayer({ isPlaying: false })
                    sound.setPositionAsync(0)
                    sound.stopAsync()
                }
            }
        });

        if( status.isLoaded ) {
            _setSound({...track, audio: sound});
            setPlayer({
                trackId: trackId
            })

            if( player.isPlaying ) {
                setRecent(trackId)
            }
        }
    }

    // get recent tracks
    const recentTracks = useMemo(() => {
        return _recent.map((id) => getTrackById(id))
    }, [_recent])

    const playSound = async () => {
        if( !_sound.audio ) return;
        await _sound.audio.playAsync();
        return setPlayer({ isPlaying: true });
    }
    
    const toggleSound = async () => {
        if( !_sound.audio ) return;

        if (player.isPlaying) {
            await _sound.audio.pauseAsync();
            setPlayer({ isPlaying: false });
        } else {

            await _sound.audio.playAsync();
            setPlayer({ isPlaying: true });
        }
    }

    const setCurrentTime = (milliseconds) => {
        if( !_sound.audio ) return;
        setIsSliding(false)
        _setCurrentTime(milliseconds)
        _sound.audio.setPositionAsync(milliseconds)
    }

    return (
        <StoreContext.Provider value={{
            player,
            recentTracks,
            setPlayer,
            toggleFavorite,
            isFavoriteById,
            getTrackById,
            setSound,
            playSound,
            toggleSound,
            currentTime,
            setCurrentTime,
            setIsSliding,
            favorite,
            search,
            setSearch
        }}>
            {children}
        </StoreContext.Provider>
    )
}