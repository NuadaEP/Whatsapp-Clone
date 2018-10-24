const INITIAL_STATE = {
    email: 'T@t.com',
    add_contato_sucesso: '',
    add_contato_erro: '',

};

export default ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case 'modifica_email':
            return { ...state, email: action.payload }

        case 'add_contato_sucesso':
            return { ...state, add_contato_sucesso: action.payload, add_contato_erro: '' }

        case 'add_contato_erro':
            return { ...state, add_contato_erro: action.payload, add_contato_sucesso: '' }

        default:
            return state;
    }
}