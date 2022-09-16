import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_900Black, useFonts } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';
import { Game, GameHeaderTitle } from './src/screens/Game';
import { Home } from './src/screens/Home';
import { LetsPlayModal } from './src/screens/LetsPlayModal';
import { RootStackParamList } from './src/screens/RootStackParamsList';

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })
  return (
    <NavigationContainer>
        <Background>
          <StatusBar 
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />

          <Stack.Navigator initialRouteName='Home' screenOptions={
            {
              headerShown: false,
              contentStyle: {
                backgroundColor: 'transparent',
              },
            }
          }>
            {fontsLoaded ?
              (<>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Game' component={Game} options={
                  {
                    headerShown: true,
                    headerStyle: {
                      backgroundColor: 'transparent',
                    },
                    headerShadowVisible: false,
                    headerTitle: (props) => <GameHeaderTitle {...props} />,
                  }
                } />
                <Stack.Screen name='LetsPlayModal' component={LetsPlayModal} options={
                  {
                    presentation: 'transparentModal',
                  }
                } />
              </>
              )
            : 
              <Stack.Screen name='Loading' component={Loading} />
            }
          </Stack.Navigator>

        </Background>
    </NavigationContainer>
  );
}
