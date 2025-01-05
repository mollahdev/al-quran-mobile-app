import { useContext } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import PageWrapper from '@/components/page-wrapper';
import { currentAudio, recentAudio, audioList } from './constants';
import { StoreContext } from '@/services/store';

export default function HomeScreen() {
    const { search } = useContext(StoreContext);

    const renderItem = ({ item }) => {
        switch (item.key) {
            case currentAudio.key:
                return search.isFocused ? null : <View style={styles.section}><item.component /></View>;
            case recentAudio.key:
                return search.isFocused ? null : <item.component />;
            case audioList.key:
                return <View style={styles.section}><item.component title="All Surah"/></View>;
            default:
                return null;
        }
    };

    return (
        <PageWrapper>
            <FlatList
                data={[currentAudio, recentAudio, audioList]}
                renderItem={renderItem}
                keyExtractor={item => item.key}
            />
        </PageWrapper>
    );
}

const styles = StyleSheet.create({
    section: {
        paddingHorizontal: 20,
    },
});