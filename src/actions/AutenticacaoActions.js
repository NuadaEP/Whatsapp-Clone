import firebase from 'firebase';

export const modificaEmail = (text) => {
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