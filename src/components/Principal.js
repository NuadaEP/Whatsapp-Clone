import React, { Component } from 'react';

import { View, StyleSheet, Dimensions, Image, TouchableHighlight } from 'react-native';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { connect } from 'react-redux';

import { habilitaInclusaoContato } from '../actions/AppActions';

import Conversas from './Conversas';
import Contatos from './Contatos';

class Principal extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: ( 
        <TouchableHighlight 
          onPress={ 
            () => {
              navigation.navigate('AdicionarContato');
            } 
          } 
          underlayColor="#114d44"
        >
          <Image 
              source={require('../images/adicionar-contato.png')} 
              style={{ marginRight: 10 }} 
          />
        </TouchableHighlight>
      ),
    }
  }
  
  _Conversas = () => (
    <Conversas />
  );
  _Contatos = () => (
    <Contatos navigation={this.props.navigation}/>
  );

  renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: '#115e54' }}
      tabStyle={{ elevation: 1 }}
    />
  )

  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Conversas' },
      { key: 'second', title: 'Contatos' },
    ],
  };


  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: this._Conversas,
          second: this._Contatos,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ 
          height: 0,
          width: Dimensions.get('window').width
        }}
        renderTabBar={ this.renderTabBar }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});

export default connect(null, { habilitaInclusaoContato })(Principal);