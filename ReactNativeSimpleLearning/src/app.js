import React from "react"

import { addNavigationHelpers,StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import Login from './components/login'
import Home from './components/home'
import { connect } from 'react-redux';

export const App = StackNavigator({
  Login: { screen: Login },
  Home: { screen: Home } 
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <App navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);