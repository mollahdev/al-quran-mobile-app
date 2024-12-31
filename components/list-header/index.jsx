import { StyleSheet, Pressable, View, SafeAreaView, StatusBar, Platform} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import QuranIcon from './quran-icon';
import colors from 'constants/colors';

export default function ListHeader(props) {
    const { navigation } = props;

    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.container}>
                <Pressable style={({pressed}) => pressed ? styles.button : {}} onPress={() => navigation.navigate('Search')}>
                    <AntDesign name="search1" size={28} color="#DDDDDD" />
                </Pressable>
                <QuranIcon />
                <Pressable style={({pressed}) => pressed ? styles.button : {}}>
                    <Entypo name="dots-three-vertical" size={22} color="#DDDDDD" />
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: {
        backgroundColor: colors.dark,
        paddingTop: Platform.select({
            ios: 0,
            android: StatusBar.currentHeight,
        }),
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        alignItems: 'center',
        paddingVertical: 24,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    button: {
        opacity: 0.6
    }
});