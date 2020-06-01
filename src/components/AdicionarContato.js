import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  ImageBackground,
  ActivityIndicator,
  Dimensions,
} from "react-native";

import {
  modificaEmail,
  addContato,
  habilitaInclusaoContato,
} from "../actions/AppActions";

import { connect } from "react-redux";

class AdicionarContato extends Component {
  componentWillMount() {
    this.props.habilitaInclusaoContato();
  }

  _renderBtn() {
    if (this.props.loading)
      return <ActivityIndicator size="large" color="115e54" />;

    return (
      <Button
        title="Adicionar"
        color="#115e54"
        onPress={() => this.props.addContato(this.props.email)}
      />
    );
  }

  renderAdicionarContato() {
    if (!this.props.add_contato_sucesso) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <TextInput
            placeholder="E-mail"
            value={this.props.email}
            placeholderTextColor="#115e54"
            selectionColor="#115e54"
            style={{
              width: Dimensions.get("screen").width - 50,
              borderBottomColor: "#115e54",
              borderBottomWidth: 0.8,
              color: "#115e54",
              marginBottom: 20,
            }}
            onChangeText={(text) => this.props.modificaEmail(text)}
          />

          <View style={{ width: Dimensions.get("screen").width - 50 }}>
            {this._renderBtn()}

            <Text style={{ color: "red" }}>{this.props.add_contato_erro}</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <View>
            <Text
              style={{
                color: "green",
                fontSize: 20,
                marginBottom: 50,
                textAlign: "center",
              }}
            >
              Usuário adicionado com sucesso
            </Text>
          </View>

          <View>
            <Button
              title="Adicionar"
              color="#115e54"
              onPress={() => this.props.habilitaInclusaoContato()}
            />
          </View>
        </View>
      );
    }
  }

  render() {
    return (
      <ImageBackground
        style={{ flex: 1, width: null }}
        source={require("../images/bg-in.png")}
      >
        <StatusBar backgroundColor="#114d44" />
        {this.renderAdicionarContato()}
      </ImageBackground>
    );
  }
}

const MapStateToProps = (state) => ({
  email: state.AppReducer.email,
  add_contato_sucesso: state.AppReducer.add_contato_sucesso,
  add_contato_erro: state.AppReducer.add_contato_erro,
  loading: state.AppReducer.loading,
});

export default connect(MapStateToProps, {
  modificaEmail,
  addContato,
  habilitaInclusaoContato,
})(AdicionarContato);
