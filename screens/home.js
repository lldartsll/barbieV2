/*
  this is the app home screen where home component and mapview reside
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
import Home from "../components/map/home";
import firebase from "firebase";
import { StackActions, NavigationActions } from "react-navigation";

export default class SignInScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  //costumization of navigation components
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

  //when sign out BTN is pressed
  _signOut = () => {
    const { navigate } = this.props.navigation;
    firebase
      .auth()
      .signOut()
      .then(
        () => {
          this._navigateToNewStack();
          console.log("signed out");
        },
        reson => {
          console.log(reson);
        }
      );
  };
  //used to clear and navigate to signin screen
  _navigateToNewStack() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "SignIn" })]
    });
    this.props.navigation.dispatch(resetAction);
  }
  componentDidMount() {
    this.props.navigation.setParams({ signOut: this._signOut });
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
