import React, { useState } from "react";
import { Button, Text } from "react-native";
import Padrao from "../estilos/Padrao";

class IncrementarFelipe extends React.Component<{}, { input: string }> {

    state = {
        input: ''
    }

    executar = () => {
        this.setState(prevState => ({ input: prevState.input + 'felipe'}));
    }

    executar1 = () => {
        this.setState(prevState => ({ input: prevState.input + ' '}));
    }

    executar2 = () => {
        this.setState(({input: ''}));
    }

    render(){
        return(
        <>

        <Text style={Padrao.textoGrande}>{this.state.input}</Text>

        <Button 
            title='Adicionar o nome Felipe'
            onPress={this.executar}
        />

        <Button 
            title='Adicionar espaço em branco'
            onPress={this.executar1}
        />

        <Button 
            title='Limpar tudo'
            onPress={this.executar2}
        />

        </>
        )
    }
}

export default IncrementarFelipe;