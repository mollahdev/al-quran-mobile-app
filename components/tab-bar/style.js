import { StyleSheet } from 'react-native';
import colors from '@/constants/colors';

const style = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.dark200,
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 70,
    },

    navButton: {
        flex: 1,
        justifyContent: 'center',
        borderWidth: 0,
    },

    navItem: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },

    indicator: {
        width: 24,
        height: 4,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: [{ translateX: -12 }],
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    }
});

export default style;