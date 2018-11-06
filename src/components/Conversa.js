import React, { Component } from 'react'
import { View, Text, ImageBackground, TextInput, Image, TouchableHighlight, ListView } from 'react-native';

import { connect } from 'react-redux';

import _ from 'lodash';

import { digitaMensagem, enviaMensagem, conversaUsuarioFetch } from '../actions/AppActions';

class Conversa extends Component {

  componentWillMount() {

    var email = this.props.navigation.getParam('email');

    this.props.conversaUsuarioFetch(email);

    this.criaFonteDeDados(this.props.conversa); 

  }

  componentWillReceiveProps(nextProps){
    this.criaFonteDeDados(nextProps.conversa);
  }

  criaFonteDeDados(conversa){
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !==r2 });

    this.dataSource = ds.cloneWithRows(conversa);
  }

  renderRow(texto) {
    if(texto.tipo == 'e') {
      return(
        <View style={{ alignItems:"flex-end", marginTop: 5, marginBottom:5, marginLeft: 40, marginRight:5 }}>
          <Text style={{ fontSize: 18, color: '#000', padding: 10, backgroundColor: '#ddf5b4', elevation: 1, borderBottomLeftRadius: 20, borderTopLeftRadius: 20, borderBottomRightRadius: 20 }}>{texto.mensagem}</Text>
        </View>
      )
    }
    //this texto recived comes to dataSource attribute, each data is automatically passed to renderRow 
    return(
      <View style={{ alignItems:"flex-start", marginTop: 5, marginBottom:5, marginRight: 40, marginLeft: 5 }}>
        <Text style={{ fontSize: 18, color: '#000', padding: 10, backgroundColor: '#f7f7f7', elevation: 1, borderBottomLeftRadius: 20, borderTopRightRadius: 20, borderBottomRightRadius: 20 }}>{texto.mensagem}</Text>
      </View>
    )
  }

  _enviaMensagem(navigation){
    
    var nome = navigation.getParam('name');
    var email = navigation.getParam('email');

    const { mensagem } = this.props;
    
    this.props.enviaMensagem(mensagem, nome, email);
  }
  
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.getParam('name'),
    }
  }
  render() {
    return (

      <ImageBackground style={{ flex: 1, width: null }} source={ require('../images/bg-in.png') }>
          
          <View style={{ flex:1, paddingBottom: 20 }}>
          
            <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}    
            />
          
          </View>

          <View style={{ flexDirection: 'row', height: 60, padding: 10, marginBottom: 10 }}>
            <TextInput 
              style={{ flex: 4, backgroundColor: '#fff', fontSize: 18, height: 50, borderRadius: 100, paddingLeft: 20, paddingRight: 20 }}
              placeholder="Digite aqui..."
							placeholderTextColor="#d3d3d3"
              value={ this.props.mensagem }
              onChangeText={ text => this.props.digitaMensagem(text) }
              returnKeyType={ 'done' }
              onSubmitEditing={ () => this._enviaMensagem(this.props.navigation) }
            />

            <TouchableHighlight 
              onPress={ () => this._enviaMensagem(this.props.navigation) } 
              style={{ backgroundColor: '#13665a', width: 50, height: 50, alignItems: 'center', justifyContent: "center", borderRadius: 100, marginLeft: 5 }}
            >
              <Image 
                source={ require('../images/enviar.png') }
                style={{ width: 25, height: 25, }} 
              />
            </TouchableHighlight>
          </View>
      </ImageBackground>
    )
  }
}

const mapStateToProps = state => {
  const conversa = _.map(state.ListaConversaReducer, (val, uid) => {
    return { ...val, uid }
  });

  console.log(conversa);

    return ({
      conversa: conversa,
      mensagem: state.AppReducer.mensagem,

    })
}


export default connect(mapStateToProps, { digitaMensagem, enviaMensagem, conversaUsuarioFetch })(Conversa);
