import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';

export default class HomeScreen extends React.Component {
constructor() {
    super();
    this.state = {
      like: 0,
      dislike: 0,
    };
  }
  likecount=()=>{
  this.setState({like:this.state.like+1});
}
dislikecount=()=>{
  this.setState({dislike:this.state.dislike+1});
}
   
  dislikePressed(){
  var dislike= db.ref('Rating/' + '/')
  dislike.update({
    'dislikePressed': 1
  })
}

likePressed(){
  var like= db.ref('Rating/' + '/')
  like.update({
    'likePressed':1
  })
}

  render() {
    return (
      <View style={styles.buttonsContainer}>
        <AppHeader />

        <TouchableOpacity
         style={styles.button}
         onPress= {()=>this.props.navigation.navigate('BuzzerScreen')} >
        <Text style={styles.buttonText}>Read a joke </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          onPress= {()=>this.props.navigation.navigate('Horoscope')} >
          <Text style={styles.buttonText}>Horoscope </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
         onPress= {()=>this.props.navigation.navigate('WeatherScreen')} >
          <Text style={styles.buttonText}> Weather </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          onPress= {()=>this.props.navigation.navigate('NewScreen')} >
          <Text style={styles.buttonText}> Top News </Text> 
        </TouchableOpacity>
          <Text>Rate Our News Letter</Text>
            <Text style={styles.like}>{this.state.like}</Text>
          <Text style={styles.dislike}>{this.state.dislike}</Text>
        <TouchableOpacity onPress ={this.likecount}>
          <Image style = {styles.image2} source={require('../assets/thumbsup.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.dislikecount}>
          <Image style = {styles.image1} source={require('../assets/thumbsdown.png')}/>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: 50,
    borderWidth: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
  },
  image1: {
    width: 50,
    height: 50,
    marginTop: -35,
    marginLeft: 160
  },
  image2: {
    width: 50,
    height: 50,
    marginTop: 35,
    marginLeft: 100
  },
  like: {
    width: 50,
    height: 50,
    marginBottom:-50,
    marginLeft: 110

  },
  dislike: {
    width: 50,
    height: 50,
    marginBottom: -60,
    marginLeft: 180

  },
  


});