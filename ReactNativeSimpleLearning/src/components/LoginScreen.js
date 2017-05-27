import React, { PropTypes } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { doLogin } from '../actions'
import { connect } from "react-redux"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

/*const LoginScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Screen A
    </Text>
    <Text style={styles.instructions}>
      This is great
    </Text>
    <Button
      onPress={() => navigation.dispatch({ type: 'Login' })}
      title="Log in"
    />
  </View>
);*/

class LoginScreen extends React.Component {
  constructor(props){
    super(props);
    this.functionLogin = this.functionLogin.bind(this);
  }
  functionLogin(){
    this.props.doLogin("user","email")
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Screen A
    </Text>
        <Text style={styles.instructions}>
          This is great
    </Text>
        <Button
          onPress={() => this.functionLogin()}
          title="Log in"
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
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
  title: 'Log In',
};



// export default LoginScreen;