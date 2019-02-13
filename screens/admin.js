/*
  admin screen
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
  TextInput,
  AsyncStorage
} from "react-native";
import Admin from "../components/admin/admin";
import firebase from "firebase";

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
          onPress={navigation.getParam("signOut")}
          title="Sign Out"
          color="#fff"
        />
      ),
      headerStyle: {
        backgroundColor: "#2A2E43"
      }
    };
  };

  _signOut = () => {
    const { navigate } = this.props.navigation;
    firebase
      .auth()
      .signOut()
      .then(
        () => {
          navigate("SignIn");
          console.log("signed out");
        },
        reson => {
          console.log(reson);
        }
      );
  };
  componentDidMount() {
    this.props.navigation.setParams({ signOut: this._signOut });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <Admin />
      </View>
    );
  }
}
