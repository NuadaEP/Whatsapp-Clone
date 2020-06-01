import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
  ActivityIndicator,
  StatusBar,
  Dimensions,
} from "react-native";
import {
  modificaEmail,
  modificaSenha,
  autenticarUsuario,
} from "../actions/AutenticacaoActions";

import { connect } from "react-redux";

class FormLogin extends Component {
  _autenticarUsuario() {
    const { email, senha, navigation } = this.props;

    this.props.autenticarUsuario({ email, senha, navigation });
  }

  renderBtnAcessar() {
    if (this.props.loading_login) {
      return <ActivityIndicator size="large" color="white" />;
    }
    return (
      <Button
        title="Acessar"
        onPress={() => this._autenticarUsuario()}
        color="#115e54"
      />
    );
  }

  render() {
    return (
      <ImageBackground
        style={styles.imageBackground}
        source={require("../images/bg.png")}
      >
        <StatusBar backgroundColor="#114d44" />

        <View style={styles.mainView}>
          <View style={styles.headerView}>
            <Text style={styles.headerText}>WhatsApp Clone</Text>
          </View>

          <View style={styles.formView}>
            <TextInput
              value={this.props.email}
              placeholder="E-mail"
              placeholderTextColor="#fff"
              selectionColor="#fff"
              style={styles.formInput}
              returnKeyType={"next"}
              onSubmitEditing={() => this.second.focus()}
              onChangeText={(text) => this.props.modificaEmail(text)}
            />

            <TextInput
              secureTextEntry
              value={this.props.senha}
              placeholder="Senha"
              placeholderTextColor="#fff"
              selectionColor="#fff"
              style={styles.formInput}
              ref={(input) => (this.second = input)}
              onChangeText={(text) => this.props.modificaSenha(text)}
            />

            <TouchableHighlight
              onPress={() => this.props.navigation.navigate("Cadastro")}
            >
              <Text style={styles.textLink}>
                Ainda não tem cadastro? Cadastre-se!
              </Text>
            </TouchableHighlight>

            <Text style={{ color: "red" }}>{this.props.loginErro}</Text>
          </View>

          <View style={styles.buttonView}>{this.renderBtnAcessar()}</View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerView: {},
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
  formView: {
    marginBottom: 20,
  },
  formInput: {
    width: Dimensions.get("screen").width - 50,
    borderBottomColor: "#fff",
    borderBottomWidth: 0.8,
    color: "#fff",
  },
  textLink: {
    color: "#fff",
  },
  buttonView: {
    width: Dimensions.get("screen").width - 50,
  },
});

const mapStateToProps = (state) => ({
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha,
  loginErro: state.AutenticacaoReducer.loginErro,
  loading_login: state.AutenticacaoReducer.loading_login,
});

export default connect(mapStateToProps, {
  modificaEmail,
  modificaSenha,
  autenticarUsuario,
})(FormLogin);
