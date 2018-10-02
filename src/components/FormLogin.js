import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { modificaEmail, modificaSenha } from '../actions/AutenticacaoActions';

import { connect } from 'react-redux';

class FormLogin extends Component{
	static navigationOptions = { title: 'Login' };

	render() {
		return(	
			<Image style={ styles.imageBackground } source={ require('../images/bg.png') } >
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
					</View>

					<View style={ styles.buttonView }>
						<Button 
							title = "Acessar"
							onPress = { () => false }
							color = "#115e54"
						/>
					</View>
				</View>
			</Image>	
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
	},
	textLink: {
		color: '#fff',
	},
	buttonView: {
		flex: 2
	}
});

const mapStateToProps = state => (
	{
		email: state.AutenticacaoReducer.email,	
		senha: state.AutenticacaoReducer.senha,
	}
);

export default connect(mapStateToProps, { modificaEmail, modificaSenha })(FormLogin);