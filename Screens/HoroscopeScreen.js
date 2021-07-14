import * as React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default class HoroscopeScreen extends React.Component {
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

          <Image
            style={{
              width: 300,
              height: 300,
              marginBottom: 20,
              alignSelf: 'center',
            }}
            source={require('../Horoscope/Horo.png')}
          />
        </ScrollView>
      </View>
    );
  }
}
