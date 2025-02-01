import { View, Text, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { StoreContext } from '@/services/store';
import PageWrapper from './page-wrapper';

export default function Downloading() {
    const { downloading } = useContext(StoreContext);

    return (
        <PageWrapper>
            <View>
                <Text style={styles.title}>Downloading...</Text>
            </View>
        </PageWrapper>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 200,
        color: 'white',
    }
});