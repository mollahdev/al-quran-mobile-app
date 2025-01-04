import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import QuranIcon from './quran-icon';
import { Pressable, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { StoreContext } from '@/services/store';

export default function DefaultList() {
    const { setSearch } = useContext(StoreContext);

    const updateSearch = () => {
        setSearch(prev => {
            return {
                ...prev,
                isFocused: true
            };
        });
    };

    return (
        <>
            <Pressable style={({pressed}) => pressed ? styles.button : {}} onPress={updateSearch}>
                <AntDesign name="search1" size={28} color="#DDDDDD" />
            </Pressable>
            <QuranIcon />
            <Pressable style={({pressed}) => pressed ? styles.button : {}}>
                <Entypo name="dots-three-vertical" size={22} color="#DDDDDD" />
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        opacity: 0.6
    }
});