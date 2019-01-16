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
import firebase from "firebase";

export default class SignInBody extends Component {
  constructor() {
    super();
    this.state = {
      email: "ra@gmail.com",
      password: "1122334455"
    };
  }

  determineUserType() {
    firebase
      .auth()
      .currentUser.getIdTokenResult()
      .then(idTokenResult => {
        if (!!idTokenResult.claims.admin) {
          this.props.nav.navigate("Admin");
          console.log("admin");
        } else {
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

  componentDidMount() {
    this.determineUserLoggedIn();
    console.log("componentDidMount");
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
          color="#000"
          onPress={() => {
            const toFirebase = {
              email: this.state.email,
              password: this.state.password
            };
            firebase
              .auth()
              .signInWithEmailAndPassword(toFirebase.email, toFirebase.password)
              .then(cred => {
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
