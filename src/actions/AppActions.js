import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

import { MODIFICA_EMAIL, ADD_CONTATO, ADD_CONTATO_SUCESSO, ADD_CONTATO_ERRO } from './types';

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

        firebase
        .database()
        .ref(`/contatos/${encodeEmail}`)
        .once('value')
        .then(snapshot => { 
            if(snapshot.val()){
                //path: contatos_usuario/email_do_usuario/email_do_contato/nome_do_contato
                
                const { currentUser } = firebase.auth();

                let emailCurrentUserB64 = b64.encode(currentUser.email);

                firebase
                    .database()
                    .ref(`/contatos_usuario/${ emailCurrentUserB64 }`)
                    .push({ email: email, nome: 'NOME DO CONTATO' })
                    .then(
                        dispatch({
                            type: ADD_CONTATO_SUCESSO,
                            payload: 'Contato adicionado com sucesso'
                        })
                    )
            } else {
                dispatch({
                    type: ADD_CONTATO_ERRO,
                    payload: 'O usuário não existe'
                })
            }
        })
        
    }
}