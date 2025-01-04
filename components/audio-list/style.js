import { StyleSheet } from "react-native";
import colors from "constants/colors";

const styles = StyleSheet.create({
    wrapper: {
        gap: 22,
    },
    list: {
        gap: 22,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        flexGrow: 1,
    },
    duration: {
        color: "#D6D6D6",
        fontSize: 14,
        marginTop: 5,
        fontFamily: 'Satoshi-Regular',
    },
    activeDuration: {
        color: colors.primary,
    }
});

export default styles;