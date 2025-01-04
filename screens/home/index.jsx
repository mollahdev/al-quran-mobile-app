import { FlatList } from 'react-native';
import PageWrapper from '@/components/page-wrapper';
import { currentAudio, recentAudio, audioList } from './constants';

export default function HomeScreen() {
    const renderItem = ({ item }) => {
        switch (item.key) {
            case currentAudio.key:
                return <item.component />;
            case recentAudio.key:
                return <item.component />;
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