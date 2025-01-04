import AudioList from '@/components/audio-list';
import PageWrapper from '@/components/page-wrapper';
import { FlatList } from 'react-native';

export default function SearchScreen() {
    return (
        <PageWrapper>
            <FlatList
                style={{ paddingHorizontal: 20 }}
                data={[{
                    key: 'favorite',
                    component: AudioList
                }]}
                renderItem={({ item }) => <item.component title="Search result"/>}
                keyExtractor={item => item.key}
            />
        </PageWrapper>
    );
}