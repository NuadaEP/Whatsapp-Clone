const INITIAL_STATE = {
    email: 'T@t.com',
    add_contato_sucesso: false,
    add_contato_erro: '',
    loading: false,
    mensagem: 'oi',

};

export default ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case 'modifica_email':
            return { ...state, email: action.payload }

        case 'add_contato_sucesso':
            return { ...state, add_contato_sucesso: action.payload, add_contato_erro: '', loading: false, email: '' }

        case 'add_contato_erro':
            return { ...state, add_contato_erro: action.payload, loading: false }
            
        case 'loading':
            return { ...state, loading: true }

        case 'digita_mensagem':
            return { ...state, mensagem: action.payload }

        case 'envia_mensagem':
            return { ...state, mensagem: '' }

        default:
            return state;
    }
}