import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Button, ImageBackground, Text, ActivityIndicator } from 'react-native';

import { modificaEmail, modificaSenha, modificaNome, cadastraUsuario } from '../actions/AutenticacaoActions';

import { connect } from 'react-redux';

class FormCadastro extends Component{

	_cadastraUsuario() {

		const { nome, email, senha, navigation } = this.props;

		this.props.cadastraUsuario({ nome, email, senha, navigation });
	}

	renderBtnAcessar(){
		if(this.props.loading_login){
			return( <ActivityIndicator size="large" color="white" /> )
		}
		return( <Button title="Cadastrar" onPress={ () => this._cadastraUsuario() } color = "#115e54" /> )
	}

	render() {
		return(
			<ImageBackground style={ styles.imageBackground } source={ require('../images/bg.png') } >
				<View style={ styles.mainView }>
					<View style={ styles.formView }>
						<TextInput 
							value={ this.props.nome } 
							placeholder="Nome"
							placeholderTextColor="#fff"
							style={ styles.formInput } 
							returnKeyType={ "next" }
							onSubmitEditing={ () => this.second.focus() }
							onChangeText={ text => this.props.modificaNome(text) } 
						/>

						<TextInput 
							value={ this.props.email } 
							placeholder="E-mail"
							placeholderTextColor="#fff"
							style={ styles.formInput } 
							returnKeyType={ "next" }
							onSubmitEditing={ () => this.third.focus() }
							ref={ input => this.second = input }
							onChangeText={ text => this.props.modificaEmail(text) } 
						/>

						<TextInput 
							secureTextEntry
							value={ this.props.senha } 
							placeholder="Senha"
							placeholderTextColor="#fff"
							style={ styles.formInput } 
							ref={ input => this.third = input }
							onChangeText={ text => this.props.modificaSenha(text) } 
						/>

						<Text style={ styles.erro }>{this.props.erroCadastro}</Text>
					</View>

					<View style={ styles.buttonView }>
						{ this.renderBtnAcessar() }
					</View>
				</View>
			</ImageBackground>
			);
	}
}


const styles = StyleSheet.create({
	imageBackground: {
		flex: 1,
		width: null
	},
	mainView: {
		flex: 1,
		padding: 10,
	},
	formView: {
		flex: 4,
		justifyContent: 'center'
	},
	formInput: {
		height: 45,
		fontSize: 20,
		borderBottomColor: '#fff',
		borderBottomWidth: 0.9,
		color: '#fff'
	},
	buttonView: {
		flex: 1
	},
	erro: {
		color: 'red'
	},
});

const mapStateToProps  = state => ({
	nome: state.AutenticacaoReducer.nome,
	email: state.AutenticacaoReducer.email,
	senha: state.AutenticacaoReducer.senha,
	erroCadastro: state.AutenticacaoReducer.erroCadastro,
	sucessoCadastro: state.AutenticacaoReducer.sucessoCadastro,
	loading_login: state.AutenticacaoReducer.loading_login
});

export default connect(mapStateToProps, { 
	modificaEmail, 
	modificaSenha, 
	modificaNome ,
	cadastraUsuario
}) (FormCadastro);
