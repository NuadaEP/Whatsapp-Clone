import React, { Component } from 'react'
import { View, Text, ImageBackground, TextInput, Image, TouchableHighlight } from 'react-native';

import { connect } from 'react-redux';

import { digitaMensagem } from '../actions/AppActions';

class Conversa extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.getParam('name'),
    }
  }
  render() {
    return (

      <ImageBackground style={{ flex: 1, width: null }} source={ require('../images/bg-in.png') }>
          <View style={{ flex:1, paddingBottom: 20 }}>
          </View>

          <View style={{ flexDirection: 'row', height: 60, padding: 10, marginBottom: 10 }}>
            <TextInput 
              style={{ flex: 4, backgroundColor: '#fff', fontSize: 18, height: 50, borderRadius: 100, paddingLeft: 20, paddingRight: 20 }}
              placeholder="Digite aqui..."
							placeholderTextColor="#d3d3d3"
              value={ this.props.mensagem }
              onChangeText={ text => this.props.digitaMensagem(text) }
              returnKeyType={ 'done' }
              onSubmitEditing={ () => alert(this.props.mensagem) }
            />

            <TouchableHighlight 
              onPress={ () => alert(this.props.mensagem) } 
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

const mapStateToProps = state => (
  {
    mensagem: state.AppReducer.mensagem
  }
)


export default connect(mapStateToProps, { digitaMensagem })(Conversa);
