import React from 'react';
import {View,StyleSheet} from 'react-native';

// import Comp,{Comp1,Comp2} from './components/Multi'
// import Primeiro from './components/Primeiro'

import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';

export default() => (
    <View style={style.App}>
        <Aleatorio minNum={4} maxNum={70}/>
        {/* <Comp/>
        <MinMax min={3} max={20}/>
        <MinMax min="1" max="94"/>
        <Comp1></Comp1>
        <Comp2/>
        <Primeiro/> */}
    </View>
)

const style = StyleSheet.create({
    App:{
       flex:1,
       justifyContent:"center",
       alignItems:"center",
       padding: 20,
    }
})