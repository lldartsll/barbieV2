import React, { Component } from "react";
import { TouchableOpacity, FlatList } from "react-native";
import { Card, CardItem, Text, Body, Right } from "native-base";
import { FontAwesome } from '@expo/vector-icons'

export default class Admin extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      users: [
        'mmm', 'hhh', 'ggf', 'gfgfg'
      ]
    }
  }

  componentDidMount() { }

  remove = (i) => {
    this.setState(
      prevState => {
        let users = prevState.users.slice();
        users.splice(i, 1);
        return { users };
      });
  }

  render() {
    return (
      <FlatList
        data={this.state.users}
        renderItem={({ item, index }) =>
          <Card key={index}>
            <CardItem key={index} style={{ height: 50 }}>
              <Body>
                <Text >
                  {item}
                </Text>
              </Body>
              <Right>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 5,
                    borderRadius: 5,
                    borderColor: '#32CD32'
                  }}
                  onPress={() => this.remove(index)}>
                  <FontAwesome name="minus" size={15} color='red' />
                </TouchableOpacity >
              </Right>
            </CardItem>
          </Card>
        }
        keyExtractor={item => item.toString()}
      />
    );
  }
}
