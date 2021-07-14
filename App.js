import * as React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AppHeader from './components/AppHeader';
import LikeImage from './components/Image';
import HomeScreen from './Screens/HomeScreen';
import JokeScreen from './Screens/JokeScreen';
import HoroscopeScreen from './Screens/HoroscopeScreen';
import WeatherScreen from './Screens/WeatherScreen';
import TopNewsScreen from './Screens/TopNewsScreen';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <AppContainer />
      </ScrollView>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  JokeScreen: JokeScreen,
  HoroscopeScreen: HoroscopeScreen,
  WeatherScreen: WeatherScreen,
  TopNewsScreen: TopNewsScreen,
});
const AppContainer = createAppContainer(AppNavigator);
