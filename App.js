import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Root from './src/Root'
import { Provider } from 'react-redux';
//import store from './src/store';
import {createStore, applyMiddleware} from 'redux'
import reducers from './src/reducers';

const store = createStore(reducers)
const App = () => {

    return (
      <Provider store={store}>
        <Root/>
      </Provider>
      
    )
  }

export default App
