import * as React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
export default class JokeScreen extends React.Component {
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
              marginTop: 70,
              marginBottom: 20,
              alignSelf: 'center',
            }}
            source={require('../jokes/1.png')}
          />
          <Image
            style={{
              width: 300,
              height: 300,
              marginBottom: 20,
              alignSelf: 'center',
            }}
            source={require('../jokes/2.png')}
          />
          <Image
            style={{
              width: 300,
              height: 300,
              marginBottom: 20,
              alignSelf: 'center',
            }}
            source={require('../jokes/3.png')}
          />
          <Image
            style={{
              width: 300,
              height: 300,
              marginBottom: 20,
              alignSelf: 'center',
            }}
            source={require('../jokes/4.png')}
          />
          <Image
            style={{
              width: 300,
              height: 300,
              marginBottom: 20,
              alignSelf: 'center',
            }}
            source={require('../jokes/5.png')}
          />
          <Image
            style={{
              width: 300,
              height: 300,
              marginBottom: 20,
              alignSelf: 'center',
            }}
            source={require('../jokes/6.png')}
          />
          <Image
            style={{
              width: 300,
              height: 300,
              marginBottom: 20,
              alignSelf: 'center',
            }}
            source={require('../jokes/7.png')}
          />
        </ScrollView>
      </View>
    );
  }
}
