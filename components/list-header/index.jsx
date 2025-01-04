import { useContext } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Platform} from 'react-native';

import colors from 'constants/colors';
import { StoreContext } from '@/services/store';
import Search from './search';
import DefaultList from './default';

export default function ListHeader() {
    const { search, setSearch } = useContext(StoreContext);

    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.container}>
                { search.isFocused ? <Search /> : <DefaultList /> }
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
        height: 60,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
});