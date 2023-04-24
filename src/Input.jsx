import { View, Text, TextInput, StyleSheet, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const Input = ({ placeholder, change, styles, password, keyType, len, vstyle, side, name, mulLine, num }) => {

  const keyHandle = (val) => {
    change(val);
  }

  const [isFocused, setIsFocused] = useState(false);

  const animatedIsFocused = useState(new Animated.Value(name === '' ? 0 : 1))[0];

  useEffect(()=> {
    Animated.timing(animatedIsFocused,{
        toValue : (isFocused || name !== '') ? 1 : 0,
        duration : 200,
        useNativeDriver : false
    }).start()
  })


  return (
    <View style={[styles, side === 'right' && { justifyContent: 'space-between' }]}>
      {name && side === 'left' && <Icon name={name} size={24} />}

      <TextInput
        placeholder={placeholder}
        secureTextEntry={password}
        keyboardType={keyType}
        onChangeText={change && keyHandle}
        style={side === 'left' && { marginLeft: "3%", zIndex: 1 }}
        maxLength={len}
        multiline={mulLine}
        numberOfLine={num}/>
      {name && side === 'right' && <Icon style={{ marginLeft: "60%" }} name={name} size={24} />}
      {/* <Text>Demo</Text> */}
    </View>
    

    // <View style={styles.container}>
    //   <Animated.Text
    //     style={{
    //        margin : 8,
    //        position :'absolute',
    //        left : 0,
    //        backgroundColor: "white",
    //        paddingHorizontal: "2%",
           
    //        top : animatedIsFocused.interpolate({
    //         inputRange : [0,1],
    //         outputRange : [18,0],
    //      }),
    //       fontSize:animatedIsFocused.interpolate({
    //         inputRange : [0,1],
    //         outputRange : [20,14]
    //      }),
    //       color: animatedIsFocused.interpolate({
    //         inputRange : [0,1],
    //         outputRange : ['#aaa',"#000"]
    //      }),
    //      zIndex : 2
    //     }}>
    //     Name
    //   </Animated.Text>
    //   <TextInput
    //     value={name}
    //     onChangeText={text => setName(text)}
    //     style={styles.textInput}
    //     onFocus={() => setIsFocused(true)}
    //     onBlur={() => setIsFocused(false)}
    //   />
    // </View>

  )
}

export default Input


const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    backgroundColor: '#f5fcff',
    marginTop: 100,
    width: "90%",
    marginLeft: 10
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#555',
    // height : 26,
    // fontSize : 20,
    zIndex : 1
  },
});





