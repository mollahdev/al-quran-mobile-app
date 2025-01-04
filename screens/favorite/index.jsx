import AudioList from '@/components/audio-list';
import PageWrapper from '@/components/page-wrapper';
import { FlatList } from 'react-native';

export default function FavoriteScreen() {
    return (
        <PageWrapper>
            <FlatList
                style={{ paddingHorizontal: 20 }}
                data={[{
                    key: 'favorite',
                    component: AudioList
                }]}
                renderItem={({ item }) => <item.component title="Favourites" isFavoriteOnly={true}/>}
                keyExtractor={item => item.key}
            />
        </PageWrapper>
    );
}