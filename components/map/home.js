import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Button,
  AsyncStorage
} from "react-native";

export default class Home extends Component {
  componentDidMount() {}
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff"
        }}
      >
        <Text>here is the map screen</Text>
      </View>
    );
  }
}
