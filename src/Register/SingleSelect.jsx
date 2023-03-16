import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';

const SingleSelect = () => {

    // const [value3, setValue3] = useState("");
    // const [isFocus3, setIsFocus3] = useState(false);

    const data2 = [
        { label: "Item 1", value: 1 },
        { label: "Item 2", value: 2 },
        { label: "Item 3", value: 3 },
        { label: "Item 4", value: 4 },
        { label: "Item 5", value: 5 },
    ];

    return (
        <View style={{marginTop: 20}}>
            <Dropdown 
            style={styles.dropdown}
            data={data2}
            onChange={(item)=>{
                //console.log(item)
            }}
            labelField="label"
            valueField="value"
            placeholder="Select Question.."
            maxHeight={300}
            />
        </View>
    )
}

export default SingleSelect

const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        borderColor: "#33FFE9",
        borderBottomWidth: 1,
        paddingHorizontal: 8,
    }
})