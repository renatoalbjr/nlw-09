import { NavigationContainer } from "@react-navigation/native";
import { Background } from '../components/Background';
import { StatusBar } from 'react-native';

import { AppRoutes } from "./app.routes";

export function Routes(){
    return (
        <NavigationContainer>
            <Background>
                <StatusBar 
                    barStyle="light-content"
                    backgroundColor="transparent"
                    translucent
                />
                <AppRoutes />
            </Background>
        </NavigationContainer>
    )
}