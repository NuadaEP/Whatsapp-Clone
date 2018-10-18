import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight, ImageBackground } from 'react-native';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';

//this component is used at the end of the file
//his function is to connect react-native at redux, to allows that us use it's variables on any place that you need
import { connect } from 'react-redux';

class FormLogin extends Component{
	
	_autenticarUsuario() {
		const { email, senha, navigation } = this.props;
		
		this.props.autenticarUsuario({ email, senha, navigation });
	}

	render() {
		return(	
			<ImageBackground style={ styles.imageBackground } source={ require('../images/bg.png') } >
				<View style={ styles.mainView }>
					<View style={ styles.headerView }>
						<Text style={ styles.headerText }>WhatsApp Clone</Text>
					</View>

					<View style={ styles.formView }>
						<TextInput 
							value={this.props.email} 
							placeholder="E-mail"
							placeholderTextColor="#fff"
							style={ styles.formInput } 
							onChangeText={ text => this.props.modificaEmail(text) } 
						/>

						<TextInput 
							secureTextEntry
							value={this.props.senha} 
							placeholder="Senha" 
							placeholderTextColor="#fff"
							style={ styles.formInput } 
							onChangeText={ text => this.props.modificaSenha(text) } 
						/>
						
						<TouchableHighlight onPress={ () => this.props.navigation.navigate('Cadastro') }>
							<Text style={ styles.textLink }>Ainda não tem cadastro? Cadastre-se!</Text>
						</TouchableHighlight>

						<Text style={{color: 'red'}}>{this.props.loginErro}</Text>

					</View>

					<View style={ styles.buttonView }>
						<Button 
							title = "Acessar"
							onPress = { () => this._autenticarUsuario() }
							color = "#115e54"
						/>
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
	headerView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerText: { 
		fontSize: 25,
		color: '#fff',
	},
	formView: {
		flex: 2
	},
	formInput: {
		fontSize: 20,
		height: 45,
		borderBottomColor: '#fff',
		borderBottomWidth: 0.9
	},
	textLink: {
		color: '#fff',
	},
	buttonView: {
		flex: 2
	}
});

//this function can bring the states variables (states) of redux as properties (props) to component 
const mapStateToProps = state => (
	{
		email: state.AutenticacaoReducer.email,	
		senha: state.AutenticacaoReducer.senha,
		loginErro: state.AutenticacaoReducer.loginErro
	}
);

//to pass this states to props on our component, we should to connect this two resources
//the first parentheses passes which props, of this component, that goin to receive those states of redux
//the second one informs the model which component it refers
//after to connect, we can recover this states as props at our class, like on the inputText component 

//into first parentheses we have the actions that allows us to modificate our fields, this goin to pass as props to our class
//remembering that if the name of key (at json parameters (modificaEmail for example)) is the same name of value, you just can omit it 
export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(FormLogin);