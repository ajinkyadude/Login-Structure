import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Email = () => {

    const [emailValid,setEmailValid]=useState(true);

    const emailHandler=(val)=>{
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(val) === true){
            setEmailValid(true);
        }
        else{
            setEmailValid(false);
        }
    }

  return (
    <View style={{paddingTop: "5%"}}>
      <TextInput placeholder='Enter Email' onChangeText={emailHandler} style={emailValid ? styles.emailInput : styles.errorInput} />
    </View>
  )
}

export default Email

const styles = StyleSheet.create({
    emailInput: {
        borderBottomWidth: 2,
        borderColor: "#33FFE9",
    },
    errorInput:{
        borderBottomWidth: 2,
        borderColor: "red",
    }
})