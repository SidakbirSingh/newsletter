import * as React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
export default class TopNewsScreen extends React.Component {
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
              marginTop: 30,
              alignSelf: 'center',
            }}
            source={require('../News/News1.png')}
          />
          <Image
            style={{
              width: 300,
              height: 300,
              marginBottom: 20,
              alignSelf: 'center',
            }}
            source={require('../News/News2.png')}
          />
          <Image
            style={{
              width: 300,
              height: 300,
              marginBottom: 20,
              alignSelf: 'center',
            }}
            source={require('../News/News3.png')}
          />
          <Image
            style={{
              width: 300,
              height: 300,
              marginBottom: 20,
              alignSelf: 'center',
            }}
            source={require('../News/News4.png')}
          />
          <Image
            style={{
              width: 300,
              height: 300,
              marginBottom: 20,
              alignSelf: 'center',
            }}
            source={require('../News/News5.png')}
          />
        </ScrollView>
      </View>
    );
  }
}
