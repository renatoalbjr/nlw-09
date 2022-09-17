import { Entypo } from "@expo/vector-icons";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ListRenderItem,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import logoImg from "../../assets/logo-nlw-esports.png";
import { Ad, AdCard } from "../../components/AdCard";
import Heading from "../../components/Heading";
import { THEME } from "../../theme";
import { styles } from "./styles";

export function Game() {
  const route = useRoute<RouteProp<ReactNavigation.RootParamList, "Game">>();
  const navigation =
    useNavigation<
      NativeStackNavigationProp<ReactNavigation.RootParamList, "Game">
    >();
  const { bannerUrl, gameId, title } = route.params;
  const [ads, setAds] = useState<Ad[]>([]);

  useEffect(() => {
    fetch(`http://192.168.1.29:3333/games/${gameId}/ads`)
      .then((response) => response.json())
      .then((adsResponse) => {
        setAds(adsResponse);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  let renderItem: ListRenderItem<Ad> = ({ item }) => (
    <AdCard
      buttonCallback={() => {
        navigation.navigate("LetsPlayModal", { adId: item.id });
      }}
      data={item}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={logoImg}
        resizeMode="contain"
        style={{ height: 40, marginTop: 16, alignSelf: "center" }}
      />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ position: "absolute", top: 48, left: 24 }}
      >
        <Entypo
          name="chevron-thin-left"
          color={THEME.COLORS.CAPTION_300}
          size={32}
        />
      </TouchableOpacity>
      <Image
        source={{ uri: bannerUrl }}
        resizeMode="cover"
        style={styles.heroImg}
      />
      <Heading
        title={title}
        subtitle="Conecte-se e comece a jogar!"
        style={{ marginTop: 24, marginLeft: 32 }}
      />
      <FlatList
        data={ads}
        renderItem={renderItem}
        contentContainerStyle={
          ads.length
            ? styles.flatList
            : { width: "100%", justifyContent: "center", alignItems: "center" }
        }
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text
            style={{
              color: THEME.COLORS.CAPTION_400,
              fontSize: THEME.FONT_SIZE.SM,
              fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
            }}
          >
            Não há anúncios publicados ainda.
          </Text>
        )}
      />
    </SafeAreaView>
  );
}
