/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

<<<<<<< HEAD
import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import Root from './src/root'
AppRegistry.registerComponent('ReactNativeSimpleLearning', () => Root);

/*import React from 'react';
=======
// import React, { Component } from 'react';
// import {
//   AppRegistry
// } from 'react-native';
// import Root from './src/root'
// AppRegistry.registerComponent('ReactNativeSimpleLearning', () => Root);

import React from 'react';
>>>>>>> 1f9ec102d65a4c24c7ecb6ae3cef7e2fb74cbcf5
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
<<<<<<< HEAD
export default ReduxExampleApp;*/
=======
export default ReduxExampleApp;
>>>>>>> 1f9ec102d65a4c24c7ecb6ae3cef7e2fb74cbcf5
