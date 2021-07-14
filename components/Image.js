import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import db from '../config';

var dislike = 0;
var like = 0;
export default class LikeImage extends React.Component {
  constructor() {
    super();
    this.state = {
      like: 0,
      dislike: 0,
    };
  }

  dislikePressed = () => {
    var rating = db.ref('Rating/' + '/');
    dislike = dislike + 1;
    rating.update({
      dislikes: dislike,
    });
    this.setState({ dislike: this.state.dislike + 1 });
  };

  likePressed = () => {
    var rating = db.ref('Rating/' + '/');
    like = like + 1;
    rating.update({
      likes: like,
    });
    this.setState({ like: this.state.like + 1 });
  };

  render() {
    return (
      <View style={{alignSelf:"center"}}>
        <Text style={styles.text}>Rate us</Text>
        <Text style={{ marginLeft: 25, marginTop: 3, color: 'blue' }}>
          {this.state.like}
        </Text>
        <Text style={{ marginLeft: 75, marginTop: -17, color: 'blue' }}>
          {this.state.dislike}
        </Text>

        <TouchableOpacity onPress={this.likePressed}>
          <Image
            style={{ width: 30, height: 30,  marginLeft:15, marginTop: -3 }}
            source={require('../Thumbs/thumbsup.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={this.dislikePressed}>
          <Image
            style={{ width: 30, height: 30, marginLeft:65, marginTop: -28 }}
            source={require('../Thumbs/thumbsdown.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    marginTop: 30,
    alignSelf:"center",
    color: 'black',
    fontWeight: 'bold',
  },
});
