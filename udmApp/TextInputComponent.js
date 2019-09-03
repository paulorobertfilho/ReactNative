import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

export default class TextInputComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      texto: '',
    }
  }
  render() {
    return (
      <View style={{ paddingTop: 25 }}>
        <Text>
          Digite o Texto a ser Traduzido:
        </Text>
        <TextInput
          style={{ height: 50 }}
          placeholder="Digite aqui"
          onChangeText={(texto) => this.setState({ texto })}
        />
        <Text style={{ padding: 18, fontSize: 40 }}>
          {this.state.texto.split(' ').map((word) => word && `${word}`).join(` `)}
        </Text>
      </View>
    )
  }
}
