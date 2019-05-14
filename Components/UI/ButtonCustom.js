import React from 'react';
import { View,StyleSheet,Alert,Text,TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


const ButtonCustom = (props)=> {


    return (
        <TouchableOpacity onPress={()=>{Alert.alert("Button Pressed")}}>
        <View style={{margin:10,backgroundColor:props.buttoncolor,borderRadius:10,borderWidth:1,borderColor:props.buttoncolor}}>
            <View style={{alignSelf:'center',padding:15,color:props.textcolor,flexDirection:'row'}}>
            {props.icon ? <FontAwesome size={22} style={{marginRight:10,color:props.textcolor,alignSelf:'center' }} name={props.icon} /> : null }
            <Text style={{color:props.textcolor,fontSize:18}} >{props.text}</Text>
            </View>
        </View>
        </TouchableOpacity>


        )}

export default ButtonCustom;