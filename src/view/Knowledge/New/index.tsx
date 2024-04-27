import React, { useState, useEffect } from 'react'
import { View, TextInput, Modal } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Button from '../../../component/button'
import Input from '../../../component/input'
import SimpleMenu from '../../../component/simple_menu'
import Subtitle from '../../../component/subtitle'
import { KnowledgeNewPost, KnowledgeNewGet } from '../../../interface'
import { KnowledgeNewService } from '../../../services'
import { getUsername } from '../../../storage/global'
import { validateForm } from '../../../global'
import strings from '../../../strings/Knowledge/New'
import { StyleSheet } from 'react-native'
import { useTheme } from '../../../theme'
import Label from '../../../component/label'
import Textarea from '../../../component/textarea'


const Knowledge_New = ({ navigation, route }) => {

  const theme = useTheme()

  const [modal, setModal] = useState(false)
  const [options, setOptions] = useState<string[]>([])

  useEffect(() => {
    route.params.map((param: string) => {
      options.push(param)
    })
    options.push(strings.others)
    setOptions(options.filter(item => item !== strings.all))
  }, [])
  
  const [active, setActive] = useState(strings.others)

  const selectMenuHandler = (item: string) => {
    setActive(item)
    setModal(false)
    setPayload((prevPayload) => ({
      ...prevPayload,
      category: item,
    }));
  };

  const [username] = useState(getUsername())

  const [payload, setPayload] = useState<KnowledgeNewPost>({
    title: '',
    short_desc: '',
    body: '',
    category: '',
    username: username
  })

  const [article] = useState<any>({
    title: '',
    created_on: 0,
    updated_on: '',
    author: '',
    short_desc: '',
    category: '',
    user_like: false,
    comments: 0,
    likes: 0,
    id: ''
  })
  
  const createHandler = async () => {
    if (validateForm(payload)) {
      KnowledgeNewService(payload)
      .then((result: KnowledgeNewGet | boolean) => {
        if (typeof result !== 'boolean') {
          if (result.success) {
            article.title = payload.title 
            article.created_on = result.created_on 
            article.author = result.author 
            article.short_desc = payload.short_desc 
            article.category = payload.category 
            article.id = result.id 
            navigation.navigate("Knowledge_Item", [article, route.params])
          }
        }
      })
    }
  }

  const inputHandler = (key: string) => {
    return (text: string) => {
      setPayload((prevPayload) => ({
        ...prevPayload,
        [key]: text,
      }));
    }
  }

  return (
      <ScrollView>
        <Subtitle subtitle={strings.newArticle} />

        <Label text={strings.title} />
        <Input placeholder={strings.title} maxLength={60} onChangeText={inputHandler('title')} />

        <Label text={strings.shortDesc} />
        <Input placeholder={strings.shortDesc} maxLength={120} onChangeText={inputHandler('short_desc')} />

        <Label text={strings.articleBody} />
        <Textarea placeholder={strings.startWriting} onChangeText={() => inputHandler('body')} />
        
        <Label text={strings.category} />
        <TouchableOpacity onPress={() => setModal(true)}>
          <Input editable={false} value={active} />
        </TouchableOpacity>

        { active === strings.others ? (
          <Input placeholder={strings.category} maxLength={20} onChangeText={inputHandler('category')} />
        ) : null }

        <Modal visible={modal} >
          <View style={[style.modal, {backgroundColor: theme.colors.primary}]}>
            <Subtitle subtitle={strings.categoryBig} />
            <SimpleMenu data={options} onPress={selectMenuHandler} />
          </View>
        </Modal>

        <Button title={strings.create} color={theme.colors.primary} bgColor={theme.colors.secondary}
          onPress={createHandler} marginTop={20} marginBottom={20} flex={1} />
      </ScrollView>
  )
}

export default Knowledge_New

const style = StyleSheet.create({
  modal: {
      width: '100%',
      elevation: 5,
      padding: 20,
      height: '100%',
      overflow: 'scroll'
  },
})
