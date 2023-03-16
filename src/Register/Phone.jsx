import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';

const Phone = () => {

    const [phoneNumber,setPhoneNumber]=useState(true);

    // const phoneHandler=(val)=>{
    //     //const reg=/^[0-9]{10}$/;
    //     // var pattern = /^\d{10}$/;
    //     // if(pattern.test(val)===true)
    //     // {
    //     //     setPhoneNumber(true);
    //     // }
    //     // else{
    //     //     setPhoneNumber(false);
    //     // }

    //     if(parseInt(val)>0)
    //     {
    //         setPhoneNumber(true)
    //     }
    //     else{
    //         setPhoneNumber(false);
    //     }

    // }

    return (
        <View style={{paddingTop: "5%"}}>
            <TextInput keyboardType="decimal-pad" style={styles.phInput} placeholder='Enter Your Number...' maxLength={10} />
        </View>
    )
}

export default Phone

const styles = StyleSheet.create({
    phInput: {
        borderBottomWidth: 2,
        borderColor: "#33FFE9",
    },
    errorInput:{
        borderBottomWidth: 2,
        borderColor: "red",
    }
})