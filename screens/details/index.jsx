import { useContext } from 'react';
import { Text, Image, View, Button, Pressable } from 'react-native';
import PageWrapper from '@/components/page-wrapper';
import { StoreContext } from '@/services/store';
import styles from './style';
import { heading } from 'constants/styles';
import Heart from '@/components/heart';

export default function DetailsScreen(props) {
    const { getTrackById, toggleFavorite, isFavoriteById } = useContext(StoreContext);
    const { route, navigation } = props;

    const id = route.params.id;
    const track = getTrackById(id);
    const isFavorite = isFavoriteById(id);

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
                <Button
                    title="Go to Home"
                    onPress={() => navigation.goBack()}
                />
            </View>
        </PageWrapper>
    );
}