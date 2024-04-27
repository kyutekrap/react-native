import React, { useState } from 'react'
import { View, Text, Modal, FlatList } from 'react-native'
import { StyleSheet } from 'react-native'
import { fontSize } from '../../../global'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Button from '../../../component/button'
import Input from '../../../component/input'
import { LnoUpdatePost } from '../../../interface/lno'
import { LnoUpdateService } from '../../../services'
import Alert from '../../../component/alert'
import { validateForm } from '../../../global'
import strings from '../../../strings/LnO/Update'
import { useTheme } from '../../../theme'
import Label from '../../../component/label'
import Subtitle from '../../../component/subtitle'


const LnO_Update = ({ navigation, route }) => {

  const theme = useTheme()

  const [active, setActive] = useState(route.params.stage)
  const [modal, setModal] = useState(false)
  const options = [strings.acquaintance, strings.friend, strings.fwb, strings.exclusive, strings.brokeUp]

  const [updateDialog, setUpdateDialog] = useState('none')

  const [payload, setPayload] = useState<LnoUpdatePost>({
    name: route.params.name,
    short_desc: route.params.short_desc,
    stage: route.params.stage
  })

  const inputHandler = (key: string) => {
    return (text: string) => {
        setPayload((prevPayload) => ({
          ...prevPayload,
          [key]: text,
        }));
      }
  }

  const updateHandler = () => {
    if (validateForm(payload)) {
      updatePush()
    }
  }
  const updatePush = async () => {
    const result = LnoUpdateService(payload)
    if (await result) {
        setUpdateDialog('flex')
    }
  }

  return (
    <>
    <Alert title={strings.updateComplete} display={updateDialog} onYes={() => navigation.navigate('LnO_Item', route.params)} />

      <ScrollView>
        <View style={style.container}>
          <Subtitle subtitle={strings.updateLead} />

          <Label text={strings.name} />
          <Input placeholder={strings.name} maxLength={60} value={route.params.name} onChangeText={inputHandler('name')} />

          <Label text={strings.shortDesc} />
          <Input placeholder={strings.shortDesc} maxLength={120} value={route.params.short_desc} onChangeText={inputHandler('short_desc')} />

          <Label text={strings.active} />
          <TouchableOpacity onPress={() => setModal(true)}>
            <Input value={active} editable={false} />
          </TouchableOpacity>
          
          <Modal
            visible={modal}
            transparent={true}>
            <View style={style.modal_container}>
              <View style={[style.modal, {backgroundColor: theme.colors.secondary}]}>
                <FlatList
                    data={options}
                    renderItem={({ item }) => (
                      <Text style={[style.option, {color: theme.colors.secondary}]} onPress={() => { setActive(item); setModal(false); }}>{item}</Text>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
              </View>
            </View>
          </Modal>
        </View>
        
        <Button title={strings.update} color={theme.colors.primary} bgColor={theme.colors.secondary}
          onPress={updateHandler} marginTop={20} marginBottom={20} />
      </ScrollView>
    </>
  )
}

export default LnO_Update

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
})
