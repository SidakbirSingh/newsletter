import * as React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
export default class WeatherScreen extends React.Component {
  weather() {
    Linking.openURL(
      'https://www.bing.com/search?q=weather%20today&pc=cosp&ptag=G6C15N110AC0C1DDA955&form=CONBNT&conlogo=CT3210127'
    );
  }
  render() {
    return (
      <View>
        <ScrollView>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('HomeScreen')}
            style={{ width: 30, height: 30 }}>
            <Image
              style={{ width: 33, height: 33, marginTop: 30 }}
              source={require('../assets/back.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.weather}
            style={{
              marginTop: 50,
              width: 200,
              height: 50,
              justifyContent: 'center',
              alignSelf: 'center',
              borderWidth: 1,
              borderRadius: 20,
              backgroundColor: 'orange',
            }}>
            <Text style={{ textAlign: 'center' }}>
              CLICK TO SEE THE WEATHER
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
