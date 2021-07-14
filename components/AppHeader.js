import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={{ justifyContent: 'center' }}>
        <Text
          style={{
            alignSelf: 'center',
            marginBottom: 20,
            marginTop: 50,
            borderWidth: 5,
            textAlign: 'center',
            width: 333,
            borderTopColor: 'lightgreen',
            borderBottomColor: 'green',
            borderRightColor: 'lightgreen',
            borderLeftColor: 'green',
            backgroundColor: 'turquoise',
          }}>
          News Letter App
        </Text>
      </View>
    );
  }
}
