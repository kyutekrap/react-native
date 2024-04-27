import React, { useState } from 'react'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Button from '../../component/button'
import Title from '../../component/title'
import { LnoIndexPost, LnoIndexGet } from '../../interface'
import { LnoMainService } from '../../services'
import { getUsername } from '../../storage/global'
import { useFocusEffect } from '@react-navigation/native'
import strings from '../../strings/LnO'
import { useTheme } from '../../theme'
import Card from '../../component/card'


const LnO = ({ navigation }) => {

  const theme = useTheme()

  const [username] = useState(getUsername())
  const [leads, setLeads] = useState<LnoIndexGet[]>([])

  useFocusEffect(
    React.useCallback(() => {
      if (leads.length > 0)
        return
      const payload: LnoIndexPost = {
        username: username
      }
      mainPush(payload)
    }, [])
  )
  
  const mainPush = async (payload: LnoIndexPost) => {
    LnoMainService(payload)
    .then((data: any) => {
      setLeads(data)
    })
  }

  const renderedItems = leads.map((lead, index) => (
    <Card key={index} onPress={() => navigation.navigate("LnO_Item", lead)} cardNumber={lead.lead_id}
      cardName={lead.name} cardShortDesc={lead.short_desc} />
  ))

  return (
    <>
      <ScrollView style={style.top_section}>
        <Title title='L&O' />
        {renderedItems}
      </ScrollView>

      <View style={{paddingVertical: 20}}>
        { username !== null && username !== undefined ? (
          <Button title={strings.new} color={theme.colors.primary} bgColor={theme.colors.secondary}
            onPress={() => navigation.navigate('LnO_New', username)} />
        ): null }
      </View>
    </>
  )
}

export default LnO;

const style = StyleSheet.create({
  top_section: {
      flex: 1
  },
})
