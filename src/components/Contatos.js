import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

import { connect } from 'react-redux';

import { contatosUsuarioFetch } from '../actions/AppActions';

class Contatos extends Component {

  componentWillMount(){
    this.props.contatosUsuarioFetch();
  }

  render() {
    return (
      <View>
            <StatusBar backgroundColor="#114d44" /> 
            <Text>Contatos</Text>
      </View>
    )
  }
}


export default connect(null, { contatosUsuarioFetch })(Contatos);