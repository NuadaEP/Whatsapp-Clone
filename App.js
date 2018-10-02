//react components
import React, { Component } from 'react';

//another components
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'ReduxThunk';

//my components
import Route from './src/Route.js';
import reducers from './src/reducers';

export default class App extends Component {

  componentWillMount(){
     firebase.initializeApp({
       apiKey: "AIzaSyCc59xH6gkZcGCB485K1RDyiLsr7AR9aW8",
       authDomain: "app8-59dc8.firebaseapp.com",
       databaseURL: "https://app8-59dc8.firebaseio.com",
       projectId: "app8-59dc8",
       storageBucket: "app8-59dc8.appspot.com",
       messagingSenderId: "907014256901"
     });
  }

  render() {
    return(
        <Provider store={ createStore(reducers, {}, applyMiddleware(ReduxThunk)) }>
          <Route />
        </Provider>
    );
  }
}

// export default App;

// export default props => (
//  <FormCadastro />
// );

//===============================================================outro

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
