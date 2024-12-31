import { createContext, useState, useEffect, useCallback, useMemo } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
export const StoreContext = createContext()
import data from 'data'

export const StoreProvider = ({ children }) => {
    /**
     * currently playing track  
     */ 
    const [player, _setPlayer] = useState({
        isPlaying: false,
        isLoop: false,
        isShuffle: false,
        trackId: null,
        currentTime: 0,
    })
    /**
     * favorite tracks ID list  
     */ 
    const [_favorite, _setFavorite] = useState([])
    /**
     * recent tracks ID list  
     */
    const [_recent, _setRecent] = useState([])

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
                _setPlayer(JSON.parse(data))
            }
        })
        // restore recent tracks ID list
        AsyncStorage.getItem('recent').then((data) => {
            if (data) {
                _setRecent(JSON.parse(data))
            }
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
        return _favorite.includes(trackId)
    }, [_favorite])

    /**
     * set player state and update recent
     */ 
    const setPlayer = useCallback((data) => {
        _setPlayer(data)
        AsyncStorage.setItem('player', JSON.stringify(data))

        // update recent tracks list
        _setRecent((prev) => {
            const state = Array.from(prev)
            // check if track id already exists in recent, move this to first index
            const index = state.indexOf(data.trackId)
            if (index !== -1) {
                state.splice(index, 1)
            } else 
            
            state.unshift(data.trackId)
            // limit recent to 5
            if (state.length > 5) {
                state.pop()
            }

            AsyncStorage.setItem('recent', JSON.stringify(state))
            return state
        })
    }, [])

    // get track by id
    const getTrackById = useCallback((trackId) => {
        return data.find((item) => item.id === trackId)
    }, [])

    // get recent tracks
    const recentTracks = useMemo(() => {
        return _recent.map((id) => getTrackById(id))
    }, [_recent])

    return (
        <StoreContext.Provider value={{
            player,
            recentTracks,
            setPlayer,
            toggleFavorite,
            isFavoriteById,
            getTrackById,
        }}>
            {children}
        </StoreContext.Provider>
    )
}