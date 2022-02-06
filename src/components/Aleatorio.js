import React from 'react'
import {Text} from 'react-native';
import Estilo from './estilo';

export default ({ minNum, maxNum }) => {
    const numAleatorio = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
    return(
        <Text style={Estilo.txtG}>
            O Numero {numAleatorio} está entre {minNum} e {maxNum}
        </Text>
    )
} 