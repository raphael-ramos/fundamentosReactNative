import React from 'react'
import {Text} from 'react-native'
import estilo from './estilo'

export default function Comp(){
    return <Text style={estilo.txtG}>Comp #Oficial</Text>
}

export function Comp1(){
    return <Text style={estilo.txtG}>Comp #1</Text>
}

export function Comp2(){
    return <Text style={estilo.txtG}>Comp #2</Text>
}

// export {Comp1, Comp2}