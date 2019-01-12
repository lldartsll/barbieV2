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
import Home from "../components/map/home";

export default class SignInScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <Text style={{ fontWeight: "bold", color: "#fff" }}>Home</Text>
      ),
      headerRight: (
        <Button
          onPress={navigation.getParam("logIn")}
          title="Login"
          color="#fff"
        />
      ),
      headerStyle: {
        backgroundColor: "#2A2E43"
      }
    };
  };
  _login = () => {
    const { navigate } = this.props.navigation;
    navigate("SignIn");
  };
  componentDidMount() {
    this.props.navigation.setParams({ logIn: this._login });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <Home />
      </View>
    );
  }
}
