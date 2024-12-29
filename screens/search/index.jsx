import { Text, Button } from 'react-native';
import PageWrapper from '@/components/page-wrapper';

export default function SearchScreen(props) {
    const { navigation } = props;

    return (
        <PageWrapper>
            <Text>Search Screen</Text>
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
        </PageWrapper>
    );
}