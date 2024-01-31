import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ContainerApp } from './style';
import { Header } from './src/components/Header';

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular, Roboto_500Medium, Roboto_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }


  return (
    <ContainerApp>
      <StatusBar translucent backgroundColor="transparent" barStyle= "dark-content"/>
     
      {/* HEADER */}
      <Header/>

      {/* HOMESCREEN */}



    </ContainerApp>
  );
}

