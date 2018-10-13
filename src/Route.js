import { createStackNavigator } from 'react-navigation';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';

const RootStack = createStackNavigator(
	{
	  Login: FormLogin,
	  Cadastro: FormCadastro,
	  BoasVindas: BoasVindas
	},
	{
		initialRouteName: 'Login'
	}
);

export default RootStack;