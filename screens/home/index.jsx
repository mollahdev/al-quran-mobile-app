import { View, Text, Button, FlatList } from 'react-native';
import PageWrapper from '@/components/page-wrapper';
import data from '@/services/store/data'

export default function HomeScreen(props) {
    const { navigation } = props;

    return (
        <PageWrapper>
          <View>
              <Text>Home Screen</Text>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <View>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: 'white',
                            }}>{item.title}</Text>
                            <Button
                                title="Go to Details"
                                onPress={() => navigation.navigate('Details', {
                                    id: item.id,
                                })}
                            />
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
          </View>
        </PageWrapper>
    );
}