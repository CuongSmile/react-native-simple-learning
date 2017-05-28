
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  Alert,
  TouchableHighlight,
  BackHandler,
} from 'react-native';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import { doLogin } from '../actions'
import BaseComponent from './baseComponent'
import { NavigationActions } from 'react-navigation'
// const navigateAction = NavigationActions.navigate({
//   routeName: 'Home',

//   params: {},

//   action: NavigationActions.navigate({ routeName: 'SubProfileRoute'})
// })
class Login extends BaseComponent {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
    this.functionLogin = this.functionLogin.bind(this);
<<<<<<< HEAD
    // this.props.navigation.dispatch(navigateAction)
=======
    this.props.navigation.dispatch(navigateAction)
>>>>>>> 1f9ec102d65a4c24c7ecb6ae3cef7e2fb74cbcf5

  }

  functionLogin() {
    const { username, password } = this.state;
    if(!this.props.loginReducer.isLoginDoing){
    this.props.doLogin(username, password)
    }
  }
  // componentWillReceiveProps (nextProps) {
  //    console.log("componentWillReceiveProps");
  //     const { navigate, goBack } = this.props.navigation;
  //    if(nextProps.loginReducer.isLoginSuccess){
  //       // this._navigateTo('Home')
  //       navigate('Home',nextProps.loginReducer.loginData);
  //    }
  // }
  static navigationOptions = {
    header: null
  }
  render() {
    const { navigate, goBack } = this.props.navigation;
    return (
      <View style={{ backgroundColor: 'color', marginTop: 10 }} >
        <TextInput
          style={{ height: 40 }}
          placeholder="Username"
          onChangeText={value => this.setState({ username: value })}
        />
        <TextInput
          style={{ height: 40 }}
          placeholder="Password"
          editable = {false}
          onChangeText={value => this.setState({ password: value })}
        />
        <Button
          onPress={this.functionLogin}
          title="Login"
          color="#841584"
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    loginReducer: state.loginReducer
  };
}
function mapDispatchToProps(dispatch) {
  return {
    doLogin: (username, password) => dispatch(doLogin(username, password))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)


