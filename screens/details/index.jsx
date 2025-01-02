import { useContext, useEffect } from 'react';
import { Text, Image, View, Pressable } from 'react-native';
import PageWrapper from '@/components/page-wrapper';
import { StoreContext } from '@/services/store';
import styles from './style';
import { heading } from 'constants/styles';
import Heart from '@/components/heart';
import Ionicons from '@expo/vector-icons/Ionicons';
import PlayButton from './play-button';
import RepeatButton from './repeat-button';
import ShuffleButton from './shuffle-button';
import Slider from './slider';

export default function DetailsScreen(props) {
    const { getTrackById, toggleFavorite, isFavoriteById, setPlayer, player, toggleSound, setSound, currentTime, setCurrentTime, setIsSliding } = useContext(StoreContext);
    const { route } = props;

    const id = route.params.id;
    const track = getTrackById(id);
    const isFavorite = isFavoriteById(id);

    useEffect(() => {
        setSound(id);
    }, []);

    // if the id is single digit, add 0 to the front
    const trackIdString = id < 10 ? `0${id}` : id;
    return (
        <PageWrapper>
            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.artwork}
                        source={track.artwork}
                    />
                    <View style={styles.titleContainer}>
                        <Text style={heading.lg}>{trackIdString} {track.title}</Text>
                        <Pressable onPress={() => toggleFavorite(id)}>
                            <Heart isActive={isFavorite} size={24} />
                        </Pressable>
                    </View>
                </View>
                <View>
                    <Slider 
                        currentTime={currentTime} 
                        setCurrentTime={setCurrentTime}
                        duration={track.duration}
                        setIsSliding={setIsSliding}
                    />
                    <View style={styles.controlWrapper}>
                        <RepeatButton 
                            onPress={() => setPlayer({isRepeating: !player.isRepeating})} 
                            isActive={player.isRepeating}
                        />
                        <View style={styles.playButtonWrapper}>
                            <Pressable>
                                <Ionicons name="play-skip-back" size={24} color="#A7A7A7" />
                            </Pressable>
                            <PlayButton 
                                onPress={toggleSound} 
                                isActive={player.isPlaying} 
                            />
                            <Pressable>
                                <Ionicons name="play-skip-forward" size={24} color="#A7A7A7" />
                            </Pressable>
                        </View>
                        <ShuffleButton 
                            onPress={() => setPlayer({isShuffling: !player.isShuffling})} 
                            isActive={player.isShuffling}
                        />
                    </View>
                </View>
            </View>
        </PageWrapper>
    );
}