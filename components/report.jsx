import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable, Linking, Alert } from 'react-native';

export default function Report() {
    const handlePress = () => {
        const email = 'mollah.dev@gmail.com';
        const subject = 'Quran App Bug Report!';
        const body = '';
        const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
        Linking.openURL(mailto).catch((err) => Alert.alert('Error', 'Unable to open email app.'));
    };

    return (
        <Pressable onPress={handlePress}>
            <MaterialIcons name="report" size={24} color="#959595" />
        </Pressable>
    );
}