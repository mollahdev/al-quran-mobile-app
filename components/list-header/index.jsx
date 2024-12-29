import { StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '@/constants/colors';

export default function ListHeader(props) {
    const { navigation } = props;

    return (
        <SafeAreaView style={styles.container}>
            <Text>List Header</Text>
            <Button
                title="Go to Search"
                onPress={() => navigation.navigate('Search')}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.dark,
        flexDirection: 'row',
    },
});