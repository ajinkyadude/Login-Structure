import { View, Text } from 'react-native'
import React from 'react'
import { Calendar } from 'react-native-calendars';

const Date = () => {
  return (
    <View>
      <Calendar style={{height: "40%", width: "100%"}}
        onDayPress={(date) => {
          //console.log(date)
          //setDisplay(false)
        }}
      />
    </View>
  )
}

export default Date