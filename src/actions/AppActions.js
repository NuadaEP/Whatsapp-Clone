import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import _ from 'lodash';

import { 
    MODIFICA_EMAIL, 
    ADD_CONTATO_SUCESSO, 
    ADD_CONTATO_ERRO, 
    LOADING,
    LISTA_CONTATO_USUARIO,
    DIGITA_MENSAGEM
} from './types';

import b64 from 'base-64';

export const modificaEmail = text => {
   return{
        type: MODIFICA_EMAIL,
        payload: text
   } 
}

export const addContato = email => {

    if(email == "") {
        return{
            type: ADD_CONTATO_ERRO,
            payload: 'E-mail não pode ser vazio'
        }
    }

    let encodeEmail = b64.encode(email);

    return dispatch => {

        dispatch({ type: LOADING })

        firebase
        .database()
        .ref(`/contatos/${encodeEmail}`)
        .once('value')
        .then(snapshot => { 
            if(snapshot.val()){

                const dadosUsuario = _.first(_.values(snapshot.val()))

                //path: contatos_usuario/email_do_usuario/email_do_contato/nome_do_contato
                
                const { currentUser } = firebase.auth();

                let emailCurrentUserB64 = b64.encode(currentUser.email);

                firebase
                    .database()
                    .ref(`/contatos_usuario/${ emailCurrentUserB64 }`)
                    .push({ email: email, nome: dadosUsuario.nome })
                    .then(() => adicionaContatoSucesso(dispatch))
                    .catch(error => adicionaContatoErro(error, dispatch))
            } else {
                dispatch({
                    type: ADD_CONTATO_ERRO,
                    payload: 'O email não corresponde a um previamente cadastrado'
                })
            }
        })
        
    }
}

const adicionaContatoSucesso = (dispatch) => {
    dispatch({
        type: ADD_CONTATO_SUCESSO,
        payload: true
    })
}

const adicionaContatoErro = (error, dispatch) => {
    dispatch({
        type: ADD_CONTATO_ERRO,
        payload: error
    })
}

export const habilitaInclusaoContato = () => {
    return{
        type: ADD_CONTATO_SUCESSO,
        payload: false
    }
}

export const contatosUsuarioFetch = () => {

    const { currentUser } = firebase.auth();

    return dispatch => {
        let emailUsuarioB64 = b64.encode( currentUser.email );

        firebase
            .database()
            .ref(`/contatos_usuario/${emailUsuarioB64}`)
            .on("value", snapshot => {
                dispatch({ type: LISTA_CONTATO_USUARIO, payload: snapshot.val() })
            })
    }
    
}

export const digitaMensagem = text => {
    return {
        type: DIGITA_MENSAGEM,
        payload: text 
    }
}