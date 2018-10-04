import firebase from '@firebase/auth';

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

	firebase.auth().createUserWithEmailAndPassword(email, senha)
		.then(user => cadastraUsuarioSucesso())
		.catch(erro => cadastraUsuarioErro(erro));
}

const cadastraUsuarioSucesso = () => {
	return{
		type: 'sucesso'
	};
}

const cadastraUsuarioErro = (erro) => {
	return{
		type: 'erro'
	};
}