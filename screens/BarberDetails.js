import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";
import StarRating from "../components/map/StarRating";
import firebase from "firebase";

export default class BarberDetails extends Component {
  constructor() {
    super();
    this.state = {};
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <Text style={{ fontWeight: "bold", color: "#fff" }}>Details</Text>
      ),
      headerStyle: {
        backgroundColor: "#2A2E43"
      }
    };
  };

  _book(barberInfo) {
    barberInfo.queue.push({ name: "mukla" });
    firebase
      .database()
      .ref()
      .child("Barbers")
      .child(barberInfo.uid)
      .set({
        coords: barberInfo.coords,
        description: barberInfo.description,
        name: barberInfo.name,
        queue: barberInfo.queue,
        rating: barberInfo.rating,
        uid: barberInfo.uid
      });

    const { navigate } = this.props.navigation;
    alert("booking complete");
    navigate("Home");
  }

  render() {
    const { navigation } = this.props;
    const barberInfo = navigation.getParam("info", {
      coords: { latitude: 33.296598, longitude: 44.2881 },
      description: "Lorem",
      queue: [{}, {}],
      rating: 4
    });
    const title = navigation.getParam("title", "Barber Name");
    const rating = navigation.getParam("rating", "0");
    const description = navigation.getParam("description", "Description Here");
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={{
              uri: "https://bootdey.com/img/Content/avatar/avatar6.png"
            }}
          />
          <View style={styles.headerInfo}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.starRating}>
              <StarRating rating={JSON.stringify(rating)} />
              <Text style={styles.reviews}> 24 reviews</Text>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.description}>{description}</Text>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                this._book(barberInfo);
              }}
            >
              <Text style={styles.buttonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2A2E43"
  },
  header: {
    backgroundColor: "#2A2E43",
    height: 200
  },
  headerInfo: {
    padding: 10
  },
  image: {
    height: 190
  },
  title: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "200"
  },
  starRating: {
    flexDirection: "row",
    backgroundColor: "#2A2E43"
  },
  reviews: {
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 20
  },
  descriptionTitle: {
    fontSize: 26,
    color: "#000000",
    fontWeight: "400",
    marginTop: 10,
    textAlign: "left"
  },
  description: {
    fontSize: 14,
    color: "#000000",
    marginTop: 10
  },
  body: {
    marginTop: 80,
    backgroundColor: "#2A2E43"
  },
  bodyContent: {
    flex: 1,
    padding: 10,
    backgroundColor: "#2A2E43"
  },
  buttonContainer: {
    marginTop: 40,
    marginBottom: 20,
    height: 50,
    fontSize: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#7BD8EB"
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16
  }
});