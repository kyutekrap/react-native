import React, {useEffect, useState} from 'react'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Button from '../../../component/button'
import { LnoOppoInfoGet } from '../../../interface'
import strings from '../../../strings/LnO/Opportunities'
import { useTheme } from '../../../theme'
import Card from '../../../component/card'
import Subtitle from '../../../component/subtitle'


const Opportunities = ({ navigation, route }) => {

  const theme = useTheme()

  const [oppo, setOppo] = useState<LnoOppoInfoGet[]>([])
  useEffect(() => {
    setOppo(route.params[0])
  }, [])

  const renderedItems = oppo.map((op, index) => {
    return (
      <Card key={index} onPress={() => navigation.navigate("Oppo_Item", [op, route.params[1], route.params[0]])}
        cardNumber={op.oppo_id} cardName={op.contact} cardShortDesc={op.short_desc} />
    )})

  return (
    <>
      <ScrollView style={style.top_section}>
        <Subtitle subtitle={route.params[1].name} />
        {renderedItems}
      </ScrollView>

      <View style={{paddingVertical: 20}}>
        { route.params !== null && route.params !== undefined ? (
          <Button title={strings.new} color={theme.colors.primary} bgColor={theme.colors.secondary} 
            onPress={() => navigation.navigate('Oppo_New', route.params[1])} />
        ): null }
      </View>
    </>
  )
}

export default Opportunities

const style = StyleSheet.create({
  top_section: {
      flex: 1
  },
})
