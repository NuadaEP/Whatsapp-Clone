import { MODIFICA_EMAIL } from './types';

export const modificaEmail = text => {
   return{
        type: MODIFICA_EMAIL,
        payload: text
   } 
}