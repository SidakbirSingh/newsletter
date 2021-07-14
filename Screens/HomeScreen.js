import * as React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AppHeader from '../components/AppHeader';
import LikeImage from '../components/Image';
export default class HomeScreen extends React.Component {
  goToJokeScreen = () => {
    this.props.navigation.navigate('JokeScreen');
  };
  goToHoroScopeScreen = () => {
    this.props.navigation.navigate('HoroscopeScreen');
  };
  goToWeatherScreen = () => {
    this.props.navigation.navigate('WeatherScreen');
  };
  goToTopNewsScreen = () => {
    this.props.navigation.navigate('TopNewsScreen');
  };
  render() {
    return (
      <ScrollView>
        <AppHeader />

        <TouchableOpacity
          onPress={() => this.goToJokeScreen()}
          style={hstyles.button1}>
          <Text style={hstyles.blackText}>Read a Joke</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.goToHoroScopeScreen()}
          style={hstyles.button2}>
          <Text style={hstyles.blackText}>Horoscope</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.goToWeatherScreen()}
          style={hstyles.button3}>
          <Text style={hstyles.blackText}>Weather</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.goToTopNewsScreen()}
          style={hstyles.button4}>
          <Text style={hstyles.whiteText}>Top News</Text>
        </TouchableOpacity>
        <LikeImage />
      </ScrollView>
    );
  }
}
const hstyles = StyleSheet.create({
  button1: {
    borderWidth: 1,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 10,
    width: 200,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  button2: {
    borderWidth: 1,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 10,
    width: 200,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen',
  },
  button3: {
    borderWidth: 1,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 10,
    width: 200,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  button4: {
    borderWidth: 1,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 10,
    width: 200,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
  },
  blackText: {
    color: 'black',
  },
  whiteText: {
    color: 'white',
  },
});
