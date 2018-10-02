import { createStackNavigator } from 'react-navigation';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';

const RootStack = createStackNavigator(
	{
	  Login: FormLogin,
	  Cadastro: FormCadastro
	},
	{
		initialRouteName: 'Login'
	}
);

export default RootStack;