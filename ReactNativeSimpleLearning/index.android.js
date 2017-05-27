/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   AppRegistry
// } from 'react-native';
// import Root from './src/root'
// AppRegistry.registerComponent('ReactNativeSimpleLearning', () => Root);

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';

// import AppReducer from './src/reducers';
import AppWithNavigationState from './src/navigators/AppNavigator';
import thunk from "redux-thunk"
import store from './src/stores/config'


class ReduxExampleApp extends React.Component {
  // store = createStore(AppReducer,applyMiddleware(thunk));

  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
AppRegistry.registerComponent('ReactNativeSimpleLearning', () => ReduxExampleApp);
export default ReduxExampleApp;