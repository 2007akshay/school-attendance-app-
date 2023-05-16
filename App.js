import * as React from 'react';
import { View, Text, Button } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import BuzzerScreen from './screens/BuzzerScreen';
import Horoscope from './screens/Horoscope';
import WeatherScreen from './screens/WeatherScreen';
import NewScreen from './screens/NewScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {


  
  render() {
    return (
      <View>
        
        <AppContainer />
   
   
      </View>
    );
  }
}

let AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  BuzzerScreen: BuzzerScreen,
  Horoscope: Horoscope,
  WeatherScreen: WeatherScreen,
  NewScreen: NewScreen,
  
});
const AppContainer = createAppContainer(AppNavigator);