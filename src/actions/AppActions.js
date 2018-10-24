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
                dispatch({
                    type: ADD_CONTATO_SUCESSO,
                    payload: 'Contato adicionado com sucesso'
                })
            } else {
                dispatch({
                    type: ADD_CONTATO_ERRO,
                    payload: 'O usuário não existe'
                })
            }
        })
        
    }
}