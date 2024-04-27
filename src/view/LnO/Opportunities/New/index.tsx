import React, { useState, useEffect } from 'react'
import { View, Text, Modal, FlatList } from 'react-native'
import { StyleSheet } from 'react-native'
import { fontSize } from '../../../../global'
import Input from '../../../../component/input'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import DateTimePicker from '@react-native-community/datetimepicker'
import Button from '../../../../component/button'
import { LnoGetContactsGet, LnoGetContactsPost, LnoNewOppoPost } from '../../../../interface'
import { LnoGetContactsService, LnoNewOppoService } from '../../../../services'
import Alert from '../../../../component/alert'
import { useSelector } from 'react-redux'
import { validateForm } from '../../../../global'
import strings from '../../../../strings/LnO/Opportunities/New'
import { useTheme } from '../../../../theme'
import Label from '../../../../component/label'
import Subtitle from '../../../../component/subtitle'

const Oppo_New = ({ navigation, route }) => {

  const theme = useTheme()

  const username = useSelector((state: any) => state.username)

  const [options, setOptions] = useState<LnoGetContactsGet[]>([])

  useEffect(() => {
    const payload: LnoGetContactsPost = {
      username: username
    }
    LnoGetContactsService(payload)
    .then((data: any) => {
      setOptions(data)
    })
  }, [username])

  const [active, setActive] = useState('Text Message')
  const [dateModal, setDateModal] = useState(false);
  const [selectModal, setSelectModal] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const handleDateChange = (event, date) => {
    if (date !== undefined) {
      setSelectedDate(date)
      setDateModal(false)
      payload.date = date
    }
  };
  const showDatePicker = () => {
    return (
      <DateTimePicker
        value={selectedDate}
        mode="date"
        display="default"
        onChange={handleDateChange}
      />
    );
  };

  const [payload, setPayload] = useState<LnoNewOppoPost>({
    date: new Date(),
    contact: 0,
    short_desc: '',
    item: route.params.lead_id
  })

  const inputHandler = (key: string) => {
    return (text: string) => {
      setPayload((prevPayload) => ({
        ...prevPayload,
        [key]: text,
      }));
    }
  }

  const selectHandler = (item: string) => {
    setActive(item)
    setSelectModal(false)
    const foundItem = options.find((ele) => ele.name === item)
    const contact = foundItem ? parseInt(foundItem.id) : 0
    payload.contact = contact
  }

  const newHandler = () => {
    if (payload.contact === 0) {
      const foundItem = options.find((ele) => ele.name === 'Text Message')
      const contact = foundItem ? parseInt(foundItem.id) : 0
      payload.contact = contact
    }
    if (validateForm(payload)) {
      newPush()
    }
  }
  const [createdDialog, setCreatedDialog] = useState('none')
  const newPush = async() => {
    const result = LnoNewOppoService(payload)
    if (await result) {
      setCreatedDialog('flex')
    }
  }

  return (
    <>
      <Alert title={strings.createdNew} display={createdDialog} onYes={() => navigation.navigate('LnO_Item', route.params)} />

      <ScrollView>
        <View style={style.container}>
          <Subtitle subtitle={strings.newOppo} />

          <Label text={strings.lead} />
          <Input editable={false} value={route.params.name} />

          <Label text={strings.date} />
          <TouchableOpacity onPress={() => setDateModal(true)} >
            <Input editable={false} value={selectedDate.toDateString()} />
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={dateModal}
            onRequestClose={() => setDateModal(false)}>
            <View style={style.modal_container}>
              {showDatePicker()}
            </View>
          </Modal>
          
          <Label text={strings.shortDesc} />
          <Input placeholder={strings.shortDesc} maxLength={140} onChangeText={inputHandler('short_desc')} />

          <Label text={strings.contactType} />
          <TouchableOpacity onPress={() => setSelectModal(true)}>
            <Input value={active} editable={false} />
          </TouchableOpacity>

          <Modal
            visible={selectModal}
            transparent={true}
          >
            <View style={style.modal_container}>
              <View style={[style.modal, {backgroundColor: theme.colors.primary}]}>
                <FlatList
                    data={options.map((item: { name: string; }) => item.name)}
                    renderItem={({ item }) => (
                      <Text style={[style.option, {color: theme.colors.secondary}]} onPress={() => selectHandler(item)}>{item}</Text>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
              </View>
            </View>
          </Modal>
        </View>

        <Button title={strings.create} color={theme.colors.primary} bgColor={theme.colors.secondary} 
          onPress={newHandler} marginTop={20} marginBottom={20} />
      </ScrollView>
    </>
  )
}

export default Oppo_New

const style = StyleSheet.create({
  container: {
      flex: 1
  },
  modal_container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
      width: '100%',
      elevation: 5,
      paddingVertical: 10
  },
  option: {
      fontSize: fontSize(0.7),
      padding: fontSize(0.5),
      marginVertical: 10
  }
})
