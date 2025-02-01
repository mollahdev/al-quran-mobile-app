import { useContext } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StoreContext } from '@/services/store';
import colors from '@/constants/colors';
import { convertMilliseconds } from '@/helpers/utils';

export default function CurrentAudio() {
    const { player, sound, currentTime, currentAudio } = useContext(StoreContext)
    const navigation = useNavigation()

    if( !currentAudio || !player.isPlaying || player.isBuffering ) return null
    const title = player.isPlaying ? 'Playing' : 'Paused'

    return (
        <Pressable style={[styles.wrapper, player.isPlaying ? styles.activeBg : styles.inactiveBg]} onPress={() => navigation.navigate('Details')}>
            <View style={styles.content}>
                <View>
                    <Text style={[styles.text, styles.subtitle]}>Now {title}</Text>
                    <Text style={[styles.text, styles.title]}>{sound.title}</Text>
                </View>
                <Text style={[styles.text, styles.duration]}>{convertMilliseconds(currentTime)}</Text>
            </View>
            <View>
                <Image style={styles.image} source={{
                    uri: sound.artwork
                }} />
            </View>
            <Image style={styles.shape} source={require('@/assets/shape.png')} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        paddingVertical: 15,
        paddingHorizontal: 20,
        position: 'relative',
        isolation: 'isolate',
        justifyContent: 'space-between',
        gap: 20,
        marginTop: 10,
    },
    activeBg: {
        backgroundColor: colors.primary,
    },
    inactiveBg: {
        backgroundColor: '#2C2C2C',
    },
    text: {
        color: '#FBFBFB',
        fontFamily: 'Satoshi-Bold',
    },
    subtitle: {
        fontSize: 11,
    },
    title: {
        fontSize: 20,
        marginTop: 5,
    },
    duration: {
        fontSize: 14,
    },
    shape: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: -1,
    },
    image: {
        width: 80,
        minWidth: 80,
        height: 80,
        borderRadius: 80,
        objectFit: 'cover',
    },
    content: {
        gap: 26,
    }
})