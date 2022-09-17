import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
  useFonts,
} from "@expo-google-fonts/inter";
import { Subscription } from "expo-modules-core";
import { useEffect, useRef } from "react";
import * as Notifications from "expo-notifications";

import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";
import { getPushNotificationToken } from "./src/services/getPushNotificationToken";

import "./src/services/notificationConfigs";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  const getNotificationListener = useRef<Subscription>();
  const responseNotificationListener = useRef<Subscription>();

  useEffect(() => {
    getPushNotificationToken();
  }, []);

  useEffect(() => {
    getNotificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log(notification);
      });

    responseNotificationListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      if (getNotificationListener.current)
        Notifications.removeNotificationSubscription(
          getNotificationListener.current
        );
      if (responseNotificationListener.current)
        Notifications.removeNotificationSubscription(
          responseNotificationListener.current
        );
    };
  });

  return fontsLoaded ? <Routes /> : <Loading />;
}
