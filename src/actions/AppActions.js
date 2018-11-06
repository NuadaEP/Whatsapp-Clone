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
    DIGITA_MENSAGEM,
    ENVIA_MENSAGEM,
    LISTA_CONVERSA_USUARIO
} from './types';

import b64 from 'base-64';
import { base64 } from '@firebase/util';

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

export const enviaMensagem = (mensagem, nome, email) => {

    //current user datas
    const { currentUser } = firebase.auth();

    //contact datas
    const userEmail = currentUser.email;

    return dispatch => {

        //convert both emails to base 64
        const userEmailB64 = b64.encode(userEmail);

        const contactEmailB64 = b64.encode(email);

        firebase
            .database()
            .ref(`/mensagens/${userEmailB64}/${contactEmailB64}`) //this is like "where"
            .push({ mensagem: mensagem, tipo: 'e' })
            .then( () => {
                firebase
                    .database()
                    .ref(`/mensagens/${contactEmailB64}/${userEmailB64}`)
                    .push({ mensagem: mensagem, tipo: 'r' })
                    .then(() => dispatch ({ type: ENVIA_MENSAGEM }))
                    .then(() => {
                        firebase
                            .database()
                            .ref(`/usuario_conversas/${userEmailB64}/${contactEmailB64}`)
                            .set({ nome: nome, email: email, mensagem: mensagem })
                            .then(() => {
                                firebase
                                    .database()
                                    .ref(`/contatos/${userEmailB64}`)
                                    .once('value')
                                    .then(snapshot => {
        
                                        //this instruction will return a object, and how can I know what the unique key of document at firebase?
                                        //I can't. Then I use the lowdash to convert this object into array and from this I can access this path with 0 index
                                        const dadosUsuario = _.first(_.values(snapshot.val()));
                
                                        firebase
                                            .database()
                                            .ref(`/usuario_conversas/${contactEmailB64}/${userEmailB64}`)
                                            .set({ nome: dadosUsuario.nome, email:userEmail, mensagem: mensagem })
                                    })
                            })
                    })
            })
    }
}

export const conversaUsuarioFetch = contatoEmail => {
    
    const { currentUser } = firebase.auth();

    let usuarioEmailB64 = b64.encode(currentUser.email);
    let contatoEmailB64 = b64.encode(contatoEmail); 
    
    return dispatch => {
        firebase
            .database()
            .ref(`/mensagens/${usuarioEmailB64}/${contatoEmailB64}`)
            .on("value", snapshot => {
                dispatch({ type: LISTA_CONVERSA_USUARIO, payload: snapshot.val() })
            });
    }
}