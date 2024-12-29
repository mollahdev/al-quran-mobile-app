import { Text, View, Button } from 'react-native';
import PageWrapper from '@/components/page-wrapper';

export default function DetailsScreen(props) {
    const { route, navigation } = props;
    const id = route.params.id;

    return (
        <PageWrapper>
            <Text>Details Screen {id}</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.goBack()}
            />
        </PageWrapper>
    );
}