import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Button,
  TextInput
} from "react-native";
import Header from "../components/signComponents/header";
import SignUpBody from "../components/signComponents/signUpBody";

export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: "Sign Up",
    headerStyle: {
      backgroundColor: "#2A2E43"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header nav={this.props.navigation} />
        <SignUpBody />
      </View>
    );
  }
}
