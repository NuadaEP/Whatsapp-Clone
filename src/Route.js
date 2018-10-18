import { createStackNavigator } from 'react-navigation';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';

const RootStack = createStackNavigator(
	{
		Login: {
			screen: FormLogin,
			navigationOptions: () => ({
				headerTransparent: true
			})
		},

		Cadastro: {
			screen: FormCadastro,
			navigationOptions: () => ({
				headerTitle: 'Cadastre-se',
				headerStyle: {backgroundColor: '#115e54'},
				headerTintColor: 'white',
			})
		},
		
		BoasVindas: {
			screen: BoasVindas,
			navigationOptions: () => ({
				header: null
			})
		},

		Principal: {
			screen: Principal,
			navigationOptions: () => ({
				headerTransparent: true
			})
		}
	},
	{
		initialRouteName: 'Login'
	}
);

export default RootStack;