import { View, Text, Button } from 'react-native';
import PageWrapper from '@/components/page-wrapper';

export default function HomeScreen(props) {
    const { navigation } = props;

    return (
        <PageWrapper>
          <View>
              <Text>Home Screen</Text>
              <Button
                  title="Go to Details"
                  onPress={() => navigation.navigate('Details', {
                      id: 1,
                  })}
              />
          </View>
        </PageWrapper>
    );
}