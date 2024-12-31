import { StyleSheet, SafeAreaView } from "react-native";
import colors from "@/constants/colors";

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
        backgroundColor: colors.dark,
        flex: 1,
    },
});