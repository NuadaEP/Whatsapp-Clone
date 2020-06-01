import { combineReducers } from "redux";
import AutenticacaoReducer from "./AutenticacaoReducer";
import AppReducer from "./AppReducer";
import ListaContatosReducer from "./ListaContatosReducer";
import ListaConversaReducer from "./ListaConversaReducer";
import ListaConversasReducer from "./ListaConversasReducer";

console.disableYellowBox = true;

export default combineReducers({
  AutenticacaoReducer,
  AppReducer,
  ListaContatosReducer,
  ListaConversaReducer,
  ListaConversasReducer,
});
