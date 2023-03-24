import { StyleSheet, Text, TextInput, View, Animated } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

const Input = () => {
    const [name, setName] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const animatedIsFocused = useState(new Animated.Value(name === '' ? 0 : 1))[0];

    useEffect(() => {
        Animated.timing(animatedIsFocused, {
            toValue: (isFocused || name !== '') ? 1 : 0,
            duration: 200,
            useNativeDriver: false
        }).start()
    })

    const TextStyle = {
        margin: 8,
        position: 'absolute',
        left: 0,

        top: animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [18, 0],
        }),
        fontSize: animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 14]
        }),
        color: animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: ['#aaa', "#000"]
        }),
        backgroundColor: 'white',
        paddingHorizontal: 4,
        zIndex: 2
    }

    return (
        <View style={styles.container}>
            <Animated.Text
                style={TextStyle} numberOfLines={1}>
                Hello Guys Hello Hello Guys Hello 
                Hello Guys Hello vHello Guys Hello Hello Guys Hello Hello Guys Hello Hello Guys Hello            
            </Animated.Text>
            <TextInput
                value={name}
                //placeholder= "Hello Guys Hello Hello Guys HelloHello Guys Hello Hello Guys Hello Hello Guys Hello Hello Guys Hello Hello Guys Hello Hello Guys Hello Hello Guys Hello Hello Guys Hello Hello Guys Hello Hello Guys Hello "
                numberOfLines={1}
                onChangeText={text => setName(text)}
                style={styles.textInput}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                //ellipsizeMode = 'head'
            />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    container: {
        paddingTop: 18,
        backgroundColor: 'white',
        marginTop: 100
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#555',
        // height : 26,
        // fontSize : 20,
        zIndex: 1
    },
});