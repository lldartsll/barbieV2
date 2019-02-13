/*
  sign in screen
 */
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
import SignInBody from "../components/signComponents/signInBody";

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: "Sign In",
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
        <SignInBody nav={this.props.navigation} />
      </View>
    );
  }
}
