import { useContext, useMemo } from 'react';
import { View, Text, Pressable, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import data from '@/services/store/data'
import { heading } from 'constants/styles';
import Heart from '@/components/heart';
import { StoreContext } from '@/services/store';
import styles from './style';
import Play from './play';
import { convertMilliseconds } from 'helpers/utils';

export default function AudioList( props ) {
    const navigation = useNavigation();
    const { title, filterValue, isFavoriteOnly } = props;
    const { isFavoriteById, toggleFavorite, player, currentTime, favorite } = useContext(StoreContext);

    const onPress = (id) => {
        navigation.navigate('Details', { id });
    }

    const beforeFilter = useMemo(() => {
        if( isFavoriteOnly ) {
            return data.filter(item => (favorite || []).includes(item.id));
        } else {
            return data;
        }
    } , [favorite, isFavoriteOnly]);

    const filteredData = useMemo(() => {
        if( 'string' !== typeof filterValue ) return beforeFilter;
        return beforeFilter.filter(item => item.title.toLowerCase().includes(filterValue.toLowerCase()));
    }, [filterValue, favorite])

    const isLastIndex = (index) => index === filteredData.length - 1;
    const isCurrentTrack = (id) => player.trackId === id && player.isPlaying;

    return (
        <View style={styles.wrapper}>
            <Text style={heading.lg}>{title}</Text>
            <View style={styles.list}>
                { filteredData.length > 0 ? filteredData.map((item, index) => (
                    <View key={item.id} style={{
                        ...styles.item,
                        marginBottom: isLastIndex(index) ? 30 : 0
                    }}>
                        <Pressable style={styles.button} onPress={() => onPress(item.id)}>
                            <Play isActive={isCurrentTrack(item.id)}/>
                            <View>
                                <Text style={heading.sm}>{item.title}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    {
                                        isCurrentTrack(item.id) && <>
                                            <Text style={[styles.duration, styles.activeDuration]}>{convertMilliseconds(currentTime)}</Text>
                                            <Text style={styles.duration}> / </Text>
                                        </>
                                    }
                                    <Text style={styles.duration}>{convertMilliseconds(item.duration)}</Text>
                                </View>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => toggleFavorite(item.id)}>
                            <Heart isActive={isFavoriteById(item.id)} isFill={true}/>
                        </Pressable>
                    </View> 
                )) : <Text style={{
                    textAlign: 'center',
                    marginTop: Dimensions.get('window').height / 4,
                    color: '#D6D6D6',
                    fontSize: 16,
                    fontFamily: 'Satoshi-Bold'
                }}>No result found :(</Text> }
            </View>
        </View>
    )
}