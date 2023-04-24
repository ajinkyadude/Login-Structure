import { useState } from "react";
import { View, TextInput, StyleSheet, Image, Pressable, TouchableOpacity, Text, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import image from './Images/logo.png'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
//import {GoogleLoginButton, FacebookLoginButton, TwitterLoginButton} from 'react-social-login-buttons'

const {height,width}=Dimensions.get('window');

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
        width: height*0.3,
        height: height*0.3,
        // borderWidth: 2,
        // borderColor: "red"
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
        padding: height * 0.017,
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


// import {StyleSheet, Text, TextInput, View , Animated} from 'react-native';
// import React, {useEffect, useRef, useState} from 'react';

// const Input = () => {
//   const [name, setName] = useState('');
//   const [isFocused, setIsFocused] = useState(false);

//   const animatedIsFocused = useState(new Animated.Value(name === '' ? 0 : 1))[0];

//   useEffect(()=> {
//     Animated.timing(animatedIsFocused,{
//         toValue : (isFocused || name !== '') ? 1 : 0,
//         duration : 200,
//         useNativeDriver : false
//     }).start()
//   })

//   return (
//     <View style={styles.container}>
//       <Animated.Text
//         style={{
//            margin : 8,
//            position :'absolute',
//            left : 0,
//            backgroundColor: "white",
//            paddingHorizontal: "2%",
           
//            top : animatedIsFocused.interpolate({
//             inputRange : [0,1],
//             outputRange : [18,0],
//          }),
//           fontSize:animatedIsFocused.interpolate({
//             inputRange : [0,1],
//             outputRange : [20,14]
//          }),
//           color: animatedIsFocused.interpolate({
//             inputRange : [0,1],
//             outputRange : ['#aaa',"#000"]
//          }),
//          zIndex : 2
//         }}>
//         Name
//       </Animated.Text>
//       <TextInput
//         value={name}
//         onChangeText={text => setName(text)}
//         style={styles.textInput}
//         onFocus={() => setIsFocused(true)}
//         onBlur={() => setIsFocused(false)}
//       />
//     </View>
//   );
// };

// export default Input;

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 18,
//     backgroundColor: '#f5fcff',
//     marginTop: 100,
//     width: "90%",
//     marginLeft: 10
//   },
//   textInput: {
//     borderWidth: 1,
//     borderColor: '#555',
//     // height : 26,
//     // fontSize : 20,
//     zIndex : 1
//   },
// });