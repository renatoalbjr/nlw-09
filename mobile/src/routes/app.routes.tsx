import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Game } from "../screens/Game";
import { Home } from "../screens/Home";
import { LetsPlayModal } from "../screens/LetsPlayModal";

const { Navigator, Screen } =
  createNativeStackNavigator<ReactNavigation.RootParamList>();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Game" component={Game} />
      <Screen
        name="LetsPlayModal"
        component={LetsPlayModal}
        options={{
          presentation: "transparentModal",
        }}
      />
    </Navigator>
  );
}
