import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const Name = () => {
  return (
    <>
        <TextInput style={styles.nmInput} placeholder='Enter Your Full Name..' />
    </>
  )
}

const styles=StyleSheet.create({
    nmInput:{
        borderBottomWidth: 2,
        borderColor: "#33FFE9"
    }
})

export default Name