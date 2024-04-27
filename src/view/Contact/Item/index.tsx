import React, { useState } from 'react';
import { View, Text, Modal, FlatList, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../../../component/button';
import Input from '../../../component/input';
import { ContactUpdatePost } from '../../../interface';
import { ContactUpdateService } from '../../../services';
import Alert from '../../../component/alert';
import { validateForm } from '../../../global'
import strings from '../../../strings/Contact/Item/index'
import { fontSize } from '../../../global'
import { useTheme } from '../../../theme'
import Label from '../../../component/label'

const Contact_Item = ({ navigation, route }) => { 
  const encodeOptions = {1: 'True', 0: 'False'}
  const index = route.params.active as keyof typeof encodeOptions

  const theme = useTheme()

  const [active, setActive] = useState(encodeOptions[index])
  const [modal, setModal] = useState(false)

  const [payload, setPayload] = useState<ContactUpdatePost>({
    name: route.params.name,
    short_desc: route.params.short_desc,
    active: route.params.active,
    id: route.params.contact_id
  })

  const inputHandler = (key: string) => {
    return (text: string) => {
      setPayload((prevPayload) => ({
        ...prevPayload,
        [key]: text,
      }));
    }
  }

  function convertStringToNumber(str: string) {
    return str === 'True' ? 1 : 0;
  }

  const selectHandler = (item: string) => {
    setActive(item)
    setModal(false)
    setPayload((prevPayload) => ({
      ...prevPayload,
      'active': convertStringToNumber(item)
    }));
  }

  const [updateDialog, setUpdateDialog] = useState('none')

  const updateHandler = () => {
    if (validateForm(payload)) {
      updatePush(payload)
    }
  }
  const updatePush = async (payload: ContactUpdatePost) => {
    const result = ContactUpdateService(payload)
    if (await result) {
      setUpdateDialog('flex')
    }
  }

  return (
    <>
      <Alert display={updateDialog} title={strings.updateComplete} onYes={() => navigation.navigate('Contact')} />

      <ScrollView>
      <View style={style.container}>
        <Text style={[style.small_title, {color: theme.colors.secondary}]}>{strings.contactMethod}</Text>

        <Label text={strings.name} />
        <Input placeholder={strings.name} maxLength={60} value={route.params.name} onChangeText={inputHandler('name')} />

        <Label text={strings.shortDesc} />
        <Input placeholder={strings.shortDesc} maxLength={120} value={route.params.short_desc} onChangeText={inputHandler('short_desc')} />

        <Label text={strings.active} />
        <TouchableOpacity onPress={() => setModal(true)}>
          <Input editable={false} value={active} />
        </TouchableOpacity>

        <Label text={strings.createdBy} />
        { route.params.created_by === 'system' ? (
          <Input editable={false} value={strings.system} />
        ) : (
          <Input editable={false} value={strings.user} />
        )}

        <Modal
          visible={modal}
          transparent={true}>
          <View style={style.modal_container}>
            <View style={[style.modal, {backgroundColor: theme.colors.primary}]}>
              <FlatList
                  data={Object.values(encodeOptions)}
                  renderItem={({ item }) => (
                    <Text style={[style.option, {color: theme.colors.secondary}]} onPress={() => selectHandler(item)}>{item}</Text>
                  )}
                  keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </Modal>
      </View>

      <View style={{backgroundColor: theme.colors.primary, paddingVertical: 20}}>
        { route.params.created_by !== 'system' ? (
          <Button title={strings.update} onPress={updateHandler} bgColor={theme.colors.secondary} color={theme.colors.primary} />
        ) : null }
      </View>

    </ScrollView>

    </>
  );
};

export default Contact_Item;

const style = StyleSheet.create({
  container: {
      flex: 1
  },
  small_title: {
      fontSize: fontSize(0.6),
      marginBottom: 40,
      fontWeight: '600',
      textAlign: 'center'
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