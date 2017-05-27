import React from "react"

import { StackNavigator } from 'react-navigation';

import Login from './components/login'
import Home from './components/home'

export default App = StackNavigator({
  Login: { screen: Login },
  Home: { screen: Home } 
});

