import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';

const main = [
    { label: "What city were you born in?", value: 1, selected: false },
    { label: "What is your oldest sibling’s middle name?", value: 2, selected: false },
    { label: "What was the make and model of your first car?", value: 3, selected: false },
    { label: "In what city or town did your parents meet?", value: 4, selected: false },
    { label: "What was your childhood nickname?", value: 5, selected: false },
    { label: "What is the name of your favorite childhood friend?", value: 6, selected: false },
    { label: "What school did you attend for sixth grade?", value: 7, selected: false },
    { label: "In what city does your nearest sibling live?", value: 8, selected: false },
    { label: "In what city or town was your first job?", value: 9, selected: false },
    { label: "What was your favorite place to visit as a child?", value: 10, selected: false },
    { label: "What is the country of your ultimate dream vacation?", value: 11, selected: false },
    { label: "What is the name of your favorite childhood teacher?", value: 12, selected: false },
    { label: "What was your dream job as a child?", value: 13, selected: false },
    { label: "Who was your childhood hero?", value: 14, selected: false },
    { label: "What is the name, breed, and color of current pet?", value: 15, selected: false },
    { label: "What year did you graduate from High School?", value: 16, selected: false },
]

const Demo2 = () => {

    const [selectedValue,setSelecyedValue]=useState();
    const [selectedValue2,setSelecyedValue2]=useState();
    const [selectedValue3,setSelecyedValue3]=useState();
    var arr=main;
    const changeHandler1=(val)=>{

        if(selectedValue)
        {
            selectedValue.selected=false
            //console.log(selectedValue)
        }

        val.selected=true;
        //console.log(val);
        setSelecyedValue(val);
    }
    const changeHandler2=(val2)=>{

        if(selectedValue2)
        {
            selectedValue2.selected=false
        }

        val2.selected=true;
        setSelecyedValue2(val2);
    }
    const changeHandler3=(val3)=>{
        console.log(val3);

        if(selectedValue3)
        {
            selectedValue3.selected=false
        }

        val3.selected=true;
        setSelecyedValue3(val3);
    }

  return (
    <View>
        <View style={{ marginTop: 50 }} />
            <Dropdown
                style={styles.dropdown}
                data={arr}  
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select Question..."
                onChange={changeHandler1}
                selectedTextStyle={{ color: 'grey', height: 50 }}
                renderItem={(item)=>(
                    (item.selected===false && <View style={{borderBottomWidth: 1, padding: 15}}>
                    <Text>{item.label}</Text>
                    </View>)
                )}
            />     
                    <View style={{ marginTop: 50 }} />
            <Dropdown
                style={styles.dropdown}
                data={arr}  
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select Question..."
                onChange={changeHandler2}
                selectedTextStyle={{ color: 'grey', height: 50 }}
                renderItem={(item)=>(
                    (item.selected===false && <View style={{borderBottomWidth: 1, padding: 15}}>
                    <Text>{item.label}</Text>
                    </View>)
                )}
            />  
                    <View style={{ marginTop: 50 }} />
            <Dropdown
                style={styles.dropdown}
                data={arr}  
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select Question..."
                onChange={changeHandler3}
                selectedTextStyle={{ color: 'grey', height: 50 }}
                renderItem={(item)=>(
                    (item.selected===false && <View style={{borderBottomWidth: 1, padding: 15}}>
                    <Text>{item.label}</Text>
                    </View>)
                )}
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

export default Demo2