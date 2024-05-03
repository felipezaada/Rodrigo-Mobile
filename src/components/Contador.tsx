import React, { useState } from 'react';
import { View, Text, Button} from 'react-native';
import Padrao from '../estilos/Padrao';

const Contador = () => {
    const[contador, setContador] = useState(0);

    return(
        <View>

        <Button 
            title='Aumentar +1'
            onPress= {() => setContador(contador + 1)
            }
        />

        <Button 
            title='Diminuir -1'
            onPress= {() => setContador(contador - 1)
            }
        />

        <Text style={Padrao.textoDestaque}>Valor: {contador}</Text>
        </View>
    )
}

export default Contador;