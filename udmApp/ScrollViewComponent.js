import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default class ScrollViewComponent extends Component {

  constructor(props) {
    super(props)
    this.items = [500]
    for (let index = 0; index < 500; index++) {
      this.items[index] = `Num: ${index}`

    }
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {
            this.items.map((item) => <Text key={item}>{item}</Text>)
          }
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
