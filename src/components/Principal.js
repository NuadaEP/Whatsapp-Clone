import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Conversas from './Conversas';
import Contatos from './Contatos';

const _Conversas = () => (
  // <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
  <Conversas />
);
const _Contatos = () => (
  // <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
  <Contatos />
);


export default class Principal extends React.Component {
  
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
          first: _Conversas,
          second: _Contatos,
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