import { useFonts } from 'expo-font';

const useSatoshiFont = () => {
    const [fontsLoaded] = useFonts({
        'Satoshi-Bold': require('@/assets/fonts/satoshi-bold.otf'),
        'Satoshi-Regular': require('@/assets/fonts/satoshi-regular.otf')
    });
    
    return fontsLoaded;
};

export default useSatoshiFont;