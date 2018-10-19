import {
	MODIFICA_EMAIL, 
	MODIFICA_SENHA, 
	MODIFICA_NOME, 
	CADASTRO_USUARIO_SUCESSO, 
	CADASTRO_USUARIO_ERRO, 
	LOGIN_USUARIO_SUCESSO, 
	LOGIN_USUARIO_ERRO,
	AGUARDANDO
} from '../actions/types';

//this reducer is responsible to controll the states of inputs of the forms
const INITIAL_STATE = {
	nome: '',
	email: '',
	senha: '',
	erroCadastro: '',
	sucessoCadastro: '',
	loginErro: '',
	loading_login: false
}

//this reducer is exported and imported by index file, on this directory
export default (state = INITIAL_STATE, action) => {
	//this action is sent to AutenticacaoActions.js
	//here the reducer decide what to do with this information
	switch(action.type){
		// "...state" this is a spread of JS
			//this represents the previous state, to evolve the state and not just replace
			/*
				example:
				const state = {name: 'bruno', sex: 'like'}
				const newState = {...state, name: 'carlos'}
				This is something like:
				const newState = {name: 'bruno', sex: 'like', name: 'carlos'}
				Because we have two "name" indexes the last one overwrite the first one
			*/ 

		case MODIFICA_EMAIL:
			return { ...state, email: action.payload }

		case MODIFICA_SENHA:
			return { ...state, senha: action.payload }
		
		case MODIFICA_NOME:
			return { ...state, nome: action.payload }
		
		case CADASTRO_USUARIO_SUCESSO:
			return { ...state, nome: '', senha: '', loading_login: false }

		case CADASTRO_USUARIO_ERRO:
			return { ...state, erroCadastro: action.payload, loading_login: false }

		case LOGIN_USUARIO_ERRO:
			return { ...state, loginErro: action.payload, loading_login: false }

		case AGUARDANDO:
			return { ...state, loading_login: true }

		default: 
			return state;
	}
}