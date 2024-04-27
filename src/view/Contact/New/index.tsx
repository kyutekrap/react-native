import React, { useState } from 'react'
import { View, Text, Modal, FlatList } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Button from '../../../component/button'
import Input from '../../../component/input'
import { ContactNewPost } from '../../../interface'
import { ContactNewService } from '../../../services'
import Alert from '../../../component/alert'
import { getUsername } from '../../../storage/global'
import { validateForm } from '../../../global'
import strings from '../../../strings/Contact/New'
import { StyleSheet } from 'react-native';
import { fontSize } from '../../../global'
import { useTheme } from '../../../theme'
import Label from '../../../component/label'
import Subtitle from '../../../component/subtitle'

const Contact_New = ({ navigation }) => {

  const theme = useTheme()

  const [active, setActive] = useState('True')
  const [modal, setModal] = useState(false)
  const options = {'True': 1, 'False': 0}

  const [username] = useState(getUsername())

  const [payload, setPayload] = useState<ContactNewPost>({
    name: '',
    short_desc: '',
    active: 1,
    created_by: username
  })

  const inputHandler = (key: string) => {
    return (text: string) => {
      setPayload((prevPayload) => ({
        ...prevPayload,
        [key]: text,
      }));
    }
  }

  const newHandler = () => {
    setPayload((prevPayload) => ({
      ...prevPayload,
      'active': active === 'True' ? 1 : 0
    }));
    if (validateForm(payload)) {
      newPush()
    }
  }

  const [updateDialog, setUpdateDialog] = useState('none')

  const newPush = async () => {
    const result = ContactNewService(payload)
    if (await result) {
      setUpdateDialog('flex')
    }
  }

  return (
    <>
      <Alert display={updateDialog} title={strings.createdMethod} onYes={() => navigation.navigate('Contact')} />

      <ScrollView>
      <View style={style.container}>
        <Subtitle subtitle={strings.newContact} />

        <Label text={strings.name} />
        <Input placeholder={strings.name} maxLength={60} onChangeText={inputHandler('name')} />

        <Label text={strings.shortDesc} />
        <Input placeholder={strings.shortDesc} maxLength={120} onChangeText={inputHandler('short_desc')} />

        <Label text={strings.active} />
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
                  data={Object.keys(options)}
                  renderItem={({ item }) => (
                    <Text style={[style.option, {color: theme.colors.secondary}]} onPress={() => { setActive(item); setModal(false); }}>{item}</Text>
                  )}
                  keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </Modal>
      </View>
  
      <Button title={strings.create} color={theme.colors.primary} bgColor={theme.colors.secondary} onPress={newHandler} marginTop={20} marginBottom={20} />
      </ScrollView>
    </>
  );
};

export default Contact_New;

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
