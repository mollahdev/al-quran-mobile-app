import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import colors from '@/constants/colors';

export default function PageWrapper(props) {
    const { children } = props;

    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.dark,
        justifyContent: 'center',
    },
});