import { MODIFICA_EMAIL, ADD_CONTATO } from './types';

export const modificaEmail = text => {
   return{
        type: MODIFICA_EMAIL,
        payload: text
   } 
}

export const addContato = email => {
    return{
        type: ADD_CONTATO,
        payload: 'deu'
    }
}