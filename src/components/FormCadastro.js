import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Button, ImageBackground } from 'react-native';
import { modificaEmail, modificaSenha, modificaNome, cadastraUsuario } from '../actions/AutenticacaoActions';

import { connect } from 'react-redux';

class FormCadastro extends Component{
	static navigationOptions = { title: 'Cadastro' };

	_cadastraUsuario() {

		const { nome, email, senha } = this.props;

		this.props.cadastraUsuario({ nome, email, senha });

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
							onChangeText={ text => this.props.modificaNome(text) } 
						/>

						<TextInput 
							value={ this.props.email } 
							placeholder="E-mail"
							placeholderTextColor="#fff"
							style={ styles.formInput } 
							onChangeText={ text => this.props.modificaEmail(text) } 
						/>

						<TextInput 
							secureTextEntry
							value={ this.props.senha } 
							placeholder="Senha"
							placeholderTextColor="#fff"
							style={ styles.formInput } 
							onChangeText={ text => this.props.modificaSenha(text) } 
						/>

					</View>

					<View style={ styles.buttonView }>
						<Button title="Cadastrar" onPress={ () => this._cadastraUsuario() } color = "#115e54" />
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
	},
	buttonView: {
		flex: 1
	},
});

const mapStateToProps  = state => ({
	nome: state.AutenticacaoReducer.nome,
	email: state.AutenticacaoReducer.email,
	senha: state.AutenticacaoReducer.senha,
});

export default connect(mapStateToProps, { 
	modificaEmail: modificaEmail, 
	modificaSenha: modificaSenha, 
	modificaNome: modificaNome ,
	cadastraUsuario: cadastraUsuario
}) (FormCadastro);
