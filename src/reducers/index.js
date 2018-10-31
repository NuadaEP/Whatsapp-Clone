import { combineReducers } from 'redux';
import AutenticacaoReducer from './AutenticacaoReducer';
import AppReducer from './AppReducer';
import ListaContatosReducer from './ListaContatosReducer';

console.disableYellowBox = true;
export default combineReducers({
	AutenticacaoReducer: AutenticacaoReducer,
	AppReducer: AppReducer,
	ListaContatosReducer: ListaContatosReducer,
});