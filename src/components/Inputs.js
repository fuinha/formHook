import React, { useContext, useRef, useEffect } from 'react'

import FormContext from './FormContext';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Input,
  } from 'react-native';
  
export default function Inputs({name}) {

  const inputRef = useRef();
const { registerField } = useContext(FormContext);


  useEffect(()=>{
    // only cal if have object
    if(inputRef.current){
    registerField(name, inputRef.current);
    }
  },[name, registerField]);


  return (
           <View>
           <Text
            name={name} 
            ref={inputRef}

            />
           </View>
    )
}
