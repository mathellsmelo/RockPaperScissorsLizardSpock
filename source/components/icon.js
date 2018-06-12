import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

class Icon extends Component{
  render(){

    const {txtPlayer, Icon} = styles;

    if(this.props.choice == 'Rock'){

      return(
        <View style = {Icon}>
          <Text style = {txtPlayer}>{this.props.player}</Text>
          <Image source ={require('../../imgs/rock.jpg')} />
        </View>
      );

    }else if(this.props.choice == 'Paper'){
      
      return(
        <View style = {Icon}>
          <Text style = {txtPlayer}>{this.props.player}</Text>
          <Image source ={require('../../imgs/paper.jpg')} />
        </View>
      );

    }else if(this.props.choice == 'Scissors'){
      
      return(
        <View style = {Icon}>
          <Text style = {txtPlayer}>{this.props.player}</Text>
          <Image source ={require('../../imgs/scissors.jpg')} />
        </View>
      );

    }else if(this.props.choice == 'Lizard'){
      
      return(
        <View style = {Icon}>
          <Text style = {txtPlayer}>{this.props.player}</Text>
          <Image source ={require('../../imgs/lizard.jpg')} />
        </View>
      );

    }else if(this.props.choice == 'Spock'){
      
      return(
        <View style = {Icon}>
          <Text style = {txtPlayer}>{this.props.player}</Text>
          <Image source ={require('../../imgs/spock.jpg')} />
        </View>
      );

    }else{
      return false;
    }  
  }
}

const styles = StyleSheet.create({
  Icon: {
    alignItems: 'center',
    margin: 18,
  },
  txtPlayer: {
    fontSize: 18,
    marginBottom: 5
  } 
});

export default Icon; 