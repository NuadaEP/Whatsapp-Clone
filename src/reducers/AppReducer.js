const INITIAL_STATE = {
    email: ''
};

export default ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case 'modifica_email':
            return { ...state, email: action.payload }

        case 'add_contato':
            return { ...state, email: action.payload }

        default:
            return state;
    }
}