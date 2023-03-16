import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const Input = ({placeholder,change,styles,password, keyType,len, vstyle,side,name, mulLine, num}) => {

    const keyHandle=(val)=>{
        change(val);
    }

  return (
    <View style={[styles, side==='right' && {justifyContent: 'space-between'}]}>
        {name && side==='left' && <Icon name={name} size={24}/>}
      <TextInput 
      placeholder={placeholder} 
      secureTextEntry={password} 
      keyboardType={keyType} 
      onChangeText={change && keyHandle} 
      style={side==='left' && {marginLeft: "3%"}}
      maxLength={len}
      multiline={mulLine}
      numberOfLine={num} />
      {name && side==='right' && <Icon style={{marginLeft: "60%"}} name={name} size={24}/>}
    </View>
  )
}

export default Input

