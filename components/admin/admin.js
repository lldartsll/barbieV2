/*
  admin components where the barber can view its specific queue and mark entries as finished
 */
import React, { Component } from "react";
import { TouchableOpacity, FlatList, Button } from "react-native";
import { Card, CardItem, Text, Body, Right, View } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import firebase from "firebase";

export default class Admin extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      text: "",
      users: ["Farah", "Mustafa"],
      dummy: ""
    };
  }

  componentWillMount() {
    let fireBaseUser = firebase.auth().currentUser;
    // console.log(fireBaseUser.uid);
    this.setState = { id: fireBaseUser.uid };
  }
  componentDidMount() {
    let id = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref("/Barbers/" + id + "/queue")
      .on("value", snapshot => {
        let data = snapshot.val();
        console.log(data);

        this.populateCards(data);
      });
  }

  populateCards(data) {
    console.log("populateCards");
    var ldb = this.state.users;
    for (i in data) {
      ldb.push(data[i].name);
    }
  }
  componentDidUpdate() {}

  remove = i => {
    // let users = this.state.users;
    // users.splice(i, 1);
    // this.setState({
    //   users: users
    // });
    console.log(i);
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.users}
          renderItem={({ item, index }) => (
            <Card key={index}>
              <CardItem key={index} style={{ height: 50 }}>
                <Body>
                  <Text>{item}</Text>
                </Body>
                <Right>
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 5,
                      borderRadius: 5,
                      borderColor: "#32CD32"
                    }}
                    onPress={() => this.remove(index)}
                  >
                    <FontAwesome name="minus" size={15} color="red" />
                  </TouchableOpacity>
                </Right>
              </CardItem>
            </Card>
          )}
          keyExtractor={item => item.toString()}
        />
      </View>
    );
  }
}
