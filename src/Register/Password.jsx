import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState, version } from 'react'

const Password = () => {

    const [pass, setPass] = useState(true);
    const [PassChar,setPassChar]=useState();
    const [cpass, setcpass] = useState(true);

    const passHandle = (val) => {
        const reg2 = /^(?=(.*[a-z]){3,})(?=(.*[A-Z]){2,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/;
        if (reg2.test(val) === true) {
            setPass(true);
            setPassChar(val)
        }
        else {
            setPass(false)
        }
    }
    const confirmPassHandle = (val2) => {
        //console.log(pass+"-"+val2);
        if (val2 === PassChar) {
            setcpass(true);
        }
        else {
            setcpass(false);
        }
    }

    return (
        <View>
            <View style={{ paddingTop: "5%" }}>
                <TextInput onChangeText={passHandle} secureTextEntry={true} style={pass ? styles.phInput : styles.errorInput} placeholder='Create New Password' />
            </View>
            <View style={{ paddingTop: "5%" }}>
                <TextInput onChangeText={confirmPassHandle} secureTextEntry={true} style={cpass ? styles.phInput : styles.errorInput} placeholder='Re-Enter Password' />
            </View>
        </View>
    )
}

export default Password;

const styles = StyleSheet.create({
    phInput: {
        borderBottomWidth: 2,
        borderColor: "#33FFE9",
    },
    errorInput: {
        borderBottomWidth: 2,
        borderColor: "red",
    }
})