import React from 'react';
import { View,StyleSheet,Alert,Text,TouchableOpacity,TextInput } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


class InputCustom extends React.Component{

render(){
    switch(this.props.type){
        case 'text' :{
            return (
                <View style={[{margin:10,backgroundColor:'#fff',borderRadius:10,borderWidth:1,borderColor:'#fff',elevation:1},styles.Shadow]}>
                    <View style={{alignSelf:'flex-start',padding:10,flexDirection:'row'}}>
                        <FontAwesome name={this.props.icon} size={22} style={{margin:10,marginTop:0,marginBottom:0,color:"#424242"}} />
                        <TextInput maxLength={40} multiline={true} style={{width:'100%'}} placeholder={this.props.placeholder} />
                    </View>
                </View>
                )
            }
            case 'adress' :{
                return (
                    <View style={[{margin:10,backgroundColor:'#fff',borderRadius:10,borderWidth:1,borderColor:'#fff',elevation:1},styles.Shadow]}>
                        <View style={{alignSelf:'center',padding:15,color:this.props.textcolor,flexDirection:'row'}}>
                            <FontAwesome name={this.props.iconname} size={this.props.iconsize} style={{padding:10,color:this.props.iconcolor}} />
                            <TextInput placeholder={this.props} />
                        </View>
                    </View>
                    )
                }
            case 'picker' :{
                return (
                    <View style={[{margin:10,backgroundColor:'#fff',borderRadius:10,borderWidth:1,borderColor:'#fff',elevation:1},styles.Shadow]}>
                        <View style={{alignSelf:'center',padding:15,color:this.props.textcolor,flexDirection:'row'}}>
                            <FontAwesome name={this.props.iconname} size={this.props.iconsize} style={{padding:10,color:this.props.iconcolor}} />
                            <TextInput placeholder={this.props} />
                        </View>
                    </View>
                    )
                }
            case 'password' :{
                return (
                    <View style={[{margin:10,backgroundColor:'#fff',borderRadius:10,borderWidth:1,borderColor:'#fff',elevation:1},styles.Shadow]}>
                        <View style={{alignSelf:'center',padding:15,color:this.props.textcolor,flexDirection:'row'}}>
                            <FontAwesome name={this.props.iconname} size={this.props.iconsize} style={{padding:10,color:this.props.iconcolor}} />
                            <TextInput placeholder={this.props} />
                        </View>
                    </View>
                    )
                }
            case 'email' :{
                return (
                    <View style={[{margin:10,backgroundColor:'#fff',borderRadius:10,borderWidth:1,borderColor:'#fff',elevation:1},styles.Shadow]}>
                        <View style={{alignSelf:'center',padding:15,color:this.props.textcolor,flexDirection:'row'}}>
                            <FontAwesome name={this.props.iconname} size={this.props.iconsize} style={{padding:10,color:this.props.iconcolor}} />
                            <TextInput placeholder={this.props} />
                        </View>
                    </View>
                    )
                }
                

    }}}

const styles = StyleSheet.create({
  Shadow:{
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
})


export default InputCustom;