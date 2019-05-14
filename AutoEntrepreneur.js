import React from 'react';
import { View, StyleSheet, Dimensions,ImageBackground,Text,Image,StatusBar } from 'react-native';
import {RootNavigator} from './routes';


class AutoEntrepreneur extends React.Component{
    
    

render(){
    
    const Nav = RootNavigator();

    return (

        <View style={{flex:1,backgroundColor:'#F6F6F6'}}>
            <Nav/>
        </View>



        )}}

export default AutoEntrepreneur;