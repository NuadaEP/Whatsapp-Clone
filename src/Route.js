import { createStackNavigator } from 'react-navigation';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';

const RootStack = createStackNavigator(
	{
	  Login: FormLogin,
	  Cadastro: FormCadastro,
		BoasVindas: BoasVindas,
		Principal: Principal
	},
	{
		initialRouteName: 'Login'
	}
);

export default RootStack;