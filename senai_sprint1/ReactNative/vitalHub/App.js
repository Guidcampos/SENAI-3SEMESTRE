import { Quicksand_500Medium, Quicksand_400Regular } from "@expo-google-fonts/quicksand";
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { MontserratAlternates_600SemiBold, MontserratAlternates_700Bold } from '@expo-google-fonts/montserrat-alternates';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navegacao } from './src/screens/Navegacao/Navegacao';
import { Login } from './src/screens/Login/Login';

const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Montserrat_700Bold, Quicksand_500Medium, Quicksand_400Regular, MontserratAlternates_600SemiBold, MontserratAlternates_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    //CONTAINER - envolve toda a estrutura de navegaçãp
    //NAVIGATOR - componente para a navegação
    //SCREEN    - tela 
    //NAME = o nome da tela
    //COMPONENT = compenente a ser chamado
    //Options(title) = título da tela


    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Navegacao'
          component={Navegacao}
          options={{ title: "Navegacao" }}
        />

        <Stack.Screen
          name='Login'
          component={Login}
          options={{ title: "Login" }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
