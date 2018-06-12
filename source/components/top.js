import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';

class Top extends Component{
  render(){
    return(
      <View style = {{alignItems: 'center', marginBottom:15, marginTop: 20}}>
          <Image source={require('../../imgs/logo.png')} />
      </View>
    );
  }
}

export default Top; 