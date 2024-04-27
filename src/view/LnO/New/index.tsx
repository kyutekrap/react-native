import React, { useState } from 'react'
import { View, Text, Modal, FlatList } from 'react-native'
import { StyleSheet } from 'react-native'
import { fontSize } from '../../../global'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Button from '../../../component/button'
import Input from '../../../component/input'
import { LnoNewPost, LnoNewGet, LnoIndexGet } from '../../../interface'
import { LnoNewService } from '../../../services'
import Alert from '../../../component/alert'
import { currentTimestamp, validateForm } from '../../../global'
import { getUsername } from '../../../storage/global'
import strings from '../../../strings/LnO/New'
import { useTheme } from '../../../theme'
import Label from '../../../component/label'
import Subtitle from '../../../component/subtitle'


const LnO_New = ({ navigation, route }) => {

  const theme = useTheme()

  const [active, setActive] = useState(strings.acquaintance)
  const [modal, setModal] = useState(false)
  const options = [strings.acquaintance, strings.friend, strings.fwb, strings.exclusive, strings.brokeUp]

  const [username] = useState(getUsername())

  const [payload, setPayload] = useState<LnoNewPost>({
    name: '',
    short_desc: '',
    stage: strings.acquaintance,
    created_by: username
  })

  const [lead] = useState<LnoIndexGet>({
    lead_id: '',
    name: '',
    short_desc: '',
    stage: '',
    created_on: currentTimestamp(),
    updated_on: '',
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
    setModal(false)
    setPayload((prevPayload) => ({
      ...prevPayload,
      stage: item,
    }));
  }

  const newHandler = () => {
    setPayload((prevPayload) => ({
      ...prevPayload,
      created_by: route.params
    }));
    if (validateForm(payload)) {
      newPush()
    }
  }

  const [newDialog, setNewDialog] = useState('none')
  const newPush = async () => {
    LnoNewService(payload)
    .then((data: LnoNewGet | null) => {
      if (data !== null) {
        if (data.success) {
          lead.name = payload.name
          lead.short_desc = payload.short_desc
          lead.stage = payload.stage
          lead.lead_id = data.lead_id
          setNewDialog('flex')
        }
      }
    })
  }

  return (
    <>
      <Alert display={newDialog} title={strings.createdLead} onYes={() => navigation.navigate('LnO_Item', lead)} />

      <ScrollView style={style.container}>
        <Subtitle subtitle={strings.newLead} />

        <Label text={strings.name} />
        <Input placeholder={strings.name} maxLength={60} onChangeText={inputHandler('name')} />

        <Label text={strings.shortDesc} />
        <Input placeholder={strings.shortDesc} maxLength={120} onChangeText={inputHandler('short_desc')} />

        <Label text={strings.stage} />
        <TouchableOpacity onPress={() => setModal(true)}>
          <Input editable={false} value={active} />
        </TouchableOpacity>
        <Modal
          visible={modal}
          transparent={true}
        >
          <View style={style.modal_container}>
            <View style={[style.modal, {backgroundColor: theme.colors.primary}]}>
              <FlatList
                  data={options}
                  renderItem={({ item }) => (
                    <Text style={[style.option, {color: theme.colors.secondary}]} 
                      onPress={() => selectHandler(item)}>{item}</Text>
                  )}
                  keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </Modal>

        <Button title={strings.create} color={theme.colors.primary} bgColor={theme.colors.secondary} 
          onPress={newHandler} marginTop={20} marginBottom={20} flex={1} />
      </ScrollView>
    </>
  )
}

export default LnO_New

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
});