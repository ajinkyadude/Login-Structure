import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
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


const DropdownComponent = () => {

  const [dis1,setDis1]=useState(false);
  const [dis2,setDis2]=useState(false);

  const [txtInput1,setTxtInput1]=useState(true);
  const [txtInput2,setTxtInput2]=useState(true);


  const [farray,setFarray]=useState(main);
  const [sarray,setSarray]=useState(main);
  const [tarray,setTarray]=useState(main);

  const [firstEdit,setFirstEdit]=useState(false);
  const [secondEdit,setSecondEdit]=useState(false);
  const [thirdEdit,setThirdEdit]=useState(false);


  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const [value2, setValue2] = useState("");
  const [isFocus2, setIsFocus2] = useState(false);

  const [value3, setValue3] = useState("");
  const [isFocus3, setIsFocus3] = useState(false);

  const [ans1, setAns1] = useState("");
  const [ans2, setAns2] = useState("");
  const [ans3, setAns3] = useState("");


  const submitHandler = () => {
    // console.log("Question 1 : " + value + "Ans : " + ans1);
    // console.log("Question 2 : " + value2 + "Ans : " + ans2);
    // console.log("Question 3 : " + value3 + "Ans : " + ans3);
    // setDis(true)

  }
  const firstChange = (sel,type) => {
    setValue(sel.value);
    setIsFocus(false);
    setFirstEdit(true);

    const second=main.filter((item)=> item.value!=sel.value);
  
    if(value2!=="")
    {
      const array2=second.filter((item)=>item.value!=value2)

      setTarray(array2);
    }
    else{
      setTarray(second);
    }





    if(value3!=="")
    {
      const array3=second.filter((item)=>item.value!=value3)
      setSarray(array3);
    }
    else{
      setSarray(second)
    }
  }

  const secondChange = (sel2) => {
    setValue2(sel2.value);
    setIsFocus2(false);
    setSecondEdit(true);

    if(ans1!=="")
    {
      setDis1(true);
      setTxtInput1(false);
    }

    const third=sarray.filter((item)=> item.value!=sel2.value);
    //setTarray(third);
    if(value!=="")
    {
      const array=third.filter((item)=>item.value!=value)

      setTarray(array);
    }
    else{
      setTarray(third);
    }






    if(value3!=="" && ans1==="")
    {
      const array3=third.filter((item)=>item.value!=value3)
      setFarray(array3);
    }
    else{
      setFarray(third)
    }
  }
  const thirdChange=(sel3)=>{
      setValue3(sel3.label);
      setIsFocus3(false);
      setThirdEdit(true);

      if(ans2!=="")
      {
        setDis2(true);
        setTxtInput2(false);
      }


      const first=sarray.filter((item)=> item.value!=sel3.value);
      //setTarray(third);
      if(value2!=="")
      {
        const array=first.filter((item)=>item.value!=value2)
        setSarray(array);

      }
      else{
        setSarray(first);
      }



      if(value!=="" && ans2 === "")
      {
        const array3=first.filter((item)=>item.value!=value)
        setFarray(array3);
      }
      else{
        setFarray(first)
      }
  
    
  }

  const focusHandle1=()=>{

    setIsFocus(true)
  }

  return (
    <View style={styles.container}>
      <View styl={styles.drop}>
        <Dropdown
          style={[isFocus && { borderColor: 'blue' },styles.dropdown ]}
          data={farray}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          //value={value}
          onFocus={focusHandle1}
          onBlur={() => setIsFocus(false)}
          onChange={(val)=>{firstChange(val,"set1"),setValue(val.value)}}
          selectedTextStyle={{ color: 'red', height: 50 }}
          disable={dis1}
        />
        <TextInput editable={txtInput1} placeholder='Enter ans...' style={ firstEdit ? styles.input : styles.editInput} onChangeText={(val) => { setAns1(val) }} />
      </View>
      <View style={styles.drop}>
        <Dropdown
          style={[styles.dropdown, isFocus2 && { borderColor: 'blue' }]}
          data={sarray}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus2 ? 'Select Question' : '...'}
          //value={value2}
          onFocus={() => setIsFocus2(true)}
          onBlur={() => setIsFocus2(false)}
          onChange={secondChange}
          selectedTextStyle={{ height: 50 }}
          disable={dis2}
        />
        <TextInput editable={txtInput2} placeholder='Enter ans...' style={secondEdit ? styles.input : styles.editInput} onChangeText={(val2) => { setAns2(val2) }} />
      </View>
      <View style={styles.drop}>
        <Dropdown
          style={[styles.dropdown, isFocus3 && { borderColor: 'blue' }]}
          data={tarray}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus3 ? 'Select Question' : '...'}
          //value={value3}
          onFocus={() => setIsFocus3(true)}
          onBlur={() => setIsFocus3(false)}
          onChange={thirdChange}
          selectedTextStyle={{ height: 50 }}

        />
        <TextInput editable={thirdEdit} placeholder='Enter ans...' style={thirdEdit ? styles.input : styles.editInput} onChangeText={(val3) => { setAns3(val3) }} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button title='Submit' onPress={submitHandler} />
      </View>
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    marginTop: 50
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderBottomWidth: 1,
    paddingHorizontal: 8,
  },

  drop: {
    marginTop: 70
  },
  input: {
    borderWidth: 2,
    marginTop: 20,
    borderRadius: 10,
    paddingHorizontal: 10
  },
  editInput:{
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 10,
    paddingHorizontal: 10
  }
});