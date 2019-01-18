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

import firebase from "firebase";

export default class SignInBody extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      name: "",
      phoneNumber: ""
    };
  }
  determineUserType() {
    firebase
      .auth()
      .currentUser.getIdTokenResult()
      .then(idTokenResult => {
        if (!!idTokenResult.claims.admin) {
          // Show admin UI.
          //  showAdminUI();
          console.log("admin");
        } else {
          // Show regular user UI.
          //  showRegularUI();
          this.props.nav.navigate("Home");
          console.log("regular");
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  determineUserLoggedIn() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        console.log("logged in");
        this.determineUserType();
      } else {
        // No user is signed in.
        console.log("not signed");
      }
    });
  }
  render() {
    return (
      <View style={styles.headerContainer}>
        <View
          style={{
            backgroundColor: "#ffffff",
            width: "80%",
            height: 40,
            borderRadius: 10
          }}
        >
          <TextInput
            placeholder="name"
            style={styles.textBox}
            value={this.state.name}
            onChange={event => {
              this.setState({
                name: event.nativeEvent.text
              });
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#ffffff",
            width: "80%",
            height: 40,
            borderRadius: 10
          }}
        >
          <TextInput
            placeholder="phone number"
            style={styles.textBox}
            value={this.state.phoneNumber}
            onChange={event => {
              this.setState({
                phoneNumber: event.nativeEvent.text
              });
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#ffffff",
            width: "80%",
            height: 40,
            borderRadius: 10
          }}
        >
          <TextInput
            placeholder="email"
            style={styles.textBox}
            value={this.state.email}
            onChange={event => {
              this.setState({
                email: event.nativeEvent.text
              });
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#ffffff",
            width: "80%",
            height: 40,
            borderRadius: 10
          }}
        >
          <TextInput
            placeholder="password"
            style={styles.textBox}
            value={this.state.password}
            onChange={event => {
              this.setState({
                password: event.nativeEvent.text
              });
            }}
          />
        </View>
        <Button
          title="continue"
          color="#fff"
          onPress={() => {
            const toFirebase = {
              name: this.state.name,
              email: this.state.email,
              phoneNumber: this.state.phoneNumber,
              password: this.state.password
            };
            //TODO: send this to firebase
            console.log(`${toFirebase}`);
            firebase
              .auth()
              .createUserWithEmailAndPassword(
                toFirebase.email,
                toFirebase.password
              )
              .then(cred => {
                // console.log(cred.user.uid);
                this.determineUserLoggedIn();
              })
              .catch(err => {
                console.log(err);
              });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#2A2E43"
  },
  textBox: {
    width: "100%",
    height: "100%",
    textAlign: "center"
  }
});
