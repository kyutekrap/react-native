import React, { useState } from 'react'
import { View, Text, Modal, FlatList } from 'react-native'
import { StyleSheet } from 'react-native'
import { fontSize } from '../../../../global'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import DateTimePicker from '@react-native-community/datetimepicker'
import Button from '../../../../component/button'
import Input from '../../../../component/input'
import { LnoGetContactsPost, LnoGetContactsGet, LnoOppoUpdatePost, LnoOppoDeletePost } from '../../../../interface'
import { getUsername } from '../../../../storage/global'
import { LnoDeleteOppoService, LnoGetContactsService, LnoOppoUpdateService } from '../../../../services'
import Alert from '../../../../component/alert'
import { validateForm } from '../../../../global'
import { useFocusEffect } from '@react-navigation/native'
import strings from '../../../../strings/LnO/Opportunities/Item'
import Subtitle from '../../../../component/subtitle'
import Label from '../../../../component/label'
import { useTheme } from '../../../../theme'


const Oppo_Item = ({ navigation, route }) => {

  const theme = useTheme()
  
  const [username] = useState(getUsername())

  const [options, setOptions] = useState<LnoGetContactsGet[]>([])

  useFocusEffect(
    React.useCallback(() => {
      const payload: LnoGetContactsPost = {
        username: username
      }
      LnoGetContactsService(payload)
      .then((data: any) => {
        setOptions(data)
      })
    }, [])
 )

  const [active, setActive] = useState(route.params[0].contact)
  const [dateModal, setDateModal] = useState(false)
  const [selectModal, setSelectModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState('none')

  const date = route.params[0].date
  const [selectedDate, setSelectedDate] = useState(new Date(date))
  
  const handleDateChange = (event, date) => {
    if (date !== undefined) {
      setSelectedDate(date)
      setDateModal(false)
      setPayload((prevPayload) => ({
        ...prevPayload,
        'date': date,
      }))
    }
  }
  const showDatePicker = () => {
    return (
      <DateTimePicker
        value={selectedDate}
        mode="date"
        display="default"
        onChange={handleDateChange}
      />
    )
  }

  const [payload, setPayload] = useState<LnoOppoUpdatePost>({
    contact: 0,
    short_desc: route.params[0].short_desc,
    date: new Date(date),
    item: route.params[1].lead_id,
    id: route.params[0].oppo_id
  })

  const inputHandler = (key: string) => {
    return (text: string) => {
      setPayload((prevPayload) => ({
        ...prevPayload,
        [key]: text,
      }))
    }
  }

  const selectHandler = (item: string) => {
    setActive(item)
    setSelectModal(false)
    const foundItem = options.find(ele => ele.name === item)
    const foundId = foundItem ? parseInt(foundItem.id) : 0;
    setPayload((prevPayload) => ({
      ...prevPayload,
      contact: foundId,
    }));
  }

  const updateHandler = () => {
    if (payload.contact === 0) {
      const foundItem = options.find(ele => ele.name === active)
      const foundId = foundItem ? parseInt(foundItem.id) : 0
      payload['contact'] = foundId
    }
    if (validateForm(payload)) {
      updatePush()
    }
  }

  const [updateCompleteDialog, setUpdateCompleteDialog] = useState("none")
  const updatePush = async () => {
    const result = LnoOppoUpdateService(payload)
    if (await result) {
      setUpdateCompleteDialog('flex')
    }
  }

  const deleteHandler = () => {
    const payload: LnoOppoDeletePost = {
      item: route.params[1].lead_id
    }
    deletePush(payload)
  }
  const [deleteCompleteDialog, setDeleteCompleteDialog] = useState("none")
  const deletePush = async(payload: LnoOppoDeletePost) => {
    const result = LnoDeleteOppoService(payload)
    if (await result) {
      setDeleteCompleteDialog('flex')
    }
  }

  return (
    <>
      <Alert display={deleteCompleteDialog} title={strings.deleteComplete} onYes={() => navigation.navigate('LnO_Item', route.params[1])} />
      <Alert display={updateCompleteDialog} title={strings.updateComplete} onYes={() => setUpdateCompleteDialog('none')} />
      <Alert display={deleteModal} title={strings.deleteThis} onYes={deleteHandler} onNo={() => setDeleteModal('none')} />

      <ScrollView>
        <View style={style.container}>
          <Subtitle subtitle={strings.opportunity} />

          <Label text={strings.lead} />
          <Input value={route.params[1].name} editable={false} />

          <Label text={strings.date} />
          <TouchableOpacity onPress={() => setDateModal(true)}>
            <Input editable={false} value={selectedDate.toDateString()} />
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={dateModal}
            onRequestClose={() => setDateModal(false)}
          >
            <View style={style.modal_container}>
              {showDatePicker()}
            </View>
          </Modal>
          
          <Label text={strings.shortDesc} />
          <Input placeholder={strings.shortDesc} maxLength={120} value={route.params[0].short_desc} onChangeText={inputHandler('short_desc')} />

          <Label text={strings.contactType} />
          <TouchableOpacity onPress={() => setSelectModal(true)}>
            <Input editable={false} value={active} />
          </TouchableOpacity>

          <Modal
            visible={selectModal}
            transparent={true} >
            <View style={style.modal_container}>
              <View style={[style.modal, {backgroundColor: theme.colors.primary}]}>
                <FlatList
                    data={options.map((item: { name: string; }) => item.name)}
                    renderItem={({ item }) => (
                      <Text style={[style.option, {color: theme.colors.secondary}]} 
                        onPress={() => selectHandler(item)}>{item}</Text>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
              </View>
            </View>
          </Modal>
        </View>

        <View style={{paddingVertical: 20}}>
          <Button title={strings.update} color={theme.colors.secondary} bgColor={theme.colors.primary}
            onPress={updateHandler} marginBottom={10} />
          <Button title={strings.delete} color={theme.colors.primary} bgColor={theme.colors.secondary} 
            onPress={() => setDeleteModal('flex')} />
        </View>
      </ScrollView>
    </>
  )
}

export default Oppo_Item

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
  },
});