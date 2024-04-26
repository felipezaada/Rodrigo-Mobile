import React, { Component } from 'react';
import { Button, Text, Touchable } from 'react-native';
import Padrao from '../estilos/Padrao';
 
export default (props: any) => { 

    function executar(){
        console.warn('Botão acionado.')
    }

  return ( 
      <>
        <Button 
            title='Executar'
            onPress={executar}
        />

        <Button 
            title='Executar 2'
            onPress={function() { console.warn('Botão semi-acionado.') }}
        />

        <Button 
            title='Executar 3'
            onPress={() => console.warn('Botão quase-acionado.')}
        />
      </>
  ) 
}