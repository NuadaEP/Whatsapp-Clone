import React, { Component } from 'react';
import { View, Text, StatusBar, ImageBackground } from 'react-native';


export default class Conversas extends Component {
  render() {
    return (
      <ImageBackground style={{ flex: 1, width: null }} source={ require('../images/bg-in.png') }>
        <View>
              <StatusBar backgroundColor="#114d44" /> 
              <Text>Conversas</Text>
        </View>
      </ImageBackground>
    )
  }
}
