firebase
  .database()
  .ref()
  .child("Barbers")
  .child("j3Vw8GADG9NHHohwOBsvSHuwF2H3")
  .set({
    coords: { latitude: 33.296598, longitude: 44.2881 },
    description:
      "Lorem ipsum dolor sit amet, id eam quod gubergren elaboraret. Eu decore iudicabit neglegentur usu. Eum at nostrum blandit. Duis quando noster eam ea. Probo pertinacia adipiscing usu et, ei essent concludaturque eos.",
    name: "Jazz Barber",
    queue: [
      { name: "ramy" },
      { name: "ramy" },
      { name: "ramy" },
      { name: "ramy" }
    ],
    rating: 4,
    uid: "j3Vw8GADG9NHHohwOBsvSHuwF2H3"
  });






          onPress={() =>
          this.props.navigation.navigate("Details", {
            title: marker.name,
            rating: marker.rating,
            description: marker.description
          })
        }
