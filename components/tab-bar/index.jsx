import { View, Pressable } from 'react-native';
import style from './style';
import { icons } from './constants';
import colors from '@/constants/colors';

export default function TabBar( props ) {
    const { state, navigation } = props;
    const { routeNames } = state;

    return (
        <View style={style.wrapper}>
            {routeNames.map( ( routeName, index ) => {
                const isFocused = state.index === index;
                const icon = icons[routeName];

                return (
                    <Pressable 
                        key={routeName} 
                        onPress={() => navigation.navigate(routeName)}
                        android_ripple={{ color: colors.primaryAlpha10 }}
                        style={style.navButton}
                    >
                        <View style={isFocused && style.indicator}/>
                        <View style={style.navItem}>
                            {isFocused ? <icon.active/> : <icon.inactive/>}
                        </View>
                    </Pressable>
                )
            })}
        </View>
    )
}