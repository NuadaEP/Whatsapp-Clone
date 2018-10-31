import React, { Component } from 'react';

import { TouchableHighlight, View, Text } from 'react-native';

export default class ListViewData extends Component {
  render() {
      return (

        <View>
          <TouchableHighlight onPress={ () => this.props.navigation.navigate('Conversa', { name: this.props.name, email: this.props.email }) }>
            <View style={{ flex: 1, padding: 20, borderBottomColor: '#ccc', borderBottomWidth: 1 }}>
                <Text style={{ fontSize: 25 }}>{ this.props.name }</Text>
                <Text style={{ fontSize: 18 }}>{ this.props.email }</Text>
            </View>
        </TouchableHighlight>
        </View>
    )
  }
}
