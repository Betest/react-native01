import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';

export default function App() {
  

  const [name,setName] = useState(""); 
  const saludo = () => {Alert.alert("Bienvenido "+String(name))};

  return (
    <View style={styles.container}>
      <Text>Bienvenid@ {name}</Text>
      <Image style={styles.img} source={require('./assets/iniciar-sesion.png')} ></Image>
      <TextInput maxLength={8} style={styles.user} placeholder="Usuario" onChangeText={(text)=>setName(text)}></TextInput>
      <TextInput autoCapitalize="characters" maxLength={8} style={styles.pass} placeholder="Contraseña"></TextInput>
      <Button style={styles.btn} title="Iniciar" onPress={saludo}></Button>

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
  img: {
    width:50,
    height:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  user: {
    borderColor: '#000000',
    borderWidth:1,
    borderRadius:5,
    width: 100,
    textAlign: 'center'
  },
  pass: {
    borderColor: '#000000',
    borderWidth:1,
    borderRadius:5,
    width: 100,
    textAlign: 'center'
  },
  btn: {
    borderRadius:60
    
  },
});
