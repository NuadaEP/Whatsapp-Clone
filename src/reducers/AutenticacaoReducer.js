import {
  MODIFICA_EMAIL,
  MODIFICA_SENHA,
  MODIFICA_NOME,
  CADASTRO_USUARIO_SUCESSO,
  CADASTRO_USUARIO_ERRO,
  LOGIN_USUARIO_SUCESSO,
  LOGIN_USUARIO_ERRO,
  AGUARDANDO,
} from "../actions/types";

const INITIAL_STATE = {
  nome: "",
  email: "",
  senha: "",
  erroCadastro: "",
  sucessoCadastro: "",
  loginErro: "",
  loading_login: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFICA_EMAIL:
      return { ...state, email: action.payload };

    case MODIFICA_SENHA:
      return { ...state, senha: action.payload };

    case MODIFICA_NOME:
      return { ...state, nome: action.payload };

    case CADASTRO_USUARIO_SUCESSO:
      return { ...state, nome: "", senha: "", loading_login: false };

    case CADASTRO_USUARIO_ERRO:
      return { ...state, erroCadastro: action.payload, loading_login: false };

    case LOGIN_USUARIO_SUCESSO:
      return { ...state, email: "", senha: "", loading_login: false };

    case LOGIN_USUARIO_ERRO:
      return { ...state, loginErro: action.payload, loading_login: false };

    case AGUARDANDO:
      return { ...state, loading_login: true };

    default:
      return state;
  }
};
