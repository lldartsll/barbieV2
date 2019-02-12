import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Button,
  AsyncStorage,
  SafeAreaView
} from "react-native";
import { Location, Permissions } from "expo";
import { MapView } from "expo";
import { Svg } from "expo";
import Map from "./Map";
import firebase from "firebase";

// // Initialize Firebase
var config1 = {
  apiKey: "AIzaSyDWEjet9v-6QrNjlbuH0yGZ9LmaR7rGYLA",
  authDomain: "authtest-54626.firebaseapp.com",
  databaseURL: "https://authtest-54626.firebaseio.com",
  projectId: "authtest-54626",
  storageBucket: "authtest-54626.appspot.com",
  messagingSenderId: "694028601657"
};
firebase.initializeApp(config1);
const deltas = {
  latitudeDelta: 0.1,
  longitudeDelta: 0.1
};

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dbs: null,
      region: null,
      barberShops: []
    };
  }
  componentWillMount() {
    this.getLocationAsync();
  }

  componentDidMount() {
    firebase
      .database()
      .ref("/Barbers")
      .on("value", snapshot => {
        let x = snapshot.val();
        this.setState({
          dbs: x
        });
        this.formatFirebaseData(this.state.dbs);
      });
  }
  formatFirebaseData(data) {
    let markersArray = [];
    for (x in data) {
      markersArray.push(data[x]);
    }
    this.setState({
      barberShops: markersArray
    });
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    } else {
      let location = await Location.getCurrentPositionAsync({});
      const region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        ...deltas
      };
      await this.setState({ region });
    }
  };

  render() {
    const { region, barberShops } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Map region={region} places={barberShops} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7BD8EB",
    alignItems: "center",
    justifyContent: "center"
  }
});
