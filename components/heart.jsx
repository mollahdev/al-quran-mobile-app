import AntDesign from '@expo/vector-icons/AntDesign';
import colors from 'constants/colors';

export default function Heart(props) {
    const { isActive, isFill, size } = props;
    const defaultSize = 28;

    if (isActive) {
        return <AntDesign name="heart" size={size || defaultSize} color={colors.primary} />
    }
    
    if (isFill) {
        return <AntDesign name="heart" size={size || defaultSize} color="#565656" />
    }

    return (
        <AntDesign name="hearto" size={size || defaultSize} color="#6C6C6C" />
    )
}