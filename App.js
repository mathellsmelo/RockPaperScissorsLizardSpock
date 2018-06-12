import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

import Top from './source/components/top';
import Icon from './source/components/icon';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = { user : '', 
                   computer : '', 
                   result : ''}
  }

  jokenpo(user){
    var randomNumber = Math.floor(Math.random() * 5);
    var computer = '';

    switch(randomNumber){
      case 0: computer = 'Rock';
              break;
      case 1: computer = 'Paper';
              break;
      case 2: computer = 'Scissors';
              break;
      case 3: computer = 'Lizard';
              break;
      case 4: computer = 'Spock';
              break;          
    }

    var result = '';

    if(computer == 'Rock'){
      if(user == 'Rock'){
        result = 'DRAW';
      }else if(user == 'Lizard'){
        result = 'DEFEAT';
      }else if(user == 'Scissors'){
        result = 'DEFEAT';
      }else if(user == 'Spock'){
        result = 'VICTORY';
      }else if(user == 'Paper'){
        result = 'VICTORY';
      }
    }else if(computer == 'Paper'){
      if(user == 'Paper'){
        result = 'DRAW';
      }else if(user == 'Rock'){
        result = 'DEFEAT';
      }else if(user == 'Spock'){
        result = 'DEFEAT';
      }else if(user == 'Lizard'){
        result = 'VICTORY';
      }else if(user == 'Scissors'){
        result = 'VICTORY';
      }
    }else if(computer == 'Scissors'){
      if(user == 'Scissors'){
        result = 'DRAW';
      }else if(user == 'Lizard'){
        result = 'DEFEAT';
      }else if(user == 'Paper'){
        result = 'DEFEAT';
      }else if(user == 'Spock'){
        result = 'VICTORY';
      }else if(user == 'Rock'){
        result = 'VICTORY';
      }
    }else if(computer == 'Lizard'){
      if(user == 'Lizard'){
        result = 'DRAW';
      }else if(user == 'Paper'){
        result = 'DEFEAT';
      }else if(user == 'Spock'){
        result = 'DEFEAT';
      }else if(user == 'Scissors'){
        result = 'VICTORY';
      }else if(user == 'Rock'){
        result = 'VICTORY';
      }
    }else if(computer == 'Spock'){
      if(user == 'Spock'){
        result = 'DRAW';
      }else if(user == 'Rock'){
        result = 'DEFEAT';
      }else if(user == 'Scissors'){
        result = 'DEFEAT';
      }else if(user == 'Lizard'){
        result = 'VICTORY';
      }else if(user == 'Paper'){
        result = 'VICTORY';
      }
    }

    this.setState({ user : user, 
                    computer : computer,
                    result : result
                  });
    }

  render() {

    const { butChoice, actionPanel, gameTable, txtResult} = styles;
      
    return (
      <View>
        <Top></Top>
        <View style = {butChoice, actionPanel}>
          <View style = {{width: 60}}>
            <Button title="Rock" onPress={ () => { this.jokenpo('Rock')}}/>
          </View>
          <View style = {{width: 60}}>
            <Button title="Paper" onPress={ () => { this.jokenpo('Paper')}}/>
          </View>
          <View style = {{width: 85}}>
            <Button title="Scissors" onPress={ () => { this.jokenpo('Scissors')}}/>
          </View>
          <View style = {{width: 85}}>
            <Button title="Lizard" onPress={ () => { this.jokenpo('Lizard')}}/>
          </View>
          <View style = {{width: 85}}>
            <Button title="Spock" onPress={ () => { this.jokenpo('Spock')}}/>
          </View>
        </View>

        <View style = {gameTable}>
          <Text style ={txtResult}>{this.state.result}</Text>
          <Icon choice = {this.state.computer} player = 'Computer'></Icon>
          <Icon choice = {this.state.user} player = 'User'></Icon>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  butChoice: {
    marginTop: 10
  },
  actionPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  gameTable: {
    alignItems: 'center',
    marginTop: 6,
  },
  txtResult: {
    fontSize: 25,
    fontWeight : 'bold',
    color: 'green',
    height: 30,
    marginBottom: 6
  },
});





