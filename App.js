import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Conversor from './src/conversor';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
      return (
    <View style={styles.container}>
      <Conversor/>
    </View>
  );
  }
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
