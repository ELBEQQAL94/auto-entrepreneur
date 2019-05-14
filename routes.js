import React from 'react';
import {Platform} from 'react-native';
import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';

//SCREENS
import SignIn from './Screens/Auth';
import InvoicesList from './Screens/InvoicesList';
import NewInvoice from './Screens/NewInvoice';
import ViewInvoice from './Screens/ViewInvoice';
import Configuration from './Screens/Configuration';
import Logo from './utils/logo';

// Header Configuration
const headerConf = {
    headerLayoutPreset:'center',
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#fff'
        },
        headerTintColor:'white',
        headerTitle:Logo
    }
}

// Invoices List Screen
const InvoicesListStack = createStackNavigator({
    InvoicesList: InvoicesList
},headerConf)
// Create Invoice Screen
const NewInvoiceStack = createStackNavigator({
    NewInvoice: NewInvoice
},headerConf)
// View Invoice Screen
const ViewInvoiceStack = createStackNavigator({
    ViewInvoice: ViewInvoice
},headerConf)
// Authentication Screen
const AuthStack = createStackNavigator({
    SignIn: SignIn
},{
    headerMode: 'none'
})
// Configuration Screen
const ConfigurationStack = createStackNavigator({
    Configuration: Configuration
},headerConf)


export const RootNavigator = ()=>{
    return createAppContainer(createSwitchNavigator({
        InvoicesList:InvoicesListStack,
        Auth:AuthStack,
        NewInvoice:NewInvoiceStack,
        ViewInvoice:ViewInvoiceStack,
        Configuration:ConfigurationStack,
    },{
        initialRouteName:'Configuration'
    }))
}