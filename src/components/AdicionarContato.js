import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

export default class Contatos extends Component {
  render() {
    return (
      <View>
            <StatusBar backgroundColor="#114d44" /> 
            <Text>Adicionar Contato</Text>
      </View>
    )
  }
}
