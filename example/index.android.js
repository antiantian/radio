/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';
import RadioModalItem from './comon/radio'
export default class AwesomeProject extends Component{
    render(){
      return (
		   <RadioModalItem/>
      );
    }
 };

 const styles = StyleSheet.create({
   backImage:{
     width:13,
     height:26,
   },
   container: {
     flex: 1,
   },
   navBar: {
     backgroundColor: 'white',
	 display:'none',
   },
   button: {
     padding: 15,
   },
   containView:{
     flex: 1,
     backgroundColor:'gray',
     justifyContent: 'center',
   },
   detailContainView:{
     flex:1,
     justifyContent: 'center',
     backgroundColor:'green',
   },
   blackText:{
     fontSize:20,
     textAlign:'center',
   },
   navBar: {
    backgroundColor: 'white',
   },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: '#373E4D',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
    paddingTop:6,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: '#5890FF',
  },
 });

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
