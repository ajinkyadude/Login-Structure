import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';

const main = [
    { label: "What city were you born in?", value: 1 },
    { label: "What is your oldest sibling’s middle name?", value: 2 },
    { label: "What was the make and model of your first car?", value: 3 },
    { label: "In what city or town did your parents meet?", value: 4 },
    { label: "What was your childhood nickname?", value: 5 },
    { label: "What is the name of your favorite childhood friend?", value: 6 },
    { label: "What school did you attend for sixth grade?", value: 7 },
    { label: "In what city does your nearest sibling live?", value: 8 },
    { label: "In what city or town was your first job?", value: 9 },
    { label: "What was your favorite place to visit as a child?", value: 10 },
    { label: "What is the country of your ultimate dream vacation?", value: 11 },
    { label: "What is the name of your favorite childhood teacher?", value: 12 },
    { label: "What was your dream job as a child?", value: 13 },
    { label: "Who was your childhood hero?", value: 14 },
    { label: "What is the name, breed, and color of current pet?", value: 15 },
    { label: "What year did you graduate from High School?", value: 16 },
]


const Demo = () => {

    const [state, setState] = useState(main);
    const [state2, setState2] = useState(main);
    const [state3, setState3] = useState(main);

    const [first, setFirst] = useState();
    const [second, setSecond] = useState();
    const [third, setThird] = useState();

    const [dis1,setDis1]=useState(false);
    const [dis2,setDis2]=useState(false);
    const [dis3,setDis3]=useState(false);

    const [firstQuestion,setFirstQuestion]=useState();
    const [secondQuestion,setSecondQuestion]=useState();
    const [thirdQuestion,setThirdQuestion]=useState();

    const focusHandle1 = () => {
        var arr = [];
        if (second) {
            arr = main.filter((item) => second !== item.value);
            if (third) {
                arr = arr.filter((item) => third !== item.value);
            }
            setState(arr);
        }
        else if (third) {
            arr = main.filter((item) => third !== item.value)
            setState(arr);
        }
        else {
            setState(main);
        }

    }
    const focusHandle2 = () => {
        var arr = [];
        if (first) {
            arr = main.filter((item) => first !== item.value);
            if (third) {
                arr = arr.filter((item) => third !== item.value);
            }
            setState2(arr);
        }
        else if (third) {
            arr = main.filter((item) => third !== item.value)
            setState2(arr);
        }
        else {
            setState2(main);
        }

    }
    const focusHandle3 = () => {
        var arr = [];
        if (first) {
            arr = main.filter((item) => first !== item.value);
            if (second) {
                arr = arr.filter((item) => second !== item.value);
            }
            setState3(arr);
        }
        else if (second) {
            arr = main.filter((item) => second !== item.value)
            setState3(arr);
        }
        else {
            setState3(main);
        }

    }

    const changeHandler1 = (val) => {
        setFirst(val.value);
        setFirstQuestion(val.label);
    }
    const changeHandler2 = (val2) => {
        setSecond(val2.value);
        setSecondQuestion(val2.label);
    }
    const changeHandler3 = (val3) => {
        setThird(val3.value);
        setThirdQuestion(val3.label);
    }

    const changeHandle=(val4,type)=>{
        //console.log(val4);
        if(type === 'set1')
        {
            if(val4)
            {
                setDis1(true);
            }
            else{
                setDis1(false);
            }
            
        }
        if(type === 'set2')
        {
            if(val4)
            {
                setDis2(true);
            }
            else{
                setDis2(false);
            }
        }
        if(type === 'set3')
        {
            if(val4)
            {
                setDis3(true);
            }
            else{
                setDis3(false);
            }
        }

    }

    return (
        <View>
            <View style={{ marginTop: 50 }} />
            <Dropdown
                style={styles.dropdown}
                data={state}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={firstQuestion}
                //value={value}
                onFocus={focusHandle1}
                //onBlur={() => setIsFocus(false)}
                onChange={changeHandler1}
                selectedTextStyle={{ color: 'grey', height: 50 }}
                disable={dis1}
            //disable={dis1}
            />
            <TextInput
                placeholder='Enter Ans..'
                style={{
                    borderBottomWidth: 1,
                    marginTop: 30
                }}
                onChangeText={(val)=>{changeHandle(val,'set1')}}
            />

            <View style={{ marginTop: 80 }} />
            <Dropdown
                style={styles.dropdown}
                data={state2}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={secondQuestion ? secondQuestion : 'Select second Question 2'}
                //value={value}
                onFocus={focusHandle2}
                //onBlur={() => setIsFocus(false)}
                onChange={changeHandler2}
                selectedTextStyle={{ color: 'grey', height: 50 }}
                disable={dis2}
            //disable={dis1}
            />
            <TextInput
                placeholder='Enter Ans..'
                style={{
                    borderBottomWidth: 1,
                    marginTop: 30
                }}
                onChangeText={(val)=>{changeHandle(val,'set2')}}
            />

            <View style={{ marginTop: 80 }} />
            <Dropdown
                style={styles.dropdown}
                data={state3}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={thirdQuestion ? thirdQuestion : 'Select third Question 3'}
                //value={value}
                onFocus={focusHandle3}
                //onBlur={() => setIsFocus(false)}
                onChange={changeHandler3}
                selectedTextStyle={{ color: 'grey', height: 50 }}
                disable={dis3}
            //disable={dis1}
            />
            <TextInput
                placeholder='Enter Ans..'
                style={{
                    borderBottomWidth: 1,
                    marginTop: 30
                }}
                onChangeText={(val)=>{changeHandle(val,'set3')}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderBottomWidth: 1,
        paddingHorizontal: 8,
    },
})

export default Demo