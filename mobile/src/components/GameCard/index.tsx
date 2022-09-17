import { LinearGradient } from "expo-linear-gradient";
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { IGame } from "../../screens/Home";
import { THEME } from "../../theme";

import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
  data: IGame;
}

export function GameCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={{ uri: data.bannerUrl }}>
        <LinearGradient
          // Background Linear Gradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          <Text style={styles.name}>{data.title}</Text>
          <Text style={styles.ads}>
            {data._count.ads.toString()} anúncio(s)
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
