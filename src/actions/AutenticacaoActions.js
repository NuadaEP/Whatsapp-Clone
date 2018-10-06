import firebase from '@firebase/app';
import '@firebase/auth';

import { createStackNavigator } from 'react-navigation';

//action creators are functions that return actions
//this actions are interpretate to Provider (at App.js), and with this action his decide what he must do

//each function is exported here and imported by the component that need it (FormLogin and FormCadastro)

//this is a action creator
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
			.then(user => cadastraUsuarioSucesso(dispatch))
			.catch(erro => cadastraUsuarioErro(erro, dispatch))
	)
}

const cadastraUsuarioSucesso = (dispatch) => {
	dispatch({ type: 'cadastro_usuario_sucesso' });

	createStackNavigator.props.navigation.navigate('BoasVindas');
}

export const cadastraUsuarioErro = (erro, dispatch) => {
	dispatch({ type: 'cadastro_usuario_erro', payload: erro.message });
}