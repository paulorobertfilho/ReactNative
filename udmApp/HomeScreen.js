import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class Home extends React.Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
        <Button
          onPress={
            () => this.props.navigation.navigate('SegundaTela')
          }
          title='SegundaTela'
        >

        </Button>
      </View>
    )
  }
}
class SegundaTela extends React.Component {
  render() {
    return (
      <View>
        <Text>Segunda Tela</Text>
        <Button
          onPress={
            () => this.props.navigation.navigate('TerceiraTela')
          }
          title='TerceiraTela'
        >

        </Button>
      </View>
    )
  }
}
class TerceiraTela extends React.Component {
  render() {
    return (
      <Text>Terceira Tela</Text>
    )
  }
}
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <MyNavigator />
    )
  }
}
const MyNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  SegundaTela: {
    screen: SegundaTela,
  },
  TerceiraTela: {
    screen: TerceiraTela,
  }
}, {
    initialRouteName: 'Home'
  })
