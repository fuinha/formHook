import React, { useState, useCallback } from 'react'

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Form,
  } from 'react-native';
  
  import FormContext from './FormContext';

export default function Forms({ children}) {

    const [inputs, setInputs] = useState([]);

   const registerField = useCallback((name, ref)=>{
   // setInputs([...inputs, { name, ref}])
   setInputs(oldInputs => [...oldInputs, { name, ref}]);
   },[]); // remove inputs inside
    /*
    function registerField(name, ref){
        setInputs([...inputs, { name, ref}])
    }
*/

    return (
        <View>
        <FormContext.Provider value={{ registerField}}>
        {children}
        </FormContext.Provider>
        </View>
    )
}
