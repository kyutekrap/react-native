import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import { fontSize } from '../../global'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Button from '../../component/button'
import Input from '../../component/input'
import Title from '../../component/title'


const Recover = ({  }) => {

  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Decrease the remaining time by 1 second
      setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    // Clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  // Convert remaining time to minutes and seconds
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  const [buttonTxt, setButtonTxt] = useState("GET EMAIL")

  useEffect(() => {
    if (remainingTime === 0) {
      setButtonTxt('GET EMAIL')
    }
  }, [])

  const sendEmail = () => {
    if (buttonTxt === "EMAIL SENT") {
      return
    }
    setRemainingTime(180)
    setButtonTxt('EMAIL SENT')
  }

  return (
    <>
      <View style={style.top_section}>
        <Title title='Recover' />

        <Input placeholder='Email' maxLength={90} />

      </View>
      <View style={style.horizontalLayout}>
        <View style={style.innerHLayout}>
          <Icon name="access-time" color={'black'} size={20} />
          <Text style={style.timer}>Time left to next resend</Text>
        </View>
        <Text style={style.timer}>{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</Text>
      </View>

      <Button title={buttonTxt} bgColor={(buttonTxt === "GET EMAIL") ? "black" : "gray"} color='white' onPress={sendEmail} marginBottom={20} />
    </>
  )
}

export default Recover

const style = StyleSheet.create({
  top_section: {
      flex: 1,
  },
  horizontalLayout: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
      marginTop: 20
  },
  innerHLayout: {
      flexDirection: 'row',
  },
  timer: {
      color: 'black',
      fontSize: fontSize(0.6),
      marginStart: 5
  },
  small: {
      color: 'black',
      fontSize: fontSize(0.6),
      marginTop: 20
  }
})
