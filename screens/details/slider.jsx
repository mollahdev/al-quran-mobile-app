import { StyleSheet, View, Text, Dimensions, Platform } from 'react-native';
import { default as SliderCore } from '@react-native-community/slider';
import { convertMilliseconds } from '@/helpers/utils';

export default function Slider(props) {
    const { currentTime, duration, setCurrentTime, setIsSliding } = props;

    return (
        <View>
            <View style={styles.lineWrapper}>
                <SliderCore
                    style={styles.slider}
                    minimumValue={0}
                    value={currentTime}
                    maximumValue={duration}
                    thumbTintColor="#B7B7B7"
                    minimumTrackTintColor="#B7B7B7"
                    maximumTrackTintColor="#8888884D"
                    onValueChange={setIsSliding}
                    onSlidingComplete={setCurrentTime}
                />
                <View style={styles.line}></View>
            </View>
            
            <View style={styles.timeWrapper}>
                <Text style={styles.time}>{convertMilliseconds(currentTime)}</Text>
                <Text style={styles.time}>{convertMilliseconds(duration)}</Text>
            </View>
        </View>
    );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    lineWrapper: {
        height: 50,
        position: 'relative',
    },
    line: {
        position: 'absolute',
        left:  Platform.select({ ios: 0, android: 20 }),
        width: width - Platform.select({ ios: 40, android: 80 }),
        height: 4,
        top: '50%',
        transform: [{ translateY: '-50%' }],
        backgroundColor: '#8888884D',
    },
    slider: {
        width: width - 40,
        position: 'absolute',
        top: '50%',
        transform: [{ translateY: '-50%' }],
        zIndex: 1,
        padding: 0,
    },
    timeWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft:  Platform.select({ ios: 0, android: 10 }),
        width: width - Platform.select({ ios: 40, android: 70 }),
    },
    time: {
        color: '#878787',
        fontSize: 12,
        fontFamily: 'Satoshi-Bold',
    }
});