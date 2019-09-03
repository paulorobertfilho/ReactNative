import React, { Component } from 'react';
import { View, Text, ScrollView, FetchResult, StyleSheet } from 'react-native';

export default class FetchComponent extends Component {

  state = {
    posts: []
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this._getPosts();
  }
  _getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ posts: responseJson })
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {
            this.state.posts.map((item) =>
              <Text style={styles.postText} key={item.id}>
                {item.body}
              </Text>)
          }
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  postText: {
    margin: 5,
    padding: 5,
  }
})
