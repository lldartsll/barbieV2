import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Constants } from "expo";
import { createStackNavigator, createAppContainer } from "react-navigation";
import SignInScreen from "../screens/signIn";
import SignUpScreen from "../screens/signUp";
import HomeScreen from "../screens/home";
import Admin from "../screens/admin";
import firebase from "firebase";
import BarberDetails from "../screens/BarberDetails";

const AppNavigator = createStackNavigator(
  {
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    Home: HomeScreen,
    Admin: Admin,
    Details: BarberDetails
  },
  {
    initialRouteName: "Admin"
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
