import React from "react";
import { Text } from "react-native";
import Padrao from "../estilos/Padrao";

function getResultado(num : number){
    return num % 2 == 0 ? "Par" : "Impar";
}

export default (props: { numero: number; }) => (
    <>
        {
            <Text style={Padrao.ex}>{getResultado(props.numero)}</Text>
        }
    </>
)
