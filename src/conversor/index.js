import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

class Conversor extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
      return (
    <View style={styles.container}>
      <Text style={styles.titulo}>USD para BRL</Text>
      <TextInput
      placeholder='Valor a ser convertido'
      style={styles.areaInput}
      onChangeText={() => {}}
      keyboardType='numeric'
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTxt}>Converter</Text>
      </TouchableOpacity>
      <Text style={styles.valorConvertido}>10.00</Text>

    </View>
  );
  }
}

export default Conversor;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000'
  },
  areaInput:{
    width:280,
    height:45,
    backgroundColor: '#ccc',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 20,
    color: '#000',
    borderRadius: 5
  },
  btn:{
    width:150,
    height: 45,
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  btnTxt:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff'
  },
  valorConvertido:{
    fontSize:30,
    fontWeight: 'bold',
    color: '#000'
  }

});