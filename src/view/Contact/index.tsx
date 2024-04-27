import React, {useState} from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Button from '../../component/button'
import Title from '../../component/title'
import { ContactIndexPost, ContactIndexGet } from '../../interface/contact'
import { ContactMainService } from '../../services/contact'
import { useSelector } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'
import strings from '../../strings/Contact'
import { StyleSheet } from 'react-native'
import { useTheme } from '../../theme'
import Card from '../../component/card'

const Contact = ({ navigation }) => {

  const username = useSelector((state: any) => state.username)

  const theme = useTheme()

  useFocusEffect(
    React.useCallback(() => {
      const payload: ContactIndexPost = {
        username: username
      }
      mainPush(payload)
    }, [])
  )

  const [contacts, setContacts] = useState<ContactIndexGet[]>([])
  const mainPush = async (payload: ContactIndexPost) => {
    ContactMainService(payload)
    .then((data: any) => {
      setContacts(data)
    })
  }

  const renderedItems = 
    contacts.map((contact, index) => {
      return (
        <Card key={index} onPress={() => navigation.navigate('Contact_Item', contact)}
          cardNumber={contact.contact_id} cardName={contact.name} cardShortDesc={contact.short_desc} />
      )})

  return (
    <>
      <ScrollView style={style.top_section}>
        <Title title={strings.contactMethod} />
        {renderedItems}
      </ScrollView>

      <Button title={strings.new} color={theme.colors.primary} bgColor={theme.colors.secondary} 
        marginTop={20} marginBottom={20} onPress={() => navigation.navigate('Contact_New')} />
    </>
  )
}

export default Contact

const style = StyleSheet.create({
  top_section: {
      flex: 1
  },
});