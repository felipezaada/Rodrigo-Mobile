import React, { Component } from "react";
import {View, Text, StyleSheet} from 'react-native';
import Simples from "./components/Simples";
import Frag from "./components/Frag";
import ParImpar from "./components/ParImpar";
import Familia from "./components/relacao/Familia";
import Membro from "./components/relacao/Membro";

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

      <ParImpar numero={20}/> */}

      <Familia>
        {Nomes("felipe", "cabeçudo")}
        {Nomes("rodigo", "pouças")}
      </Familia>

      
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