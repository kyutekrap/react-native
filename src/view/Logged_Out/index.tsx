import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import { fontSize } from '../../global'
import LinearGradient from 'react-native-linear-gradient'
import Button from '../../component/button'
import { checkSession } from '../../storage/session'
import { useDispatch } from 'react-redux'
import { setUsername } from '../../redux/action'
import strings from '../../strings/Logged_Out'
import { useTheme } from '../../theme'


const Logged_Out = ({ navigation }) => {

  const dispatch = useDispatch()

  const theme = useTheme()

  useEffect(() => {
    checkSession()
    .then((data: any)=> {
      if (data !== null || undefined || '') {
        dispatch(setUsername(data))
        navigation.navigate('Home')
      }
    })
  }, [dispatch])

  return (
    <>
      <LinearGradient
        colors={['#a374d5', '#be97dc', '#eec1ea', '#fffbbe']}
        start={{ x: 0, y: 0 }} // Start point (top-left)
        end={{ x: 1, y: 1 }} // End point (bottom-right)
        style={style.top_section}
      >
        <Text style={style.title}>Love Navigation.{'\n'}Heart Synchronization.</Text>
      </LinearGradient>

      <View style={style.bottom_section}>
        <Button title={strings.login} bgColor={theme.colors.primary} color={theme.colors.secondary}
          onPress={() => navigation.navigate('Login')} marginRight={3} flex={1} />
        <Button title={strings.register} bgColor={theme.colors.secondary} color={theme.colors.primary}
          onPress={() => navigation.navigate('Register')} marginLeft={3} flex={1} />
      </View>
    </>
  )
}

export default Logged_Out

const style = StyleSheet.create({
  top_section: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flex: 1,
      marginTop: 10
  },
  title: {
      color: 'black',
      fontSize: fontSize(1),
      marginBottom: fontSize(3),
      marginStart: 20,
      fontWeight: '600'
  },
  bottom_section: {
      paddingVertical: 20,
      flexDirection: 'row',
  },
})
