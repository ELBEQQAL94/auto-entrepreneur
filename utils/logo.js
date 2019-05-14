import React, {Component} from 'react';
import { Image, Dimensions } from 'react-native';

import LogoImg from '../assets/images/logo.jpg'
const DEVICE_DIMENSIONS = Dimensions.get('screen');
console.log(DEVICE_DIMENSIONS);

const LogoTitle = () => (
    <Image
        source={LogoImg}
        style={{width:'100%',height:'100%',padding:20}}
        resizeMode="contain"
    />
)

export default LogoTitle;