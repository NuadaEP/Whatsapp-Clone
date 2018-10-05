//this reducer is responsible to controll the states of inputs of the forms
const INITIAL_STATE = {
	nome: '',
	email: '',
	senha: '',
	erroCadastro: '',
	sucessoCadastro: ''
}

//this reducer is exported and imported by index file, on this directory
export default (state = INITIAL_STATE, action) => {
	//this action is sent to AutenticacaoActions.js
	//here the reducer decide what to do with this information
	if (action.type == "modifica_email") {
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
		return { ...state, email: action.payload }
	}

	if (action.type == "modifica_senha") {
		return { ...state, senha: action.payload }
	}

	if (action.type == "modifica_nome") {
		return { ...state, nome: action.payload }
	}
	
	if (action.type == "cadastro_usuario_sucesso") {
		return { ...state, sucessoCadastro: action.payload }
	}

	if (action.type == "cadastro_usuario_erro") {
		return { ...state, erroCadastro: action.payload }
	}
	return state;
}