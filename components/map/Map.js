import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { MapView } from "expo";
import { Svg } from "expo";
import StarRating from "./StarRating";
import { withNavigation } from "react-navigation";

const { Image, Circle, Rect } = Svg;

const Marker = MapView.Marker;

class Map extends Component {
  renderMarkers() {
    return this.props.places.map((marker, i) => (
      <Marker
        key={i}
        title={marker.name}
        coordinate={marker.coords}
        onPress={() =>
          this.props.navigation.navigate("Details", {
            info: marker,
            title: marker.name,
            rating: marker.rating,
            description: marker.description
          })
        }
      />
    ));
  }
  componentDidMount() {}

  render() {
    const region = this.props.region;
    return (
      <MapView
        style={styles.container}
        region={region}
        showsUserLocation
        showsMyLocationButton
      >
        {this.renderMarkers()}
      </MapView>
    );
  }
}

const styles = {
  container: {
    width: "100%",
    height: "100%"
  }
};

export default withNavigation(Map);
