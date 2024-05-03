import React from "react";
import Padrao from "../estilos/Padrao";
import { Text, TextInput } from "react-native";

class Evento extends React.Component{

    state = {
        input: ''
    }

    render(){
        return(
            <>
            <Text style={Padrao.textoGrande}>{this.state.input}</Text>
            <TextInput
                style={Padrao.ex}
                value={this.state.input}
                onChangeText={(input) => this.setState({input})}>  
            </TextInput>

            </>
        )
    }
}

export default Evento;