import { useContext } from 'react';
import { FlatList } from 'react-native';
import PageWrapper from '@/components/page-wrapper';
import { currentAudio, recentAudio, audioList } from './constants';
import { StoreContext } from '@/services/store';

export default function HomeScreen() {
    const { search } = useContext(StoreContext);

    const renderItem = ({ item }) => {
        switch (item.key) {
            case currentAudio.key:
                return search.isFocused ? null : <item.component />;
            case recentAudio.key:
                return search.isFocused ? null : <item.component />;
            case audioList.key:
                return <item.component title="All Surah"/>;
            default:
                return null;
        }
    };

    return (
        <PageWrapper>
            <FlatList
                style={{ paddingHorizontal: 20 }}
                data={[currentAudio, recentAudio, audioList]}
                renderItem={renderItem}
                keyExtractor={item => item.key}
            />
        </PageWrapper>
    );
}