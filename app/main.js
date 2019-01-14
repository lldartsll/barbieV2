import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Constants } from "expo";
import { createStackNavigator, createAppContainer } from "react-navigation";
import SignInScreen from "../screens/signIn";
import SignUpScreen from "../screens/signUp";
import HomeScreen from "../screens/home";
import Admin from "../screens/admin";
import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDWEjet9v-6QrNjlbuH0yGZ9LmaR7rGYLA",
  authDomain: "authtest-54626.firebaseapp.com",
  databaseURL: "https://authtest-54626.firebaseio.com",
  projectId: "authtest-54626",
  storageBucket: "authtest-54626.appspot.com",
  messagingSenderId: "694028601657"
};
firebase.initializeApp(config);

const AppNavigator = createStackNavigator(
  {
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    Home: HomeScreen,
    Admin: Admin
  },
  {
    initialRouteName: "SignIn"
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default class Main extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "#2A2E43",
          flex: 1
        }}
      >
        <View
          style={{
            flex: 1,
            marginTop: Constants.statusBarHeight
          }}
        >
          <AppContainer />
        </View>
      </View>
    );
  }
}
