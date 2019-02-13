/*
  this is the app entry point file
 */

import React from "react";
import { StyleSheet, View, StatusBar, AsyncStorage } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Main from "./app/main";

const styles = StyleSheet.create({
  image: {
    width: "95%",
    height: "70%"
  }
});

//intro slider slides
const slides = [
  {
    key: "somethun",
    title: "Search",
    text: "Look for the most suitable barber near you",
    image: require("./assets/slider1.jpg"),
    imageStyle: styles.image,
    backgroundColor: "#2A2E43"
  },
  {
    key: "somethun-dos",
    title: "Check",
    text: "See how many clients are before you, from the comfort of your home",
    image: require("./assets/slider2.jpg"),
    imageStyle: styles.image,
    backgroundColor: "#2A2E43"
  },
  {
    key: "somethun1",
    title: "Book!",
    text: "Confirm your booking",
    image: require("./assets/slider3.jpg"),
    imageStyle: styles.image,
    backgroundColor: "#2A2E43"
  }
];
export default class App extends React.Component {
  state = {
    showRealApp: false
  };
  _onDone = () => {
    this.setState({ showRealApp: true });
    this._storeData();
  };
  _storeData = async () => {
    try {
      await AsyncStorage.setItem("KeylldartsllIntroSlider", "1");
    } catch (error) {}
  };
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("KeylldartsllIntroSlider");
      if (value !== null) {
        this.setState({ showRealApp: true });
      }
    } catch (error) {}
  };

  componentDidMount() {
    this._retrieveData();
  }
  render() {
    //depending on the state eather intro-slider shows or the app
    if (this.state.showRealApp) {
      return <Main />;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="light-content" />
          <AppIntroSlider slides={slides} onDone={this._onDone} />
        </View>
      );
    }
  }
}
