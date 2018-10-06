import React, { Component } from 'react';
import { View, Text, Button, Image, ImageBackground } from 'react-native';

export default class BoasVindas extends Component{	
	render() {
		return (
			<ImageBackground style={{ flex: 1, width: null }} source={ require('../images/bg.png') } >

				<View style={{ flex: 1, padding: 15 }}>

					<View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
						<Text style={{ color: 'white', fontStyle: 'bold', fontSize: 35, marginBottom: 5 }}>Seja Bem-vindo</Text>
						<Image source={ require('../images/logo.png') } />
					</View>
				
					<View style={{ flex: 1 }}>
						<Button title="Fazer Login" onPress={ () => false } />
					</View>
				
				</View>

			</ImageBackground>
		)
	}
} 