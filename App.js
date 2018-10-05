//react components
import React, { Component } from 'react';

//another components
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from '@firebase';
import ReduxThunk from 'redux-thunk';

//my components
import Route from './src/Route.js';
import reducers from './src/reducers/index.js';

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
        <Provider store={ createStore( reducers, {}, applyMiddleware(ReduxThunk)) }>
          <Route />
        </Provider>
    );
  }
}
