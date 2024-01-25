import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./src/assets/login.png')} />
      <Text style={styles.textLogin}>Login</Text>

      <View style={styles.container1}>
        <Text style={styles.textLabel} >Email</Text>
        <TextInput style={styles.input} placeholder='Email' />

        <Text style={styles.textLabel}>Senha</Text>
        <TextInput style={styles.input} placeholder='Senha' />
      </View>

      <TouchableOpacity style={styles.btn} >
        <Text style={styles.textBtn}>Entrar</Text>
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
 
  container1: {
    width: '70%',
    backgroundColor: '#fff',
    
  },

  image: {
    height: 213,
    with: 205,
    resizeMode: 'contain',
  },

  input: {
    height: 26,
    borderWidth: 1,
    color: 'grey',
  },

  textLogin: {
    height: 58,
    with: 156,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 26,
    marginTop: 20,

  },

  textLabel: {
    height: 24,
    with: 51,
    fontSize: 20,
    marginTop: 20,
    marginBottom: 5,
  },

  btn: {
    height: 35,
    width: 156,
    backgroundColor: '#F05656',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginTop: 35,

  },

  textBtn: {
    fontSize: 20,
  },

});
