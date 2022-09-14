import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { THEME } from '../../theme';
import { IGame } from '../../utils/games';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
    data: IGame,
}

export function GameCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
        <ImageBackground 
            style={styles.cover}
            source={data.cover}
        >
            <LinearGradient
                // Background Linear Gradient
                colors={THEME.COLORS.FOOTER}
                style={styles.footer}
            >
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.ads}>{data.ads} anúncios</Text>
            </LinearGradient>
        </ImageBackground>
    </TouchableOpacity>
  );
}