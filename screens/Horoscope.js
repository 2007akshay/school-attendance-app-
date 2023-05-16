import * as React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class Horoscope extends React.Component {
  render() {
    return (
      <View>
        <Text style ={styles.header}>
         Your Horoscope
        </Text>
        <ol>
        <li>Aries</li>
        <li> Taurus</li>
        <li> Gemini</li>
        <li> Cancer</li>
        <li>Leo</li> 
        <li>Virgo</li>
        <li> Libra </li>
        <li> Scorpio </li>
         <li>Sagittarius</li> 
         <li>Capricorn</li>
         <li> Aquarius </li>
         <li> Pisces</li>
        </ol>
         <Image  source={require('../assets/hgvgj.PNG')}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    color: 'pink',
  fontFamily: 'monospace',
  },
});

