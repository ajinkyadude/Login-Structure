import { useState } from "react";
import { View, TextInput, StyleSheet, Image, Pressable, TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import image from './Images/logo.png'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
//import {GoogleLoginButton, FacebookLoginButton, TwitterLoginButton} from 'react-social-login-buttons'

const Login = () => {

    const [visible,setVisible]=useState(true);
    const [validEmail,setValidEmail]=useState(true);
    const [validPass,setValidPass]=useState(true);
    // const [emailStyle,setEmailStyle]=useState(false);
    // const [passStyle,setPassStyle]=useState(false);

//     ^                         Start anchor
// (?=.*[A-Z].*[A-Z])        Ensure string has two uppercase letters.
// (?=.*[!@#$&*])            Ensure string has one special case letter.
// (?=.*[0-9].*[0-9])        Ensure string has two digits.
// (?=.*[a-z].*[a-z].*[a-z]) Ensure string has three lowercase letters.
// .{8}                      Ensure string is of length 8.
// $                         End anchor.

    const iconHandle=()=>{
        setVisible(!visible);
    }

    const LoginHandler=()=>{

    }

    const passChangeHandle=(val2)=>{
        const reg2=/^(?=(.*[a-z]){3,})(?=(.*[A-Z]){2,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/;
        if (reg2.test(val2) === true){
            setValidPass(true);
        }
        else{
            setValidPass(false);
        }
    }
   
    const emailTextHandler=(val)=>{
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
           if (reg.test(val) === true){
               setValidEmail(true);
           }
           else{
               setValidEmail(false);
           }
    }

    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View>
                <Image source={image} style={styles.image} />
            </View>
            {/* {console.log(emailStyle)} */}
            <View style={[styles.root]}>
                <Icon2 name="user-alt" size={24} style={{padding: 10}} />
                {/* <Icon name="eye-off" size={24} /> */}
                <TextInput 
                style={styles.inputBox} 
                placeholder="Enter Your Password.."
                onChangeText={emailTextHandler}
                />
            </View>

            {!validEmail && <Text style={styles.error}>Enter Valid E-Mail*</Text>}

            <View style={[styles.root]}>
            <Icon2 name="key" size={24} style={{padding: 10}} />
                <TextInput 
                style={styles.inputBox} 
                placeholder="Enter Your Password.."
                secureTextEntry={visible}
                onChangeText={passChangeHandle}
                />
                <Pressable onPress={iconHandle} style={({pressed})=>[styles.icon,pressed && styles.pressed]}>
                <Icon name="eye" size={24} />
                </Pressable>
            </View>

            {!validPass && <Text style={styles.error}>Enter Strong Password</Text> }

            <TouchableOpacity style={{alignItems:'flex-end', width: "80%", marginTop: "5%"}}><Text style={styles.forget}>Forget Password ?</Text></TouchableOpacity>



            <View style={styles.touchable}>  
                <TouchableOpacity onPress={LoginHandler} style={{flex :1, alignItems: 'center',justifyContent: 'center'}}>
                    <Text style={{color: "white", fontWeight: 'bold', fontSize: 17}}>Login</Text>
                </TouchableOpacity>
            </View>



            <View style= {{flexDirection: 'row', marginTop: '8%', alignItems: 'center', justifyContent: 'center'}}>
                <View style={{borderWidth: 1,height: 0, width: '30%'}}></View>
                <View><Text style={{fontWeight: 'bold', fontSize: 20}}>Or</Text></View>
                <View style={{borderWidth: 1,height: 0, width: '30%'}}></View>
            </View>


            <View style={styles.viewContainer}>
                <Text>Not a member ?</Text>
                <TouchableOpacity style={({pressed})=>{pressed && styles.pressed}}>
                    <Text style={styles.signUp}>Sign Up</Text> 
                </TouchableOpacity>
            </View>            
        </View>
        
    )
}

export default Login;

const styles = StyleSheet.create({
    image:{
        width: 200,
        height: 200
    },
    root: {
        width: "90%",
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 10,
        marginTop: "10%"
    },
    root2:{
        borderColor: 'red',
        borderWidth: 3
    },
    inputBox: {
        flex: 1,
    },
    icon: {
        padding: 10,
        // padding: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pressed:{
        opacity: 0.7
    },
    touchable:{
        backgroundColor: '#7D33FF',
        width: "90%",
        borderWidth: 2,
        borderRadius: 10,
        marginTop: "5%",
        height: "10%"
    },
    forget:{
        color: "#6B33FF",
        fontSize: 15,
        fontWeight: 'bold'
    },
    error: {
        color: "red",
        //alignItems: 'flex-end',
        width: "80%",
        fontWeight: 'bold'
    },
    signUp:{
        fontWeight: 'bold',
        fontSize: 15   ,
        color: "#6B33FF"
    },
    viewContainer:{
        alignItems: 'center',
        marginTop: "6%"
    }
})