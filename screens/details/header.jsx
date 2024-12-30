import { StyleSheet, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '@/constants/colors';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { heading } from '@/constants/styles';

export default function DetailsHeader(props) {
    const { navigation } = props;

    return (
        <SafeAreaView style={styles.container}>
            <Pressable style={({pressed}) => pressed ? styles.button : {}} onPress={() => navigation.goBack()}>
                <View style={styles.backBtn}>
                    <MaterialCommunityIcons name="chevron-left" size={26} color="#DDDDDD" />
                </View>
            </Pressable>
            <Text style={heading.md}>Now playing</Text>
            <Pressable style={({pressed}) => pressed ? styles.button : {}}>
                <Entypo name="dots-three-vertical" size={22} color="#DDDDDD" />
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.dark,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20
    },
    backBtn: {
        width: 34,
        height: 34,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF0A',
        borderRadius: 32
    },
    button: {
        opacity: 0.6
    }
});