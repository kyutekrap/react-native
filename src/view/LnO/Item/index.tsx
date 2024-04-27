import React, { useState } from 'react'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'
import Button from '../../../component/button'
import Input from '../../../component/input'
import { LnoItemPost, LnoDeletePost, LnoOppo } from '../../../interface/lno'
import { LnoItemService, LnoDeleteService } from '../../../services'
import Alert from '../../../component/alert'
import { useFocusEffect } from '@react-navigation/native'
import strings from '../../../strings/LnO/Item'
import Label from '../../../component/label'
import Subtitle from '../../../component/subtitle'
import { useTheme } from '../../../theme'


const LnO_Item = ({ navigation, route }) => {

  const [active] = useState(route.params.stage)

  const theme = useTheme()

  const [oppo, setOppo] = useState<LnoOppo[]>([])
  useFocusEffect(
    React.useCallback(() => {
      const payload: LnoItemPost = {
        item: route.params.lead_id
      }
      LnoItemService(payload)
      .then((data: any) => {
        setOppo(data)
      })
    }, [])
  )

  const [deleteCheck, setDeleteCheck] = useState('none')
  const [deleteAlert, setDeleteAlert] =  useState('none')
  const deleteHandler = async () => {
    const payload: LnoDeletePost = {
      item: route.params.lead_id
    }
    const result = LnoDeleteService(payload)
    if (await result) {
      setDeleteAlert('flex')
    }
  }

  return (
    <>
    <Alert title={strings.deletedIt} display={deleteAlert} onYes={() => navigation.navigate('LnO')} />
    <Alert title={strings.areYou} display={deleteCheck} onYes={deleteHandler} onNo={() => setDeleteCheck('none')} />

      <View style={style.container}>
        <Subtitle subtitle={strings.lead} />

        <Label text={strings.name} />
        <Input placeholder={strings.name} maxLength={60} value={route.params.name} editable={false} />

        <Label text={strings.shortDesc} />
        <Input placeholder={strings.shortDesc} maxLength={120} value={route.params.short_desc} editable={false} />

        <Label text={strings.active} />
        <Input value={active} editable={false} />
      </View>
      
      { oppo !== null && oppo !== undefined ? (
        <View style={{paddingVertical: 20}}>
          <Button title={strings.update} color={theme.colors.secondary} bgColor={theme.colors.primary} 
            onPress={() => navigation.navigate('LnO_Update', route.params)} marginBottom={10} />
          <Button title={`${strings.opportunities} (${oppo.length})`} 
            color={theme.colors.secondary} bgColor={theme.colors.primary} 
            onPress={() => navigation.navigate('Opportunities', [oppo, route.params])} marginBottom={10} />
          <Button title={strings.delete} color={theme.colors.primary} bgColor={theme.colors.secondary} 
            onPress={() => setDeleteCheck('flex')} />
        </View>
      ): null }
    </>
  )
}

export default LnO_Item

const style = StyleSheet.create({
  container: {
      flex: 1
  },
})
