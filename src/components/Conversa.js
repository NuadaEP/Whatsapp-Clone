import React, { Component } from 'react'
import { View, Text, ImageBackground, TextInput, Image, TouchableHighlight } from 'react-native';

export default class Conversa extends Component {
  render() {
    return (

      <ImageBackground style={{ flex: 1, width: null }} source={ require('../images/bg-in.png') }>
          <View style={{ flex:1, paddingBottom: 20 }}>
          </View>

          <View style={{ flexDirection: 'row', height: 60, padding: 10, marginBottom: 10 }}>
            <TextInput 
              style={{ flex: 4, backgroundColor: '#fff', fontSize: 18, height: 50, borderRadius: 100, paddingLeft: 20, paddingRight: 20 }}
              placeholder="E-mail"
							placeholderTextColor="#d3d3d3"
            />

            <TouchableHighlight 
              onPress={ () => false } 
              style={{ backgroundColor: '#13665a', width: 50, height: 50, alignItems: 'center', justifyContent: "center", borderRadius: 100, marginLeft: 5 }}
            >
              <Image 
                source={ require('../images/enviar.png') }
                style={{ width: 25, height: 25, }} 
              />
            </TouchableHighlight>
          </View>
      </ImageBackground>
    )
  }
}
