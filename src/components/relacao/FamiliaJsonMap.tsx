import React from "react";
import { Text } from "react-native";
import Membro from "./Membro";
import Padrao from "../../estilos/Padrao";

interface FamiliaProps{
    membros: { nome: string; sobreNome: string} [];
}

function getMembros(registros: FamiliaProps){
    return registros.membros.map((membro, index) => (
            <Membro key={index} nome={membro.nome} sobreNome={membro.sobreNome} />
        ));
}

const Familia: React.FC<FamiliaProps> = (props) => (
    <>
        <Text style={Padrao.textoDestaque}>Membros da Família</Text>
        {getMembros(props)}
    </>
);

export default Familia;