import React, { Component } from "react";
import {View, Text, StyleSheet} from 'react-native';
import Simples from "./components/Simples";
import Frag from "./components/Frag";
import ParImpar from "./components/ParImpar";
import Familia from "./components/relacao/Familia";
import Membro from "./components/relacao/Membro";
import FamiliaJson from "./components/relacao/FamiliaJson";
import FamiliaJsonMap from "./components/relacao/FamiliaJsonMap";
import UsuarioLogado from "./components/UsuarioLogado";
import Botao from "./components/Botao";
import Contador from "./components/Contador";
import Evento from "./components/Evento";
import IncrementarFelipe from "./components/IncrementarFelipe";

const Familia1 = [
  {"nome": "Josefina", "sobreNome": "Josefa"},
  {"nome": "Fininho", "sobreNome": "Josefa"}
]

const Familia2 = [
  {"nome": "Jalim", "sobreNome": "Josefa"},
  {"nome": "Matias", "sobreNome": "Josefa"}
]

function Nomes(nom1: string, nom2: string){
  return <Membro nome={nom1} sobreNome={nom2} />
}

export default class App extends Component{
  render(){
    return (
      <View style={estilos.container}>

       {/* <Text style={estilos.fonte}>Olá Mundo!</Text>
      <Simples valor="Programando em React Native"/>
      
      <Frag titulo="Titulo"
      subtitulo="Sub titulo" />

      <ParImpar numero={20}/> 

      <Familia>
        {Nomes("felipe", "cabeçudao")}
        {Nomes("rodigo", "pouças")}
      </Familia>

      <FamiliaJson membros={Familia1}   />
      <FamiliaJsonMap membros={Familia1} />

      <UsuarioLogado usuario={ {"nome":'teste', "email":'teste@gmail.com'} }/>
      <UsuarioLogado usuario={ {"nome":'teste'} }/>
      <UsuarioLogado usuario={ {"email":'teste@gmail.com'} }/>
      <UsuarioLogado usuario={ {} }/>
      <UsuarioLogado usuario={ null }/>

      <Botao />
      
      <Evento></Evento>

      <IncrementarFelipe />*/}

      <Contador />
      
      </View>
    );
  } 
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fonte: {
    fontSize: 40
  },
})