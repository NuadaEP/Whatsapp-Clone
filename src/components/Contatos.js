import React, { Component } from 'react';
import { View, Text, StatusBar, ListView, ImageBackground, ScrollView } from 'react-native';

import { connect } from 'react-redux';

import _ from 'lodash';

import { contatosUsuarioFetch } from '../actions/AppActions';

class Contatos extends Component {

  //this native function is executed just one time, on the moment of the mount component
  componentWillMount(){
    this.props.contatosUsuarioFetch();

    this.criaFonteDeDados( this.props.contatos );
  }

  //this native function is just executed when have a diferent value to the props, so the first load of this component dont will execute
  componentWillReceiveProps(nextProps){
    this.criaFonteDeDados( nextProps.contatos );
  }

  criaFonteDeDados( contatos ){ 

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.fonteDeDados = ds.cloneWithRows( contatos );
    
  }

  render() {
    return (
      <ImageBackground style={{ flex: 1, width: null }} source={ require('../images/bg-in.png') }>
        <ScrollView>
              <StatusBar backgroundColor="#114d44" /> 
              <ListView  
                enableEmptySections
                dataSource={ this.fonteDeDados }
                renderRow={ data => {
                    return (
                      <View style={{ flex: 1, padding: 20, borderBottomColor: '#ccc', borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 25 }}>{ data.nome }</Text>
                        <Text style={{ fontSize: 18 }}>{ data.email }</Text>
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

    const contatos = _.map(state.ListaContatosReducer, (val, uid) => {
      return { ...val, uid }
    });

  return{
    contatos: contatos,
  }
}

export default connect(MapStateToProps, { contatosUsuarioFetch })(Contatos);