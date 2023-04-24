import { ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import Input from "./Input";
import Date from "./Register/Date";
import Email from "./Register/Email";
import Name from "./Register/Name";
import Password from "./Register/Password";
import Phone from "./Register/Phone";
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import SingleSelect from "./Register/SingleSelect";
//import MultiSelectComponent from "react-native-element-dropdown/lib/typescript/components/MultiSelect";
import MultiSel from "./Register/MultiSelect";

const Register = () => {

    const [emailValid, setEmailValid] = useState(true);
    const [pass, setPass] = useState(true);
    const [PassChar, setPassChar] = useState();
    const [cpass, setcpass] = useState(true);
    const [date, setDate] = useState("Select Date");

    const [male, setMale] = useState(false);
    const [female, setFemale] = useState(false);
    const [other, setOther] = useState(false);

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

    const onChangeHandler = (val) => {
        // console.log(val)
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(val) === true) {
            setEmailValid(true);
        }
        else {
            setEmailValid(false);
        }
    }

    const showDate = () => {

        console.log("Date..")
        // return(
        //     <Date />
        // )
    }
    const maleHandler = () => {
        setMale(true);
        setFemale(false);
        setOther(false);
    }
    const femaleHandler = () => {
        setFemale(true);
        setMale(false);
        setOther(false);
    }
    const otherHandler = () => {
        setOther(true);
        setMale(false);
        setFemale(false);
    }
    const { height, width } = useWindowDimensions();

    return (
        <View style={styles.root}>
            <View style={styles.innerRoot}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={[{flex: 1},width > height && {flexDirection: 'row', justifyContent: 'space-around'}]}>
                        <Input styles={[styles.nmInput, width > height && {marginRight: 10}]} placeholder='Enter Your Full Name..' />
                        <Input styles={[styles.nmInput, width > height && {marginLeft: 10}]} placeholder='Enter Your Number...' len={10} vstyle={styles.vInStyle} keyType="decimal-pad" />
                    </View>
                    <View style={[{flex: 1},width > height && {flexDirection: 'row', justifyContent: 'space-around'}]}>
                        <Input styles={[emailValid ? styles.nmInput : styles.errorInput,width > height && {marginRight: 10}]} vstyle={styles.vInStyle} placeholder='Enter Email' change={onChangeHandler} />
                        <Input styles={[pass ? styles.nmInput : styles.errorInput, width > height && {marginLeft: 10}]} password={true} vstyle={styles.vInStyle} placeholder='Create New Password' change={passHandle} />
                    </View>
                    <Input styles={cpass ? styles.nmInput : styles.errorInput} password={true} vstyle={styles.vInStyle} placeholder='Re-Enter Password' change={confirmPassHandle} />
                    <View style={{ marginTop: "7%" }}>
                        <Text>Gender: </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity onPress={maleHandler} style={[styles.genStyle, male && { borderColor: 'red' }]}>
                                    <Icon name="male" size={24} color={male ? 'red' : 'black'} />
                                </TouchableOpacity>
                                <Text>Male</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity onPress={femaleHandler} style={[styles.genStyle, female && { borderColor: 'red' }]}>
                                    <Icon name="female" size={24} color={female ? 'red' : 'black'} />
                                </TouchableOpacity>
                                <Text>Femal</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity onPress={otherHandler} style={[styles.genStyle, other && { borderColor: 'red' }]}>
                                    <Icon name="transgender" size={24} color={other ? 'red' : 'black'} />
                                </TouchableOpacity>
                                <Text>Other</Text>
                            </View>
                        </View>
                    </View>
                    <Input
                        mulLine={true}
                        num={4}
                        styles={{ borderWidth: 2, height: 100, marginTop: 20, borderColor: '#33FFE9' }}
                        placeholder="Enter Notes.." />
                    <SingleSelect />

                    <MultiSel />


                </ScrollView>
            </View>
        </View>
    )
}

export default Register;

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#33FFEC",
        width: '100%',
        height: '100%',
    },
    innerRoot: {
        backgroundColor: "white",
        flex: 1,
        margin: 20,
        borderRadius: 20,
        padding: "5%",
    },
    nmInput: {
        flex: 1,
        borderBottomWidth: 2,
        borderColor: "#33FFE9",
        paddingTop: "5%",
        flexDirection: 'row',
        alignItems: 'center',
    },
    vInStyle: {
        paddingTop: "5%"
    },
    errorInput: {
        borderBottomWidth: 2,
        borderColor: "red",
    },
    genStyle: {
        borderWidth: 1,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
    },

})