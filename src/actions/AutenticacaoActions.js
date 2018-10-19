import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

import b64 from 'base-64';

import {
	MODIFICA_EMAIL, 
	MODIFICA_SENHA, 
	MODIFICA_NOME, 
	CADASTRO_USUARIO_SUCESSO, 
	CADASTRO_USUARIO_ERRO, 
	LOGIN_USUARIO_SUCESSO, 
	LOGIN_USUARIO_ERRO
} from './types';


export const modificaEmail = (text) => {
	//his return is the action
	//this action goin to be catch to action property on our reducer (AutenticacaoReducer.js)

	return{
		type: MODIFICA_EMAIL,
		payload: text
	};
} 

export const modificaSenha = (text) => {
	return{
		type: MODIFICA_SENHA,
		payload: text
	};
} 

export const modificaNome = (text) => {
	return{
		type: MODIFICA_NOME,
		payload: text
	};
}

export const cadastraUsuario = ({ nome, email, senha, navigation }) => {
	//dispatch goin to return the action of success or error of redux to store
	//store is the only place of true of our aplication

	return dispatch => (
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, senha)
			.then(user => {
				
				let emailb64 = b64.encode(email);
				
				firebase
					.database()
					.ref(`/contatos/${emailb64}`)
					.push({ nome:nome })
					.then(value => cadastraUsuarioSucesso(dispatch, navigation))
			})
			.catch(erro => cadastraUsuarioErro(erro, dispatch))
	)
}

const cadastraUsuarioSucesso = (dispatch, navigation) => {

	dispatch({ type: CADASTRO_USUARIO_SUCESSO });
	
	navigation.navigate('BoasVindas');
}

const cadastraUsuarioErro = (erro, dispatch) => {
	dispatch({ type: CADASTRO_USUARIO_ERRO, payload: erro.message });
}


export const autenticarUsuario = ({ email, senha, navigation }) => {

	return dispatch => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, senha)
			.then(sucesso => loginUsuarioSucesso(dispatch, navigation))
			.catch(erro => loginUsuarioErro(erro, dispatch));
	}
}

const loginUsuarioSucesso = (dispatch, navigation) => {
	dispatch({ type: LOGIN_USUARIO_SUCESSO });

	navigation.navigate('Principal');
}

const loginUsuarioErro = (erro, dispatch) => {
	dispatch({
		type: LOGIN_USUARIO_ERRO,
		payload: erro.message
	})
}