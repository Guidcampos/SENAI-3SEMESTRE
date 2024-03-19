import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//IMPORTAT RECURSOS DO EXPO-NOTIFICATIONS
import *as  Notifications from 'expo-notifications';

//SOLICITA AS PERMISSÕES DE NOTIFICAÇÃO AO INICIAR O APP
Notifications.requestPermissionsAsync();

//DEFINI COMO AS NOTIFICACOES DEVEM SER TRATADAS QUANDO RECEBIDAS 
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    //MOSTRAR O ALERTA QUANDO A NOTIFICAÇÃO FOR RECEBIDA
    shouldShowAlert: true,
    //REPRODUZ SOM AO RECEBER NOTIFICAÇÃO
    shouldPlaySound: true,
    //NUMERO DE NOTIFICAÇÕES NO ICONE DO APP
    shouldSetBadge: false
  })
})

export default function App() {
  //FUNÇÃO PARA LIDAR COM A CHAMADA DA NOTIFICAÇÃO
  const handleCallNotifications = async () => {
    //OBTEM STATUS DA PERMISSÃO
    const { status } = await Notifications.requestPermissionsAsync()
    //VERIFICA SE O USUARIO CONCEDEU PERMISSÃO
    if (status !== "granted") {
      alert("Você não deixou as notificações ativas")
      return;
    }
    //AGENDA UMA NOTIFICAÇÃO 
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Bem vindo ao SENAI",
        body: "Notificação recebida.",
      },
      trigger: null
    })
  }




  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleCallNotifications}>
        <Text style={styles.text}>Clique aqui !</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
  },
  
});
