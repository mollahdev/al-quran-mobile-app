import { Pressable } from 'react-native';
import colors from '@/constants/colors';
import Svg, { Path } from "react-native-svg"

export default function ShuffleButton( props ) {
    const { isActive, onPress } = props;
    const color = isActive ? colors.primary : '#6D6D6D';


    return (
        <Pressable
            onPress={onPress}
        >
            <Svg
                width={28}
                height={28}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                    <Path
                        d="M18.78 3.47a.75.75 0 10-1.06 1.06l.724.725a5.75 5.75 0 00-4.552 2.555L8.86 15.358a4.25 4.25 0 01-3.536 1.892H5a.75.75 0 000 1.5h.324a5.75 5.75 0 004.784-2.56l5.032-7.547a4.25 4.25 0 012.997-1.859l-.617.515a.75.75 0 00.96 1.152l1.409-1.174a1.746 1.746 0 00.117-2.582L18.78 3.47zM5 5.25a.75.75 0 000 1.5h.324A4.25 4.25 0 018.86 8.643a.75.75 0 001.248-.833 5.75 5.75 0 00-4.784-2.56H5zM15.14 15.357a.75.75 0 10-1.248.832 5.75 5.75 0 004.31 2.541l-.682.569a.75.75 0 00.96 1.152l1.409-1.174c.384-.32.595-.77.626-1.227a1.746 1.746 0 00-.509-1.355L18.78 15.47a.75.75 0 10-1.06 1.06l.712.713a4.25 4.25 0 01-3.292-1.885z"
                        fill={color}
                    />
            </Svg>
        </Pressable>
        
    )
}