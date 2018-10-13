import firebase from '@firebase/app';
import '@firebase/auth';

import React, {Component} from 'react';
import { StackActions, NavigationActions, createStackNavigator } from 'react-navigation';

export const modificaEmail = (text) => {
	//his return is the action
	//this action goin to be catch to action property on our reducer (AutenticacaoReducer.js)
	return{
		type: 'modifica_email',
		payload: text
	};
} 

export const modificaSenha = (text) => {
	return{
		type: 'modifica_senha',
		payload: text
	};
} 

export const modificaNome = (text) => {
	return{
		type: 'modifica_nome',
		payload: text
	};
}

export const cadastraUsuario = ({ nome, email, senha }) => {
	//dispatch goin to return the action of success or error of redux to store
	//store is the only place of true of our aplication
	return dispatch => (
		firebase.auth().createUserWithEmailAndPassword(email, senha)
			.then(user => cadastroUsuarioRedirect.cadastraUsuarioSucesso())
			.catch(erro => cadastraUsuarioErro(erro, dispatch))
	)
}


export class cadastroUsuarioRedirect extends Component {
	constructor(props){
		super(props);
		const cadastraUsuarioSucesso = () => {
			StackActions.push({ routeName: 'BoasVindas' });
		}
		this.props.navigation.dispatch(this.cadastraUsuarioSucesso);

	}
}


const cadastraUsuarioErro = (erro, dispatch) => {
	dispatch({ type: 'cadastro_usuario_erro', payload: erro.message });
}