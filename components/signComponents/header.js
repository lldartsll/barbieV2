import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Button
} from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <StatusBar barStyle="light-content" />
        <Button
          title="Sign in"
          color="#000"
          onPress={() => {
            const { navigate } = this.props.nav;
            navigate("SignIn");
          }}
        />
        <Button
          title="Sign up"
          color="#000"
          onPress={() => {
            const { navigate } = this.props.nav;
            navigate("SignUp");
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#2A2E43",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  image: { height: 40, width: 95 },
  title: { marginLeft: 20 }
});
