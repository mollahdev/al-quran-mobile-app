import { View, Text, Button } from 'react-native';

export default function HomeScreen(props) {
    const { navigation } = props;

    return (
        <View>
            <Text>Home Screen</Text>
            <Button
                title="Go to Favorites"
                onPress={() => navigation.navigate('Favorite')}
            />
        </View>
    );
}