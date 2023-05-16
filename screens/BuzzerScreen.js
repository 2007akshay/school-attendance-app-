import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class BuzzerScreen extends React.Component {
  render() {
    return (
      <View>
        <h3>Funny Jokes!</h3>
        <Text>
          Why do we tell actors to break a leg? Because every show has a cast.
        </Text>

        <Text>
          Why is Cinderella so bad at soccer? Because she always runs away from
          the ball!
        </Text>

        <Text>
          Did you hear the one about the little mountain? It's hill-arious!
        </Text>

        <Text>Where do polar bears keep their money?  In a snow bank!</Text>
      </View>
    );
  }
}