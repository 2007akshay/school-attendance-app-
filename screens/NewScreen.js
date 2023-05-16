import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class NewScreen extends React.Component {
  render() {
    return (
      <View>
        <h3>Top News</h3>
        <Text style={styles.news}>
          Elon Musk has become the richest man in the world! He tops Jeff Bezos
          with a whopping net worth of 185 BILLION dollars! He tops Bezos by 1.5
          billion more dollars.
        </Text>
        <Image  source={require('../car.PNG')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  news: {
    color: 'blue',
    fontSize: 20,
  },
});
