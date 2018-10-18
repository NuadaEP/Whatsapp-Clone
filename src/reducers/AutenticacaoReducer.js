//this reducer is responsible to controll the states of inputs of the forms
const INITIAL_STATE = {
	nome: '',
	email: '',
	senha: '',
	erroCadastro: '',
	sucessoCadastro: '',
	loginErro: ''
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

		case "modifica_email":
			return { ...state, email: action.payload }

		case "modifica_senha":
			return { ...state, senha: action.payload }
		
		case "modifica_nome":
			return { ...state, nome: action.payload }
		
		case "cadastro_usuario_sucesso":
			return { ...state, nome: '', senha: '' }

		case "cadastro_usuario_erro":
			return { ...state, erroCadastro: action.payload }

		case "login_usuario_erro":
			return{ ...state, loginErro: action.payload }
		
		default: 
			return state;
	}
}