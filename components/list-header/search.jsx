import { TextInput, View, StyleSheet, Pressable, Dimensions } from 'react-native';
import { useContext } from 'react';
import { StoreContext } from '@/services/store';
import Entypo from '@expo/vector-icons/Entypo';

export default function Search() {
    const { search, setSearch } = useContext(StoreContext);

    const closeSearch = () => {
        setSearch({
            query: '',
            isFocused: false,
        });
    };

    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.input}
                value={search.query}
                onChangeText={text => setSearch(prev => ({...prev, query: text}))}
                placeholder="Search here"
            />
            <Pressable style={styles.button} onPress={closeSearch}>
                <Entypo name="cross" size={24} color="white" />
            </Pressable>
        </View>
    )
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#3C3A3A",
        flexGrow: 1,
        width: width - 40,
        borderRadius: 8,
        flexDirection: 'row',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 0,
        flexGrow: 1,
        paddingHorizontal: 14,
        placeholderTextColor: 'gray',
        color: 'white',
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        fontFamily: 'Satoshi-Bold',
        fontSize: 14,
        placeholderTextColor: '#FFFFFF',
    },
    button: {
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
    }
});