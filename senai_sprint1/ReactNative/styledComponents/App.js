import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
// import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, Container1, ContainerTitle } from './src/components/Container/Container';
import { TitleBtnincrement, TitleBtndecrement, Title, Title1 } from './src/components/Title/Title';
import { Btndecrement, Btnincrement } from './src/components/Button/Button';

export default function App() {

  // hook de state
  const [count, setCount] = useState(0);

  // função para incrementar
  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount((count > 0) ? count - 1 : count)
  }

  useEffect(() => {
    console.warn(`Contador atualizado ${count}`)
  }, [count])
  return (
    <Container>
      <StatusBar style="auto" />
      <Container1>

        {/* BTNINCREMENT */}
        <Btnincrement onPress={increment}>
          {/* TitleBtnincrement */}
          <TitleBtnincrement >Incrementar</TitleBtnincrement>
        </Btnincrement>

        {/* TITLE */}
        <ContainerTitle>
        <Title>Contador</Title>
        <Title1>{count}</Title1>
        </ContainerTitle>


        {/* BTNDENCREMENT */}
        <Btndecrement onPress={decrement}>
          {/* TitleBtndecrement */}
          <TitleBtndecrement >Decrementar</TitleBtndecrement>
        </Btndecrement>
      </Container1>

    </Container>
  );
}

// const styles = StyleSheet.create({

//   incrementButton: {
//     justifyContent:'center',
//     alignItems: 'center',
//     width: 90,
//     height: 35,
//     backgroundColor: '#66ff66',
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   decrementButton: {
//     justifyContent:'center',
//     alignItems: 'center',
//     width: 90,
//     height: 35,
//     backgroundColor: '#ff6666',
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   title: {
//     color: 'white'
//   }
// });
