import React, { Component } from 'react';
import { View, Text, StatusBar, TextInput, Button, ImageBackground } from 'react-native';

export default class AdicionarContato extends Component {
  render() {
    return (
      <ImageBackground style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around', padding: 20, width: null }} source={ require('../images/bg-in.png') }>
        <StatusBar backgroundColor="#114d44" /> 

        <View>
          <TextInput 
                placeholder="E-mail"
                placeholderTextColor="#115e54"
                selectionColor="#115e54"
                style={{ fontSize: 20, height: 45, borderBottomColor: '#115e54', borderBottomWidth: 0.9, color: '#115e54' }} 
                onChangeText={ () => false } 
              />
        </View>

        <View>
          <Button 
            title='Adicionar'
            color='#115e54'
            onPress={ () => false }
          />
        </View>

      </ImageBackground>
    )
  }
}
