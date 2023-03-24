import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const Demo3 = () => {

    const [array,setArray]= useState([]);

    const ApiArray = [
        {
            "qid": 1,
            "questions": "What city were you born in?"
        },
        {
            "qid": 2,
            "questions": "What is your oldest sibling’s middle name?"
        },
        {
            "qid": 3,
            "questions": "What was the make and model of your first car?"
        },
        {
            "qid": 4,
            "questions": "In what city or town did your parents meet?"
        },
        {
            "qid": 5,
            "questions": "What was your childhood nickname?"
        },
        {
            "qid": 6,
            "questions": "What is the name of your favorite childhood friend?"
        },
        {
            "qid": 7,
            "questions": "What school did you attend for sixth grade?"
        },
        {
            "qid": 8,
            "questions": "In what city does your nearest sibling live?"
        },
        {
            "qid": 9,
            "questions": "In what city or town was your first job?"
        },
        {
            "qid": 10,
            "questions": "What was your favorite place to visit as a child?"
        },
        {
            "qid": 11,
            "questions": "What is the country of your ultimate dream vacation?"
        },
        {
            "qid": 12,
            "questions": "What is the name of your favorite childhood teacher?"
        },
        {
            "qid": 13,
            "questions": "What was your dream job as a child?"
        },
        {
            "qid": 14,
            "questions": "Who was your childhood hero?"
        },
        {
            "qid": 15,
            "questions": "What is the name, breed, and color of current pet?"
        },
        {
            "qid": 16,
            "questions": "What year did you graduate from High School?"
        }
    ]

    async function api() {
        fetch('https://crudcrud.com/api/2d424f153983477296bce0c7fd68bba3/que', {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify({
                questions: ApiArray
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => { console.log(err) })
    }


    const getData=()=>{
        const Data=fetch('https://crudcrud.com/api/95ff1c1973a74786a3d547e328755549/question')
        .then(response => response.json())
        .then(data => setArray(data))
    }

    // useEffect(()=>{
    //     const Data=fetch('https://crudcrud.com/api/95ff1c1973a74786a3d547e328755549/question')
    //     .then(response => response.json())
    //     .then(data=>{
    //         data[0].questions.map(item=>item.selected=false)
    //         console.log(data);
    //         setArray(data);
    //     })
        // .then(data=>console.log(data));
    // },[])

    return (
        <View>
            <Text>Demo3</Text>
            <Button onPress={api} title='Click me' />
            <View>
                <Button onPress={getData} title='Get Data' />
            </View>
        </View>
    )
}

export default Demo3