import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  Alert,
  TouchableHighlight,
  BackHandler,
} from 'react-native';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';

export default class Home extends React.Component {
  static navigationOptions = {
    header: null
  }
  render() {
    const { navigate, goBack } = this.props.navigation;
    return (
      <View  >
        <Text numberOfLines={5}>Hello {this.props.navigation.state.params.username}
        </Text>

      </View>
    );
  }
}