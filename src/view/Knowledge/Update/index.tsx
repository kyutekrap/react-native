import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Modal } from 'react-native'
import { StyleSheet } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Button from '../../../component/button'
import Input from '../../../component/input'
import SimpleMenu from '../../../component/simple_menu'
import Subtitle from '../../../component/subtitle'
import Alert from '../../../component/alert'
import { KnowledgeUpdatePost } from '../../../interface'
import { KnowledgeUpdateService } from '../../../services'
import { validateForm } from '../../../global'
import strings from '../../../strings/Knowledge/Update'
import Label from '../../../component/label'
import { useTheme } from '../../../theme'
import Textarea from '../../../component/textarea'

const Knowledge_Update = ({ navigation, route }) => {

  const theme = useTheme()

  const [active, setActive] = useState(route.params[0].category)
  const [modal, setModal] = useState(false)

  const [options, setOptions] = useState<string[]>([])

  useEffect(() => {
    route.params[2].map((param: string) => {
      options.push(param)
    })
    options.push("Others")
    setOptions(options.filter(item => item !== strings.all))
  }, [])

  const selectMenuHandler = (item: string) => {
    setActive(item)
    setModal(false)
    setPayload((prevPayload) => ({
      ...prevPayload,
      category: item,
    }));
  };

  const [payload, setPayload] = useState<KnowledgeUpdatePost>(
    {
      name: route.params[0].title,
      short_desc: route.params[1].short_desc,
      body: route.params[0].body,
      category: route.params[0].category,
      item: route.params[1].id
    }
  )

  const [updateDialog, setUpdateDialog] = useState('none')
  const updateHandler = () => {
    if (payload !== null && payload !== undefined) {
      if (validateForm(payload)) {
        updatePush(payload)
      }
    }
  }
  const updatePush = async (payload: KnowledgeUpdatePost) => {
    const result = KnowledgeUpdateService(payload)
    if (await result) {
      setUpdateDialog('flex')
    }
  }

  const inputHandler = (key: string) => {
    return (text: string) => {
      setPayload((prevPayload) => ({
        ...prevPayload,
        [key]: text,
      }))
    }
  }

  return (
    <>
      <Alert display={updateDialog} title={strings.updateComplete} onYes={() => navigation.navigate("Knowledge_Item", [route.params[1], route.params[2]])} />

      <ScrollView>
          <Subtitle subtitle={strings.editArticle} />

          <Label text={strings.title} />
          <Input placeholder={strings.title} maxLength={60} value={route.params[0].title} 
          onChangeText={inputHandler('name')} />

          <Label text={strings.shortDesc} />
          <Input placeholder={strings.shortDesc} maxLength={120} value={route.params[1].short_desc}
          onChangeText={inputHandler('short_desc')} />

          <Label text={strings.articleBody} />
          <Textarea placeholder={strings.startWriting} onChangeText={() => inputHandler('body')} />
          
          <Label text={strings.category} />
          <TouchableOpacity onPress={() => setModal(true)}>
            <Input value={active} editable={false} />
          </TouchableOpacity>

          { active === strings.others ? (
            <Input placeholder={strings.category} maxLength={20} onChangeText={inputHandler('category')} />
          ) : null }

          <Modal visible={modal} >
            <View style={[style.modal, {backgroundColor: theme.colors.secondary}]}>
              <Subtitle subtitle={strings.categoryBig} />
              <SimpleMenu data={options} onPress={selectMenuHandler} />
            </View>
          </Modal>

        <Button title={strings.update} color={theme.colors.primary} bgColor={theme.colors.secondary}
          onPress={updateHandler} marginTop={20} marginBottom={20} />
      </ScrollView>
    </>
  )
}

export default Knowledge_Update

const style = StyleSheet.create({
  modal: {
      width: '100%',
      elevation: 5,
      padding: 20,
      height: '100%',
      overflow: 'scroll'
  },
})
