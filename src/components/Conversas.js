import React, { Component } from 'react';
import { View, Text, StatusBar, ImageBackground, ListView, ScrollView, TouchableHighlight } from 'react-native';

import { connect } from 'react-redux';

import _ from 'lodash';

import { conversasUsuarioFetch } from '../actions/AppActions';

class Conversas extends Component {

  componentWillMount() {
    this.props.conversasUsuarioFetch();

    this.criaFonteDeDados(this.props.conversas);
  }

  componentWillReceiveProps(nextProps) {
    this.criaFonteDeDados(nextProps.conversas);

  }

  criaFonteDeDados(conversas) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.dataSource = ds.cloneWithRows(conversas);
  }

  render() {
    return (
      <ImageBackground style={{ flex: 1, width: null }} source={ require('../images/bg-in.png') }>
        <ScrollView>
              <StatusBar backgroundColor="#114d44" /> 
              
              <ListView 
                  enableEmptySections
                  dataSource={ this.dataSource }
                  renderRow={ data => {
                      return(
                        <View>
                          <TouchableHighlight onPress={ () => this.props.navigation.navigate('Conversa', { name: data.nome, email: data.email }) }>
                            <View style={{ flex: 1, padding: 20, borderBottomColor: '#ccc', borderBottomWidth: 1 }}>
                                <Text style={{ fontSize: 25 }}>{ data.nome }</Text>
                                <Text style={{ fontSize: 15 }}>{ data.mensagem }</Text>
                            </View>
                        </TouchableHighlight>
                        </View>
                      )
                    } 
                  }
              /> 

        </ScrollView>
      </ImageBackground>
    )
  }
}

const MapStateToProps = state => {
  
  const conversas = _.map(state.ListaConversasReducer, (val, uid) => {
    return { ...val, uid }
  });

  return{
    conversas
  }

}

export default connect(MapStateToProps, { conversasUsuarioFetch })(Conversas);
