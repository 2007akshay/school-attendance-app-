import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class WeatherScreen extends React.Component {
  render() {
    return (
      <View>
        <h3>Weather</h3>
        <Text>
          The weather today is nice and sunny at a high of 80 degrees and a 
          low of 70 degrees
        </Text>
        <Image  source={require('../assets/Capture.PNG')}/>
      </View>
    );
  }
}