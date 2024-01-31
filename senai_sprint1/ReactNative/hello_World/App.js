import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Image, StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {
  
  const onPress = () => {
    alert('Voce apertou com sucesso')
  }
  
  return (
    <View style={styles.container}>

      <Image
        style={styles.image}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpYKrqJaMYIiX156OKBnnIsQryRMWxtYuBnw&usqp=CAU',
        }}

      />
      <Text style={styles.title}>Hello world!</Text>
      <TextInput
        style={styles.input}
        defaultValue='exemplo de input' />

      <TouchableOpacity
        style={styles.btn} onPress={onPress}>

        <Text style={styles.textBtn}>Aperte aqui</Text>

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
    gap: 10,
  },

  title: {
    color: 'red',
    fontSize: 40,
  },

  input: {
    height: 40,
    width: '90%',
    borderWidth: 1,
    paddingLeft: 10,
  },

  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },

  textBtn: {
    color: 'white',
    textTransform: 'uppercase'
  },

  btn: {
    height: 40,
    width: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 8,
    borderBottomWidth: 1,
    
  }


});
