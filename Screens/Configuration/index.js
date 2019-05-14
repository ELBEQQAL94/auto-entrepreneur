import React from 'react';
import { View, StyleSheet, Dimensions,Text,StatusBar } from 'react-native';
//COMPONENTS
import ButtonCustom from '../../Components/UI/ButtonCustom'
import InputCustom from '../../Components/UI/InputCustom'

class Configuration extends React.Component{

render(){


    return (

        <View style={{flex:1,backgroundColor:'#F6F6F6'}}>
            <InputCustom type='text' placeholder='test' icon='facebook' />
        </View>



        )}}

export default Configuration;