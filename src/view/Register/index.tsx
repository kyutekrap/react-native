import React, {useState} from 'react'
import { Text, Linking } from 'react-native'
import { StyleSheet } from 'react-native'
import { fontSize } from '../../global'
import Button from '../../component/button'
import Input from '../../component/input'
import Title from '../../component/title'
import { RegisterService } from '../../services/login'
import { RegisterPost } from '../../interface/login'
import { setSession } from '../../storage/session'
import { useDispatch } from 'react-redux'
import { setUsername as setUser } from '../../redux/action'
import { validateForm } from '../../global'
import Snackbar from '../../component/snackbar'
import strings from '../../strings/Register'
import { useTheme } from '../../theme'


const Register = ({ navigation }) => {

  const theme = useTheme()

  const openBrowser = () => {
    const terms = "https://dongkye.tech/English/Terms/"
    Linking.openURL(terms)
  }

  const dispatch = useDispatch()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const registerHandler = () => {
    const payload: RegisterPost = {
      username: username, 
      password: password
    }
    if (validateForm(payload)) {
      registerPush(payload)
    }
  }

  const [wrongSnack, setWrongSnack] = useState(false)
  const [networkSnack, setNetworkSnack] = useState(false)
  const registerPush = async (payload: RegisterPost) => {
    const result = await RegisterService(payload)
    if (result !== null && result) {
      setSession(username)
        .then(() => {
          dispatch(setUser(username))
          navigation.navigate('Home')
        })
    } else if (result !== null) {
      setWrongSnack(true)
    } else {
      setNetworkSnack(true)
    }
  }

  return (
    <>
      <Snackbar show={wrongSnack} message={strings.usernameTaken} onPress={() => setWrongSnack(false)} bgColor='#FF6961' color='white' />
      <Snackbar show={networkSnack} message={strings.networkFailed} onPress={() => setWrongSnack(false)} bgColor='#FF6961' color='white' />

      <Title title={strings.register} />

      <Input placeholder={strings.username} maxLength={90} onChangeText={(text: string)=>setUsername(text)} />
      <Input placeholder={strings.password} maxLength={30} secureTextEntry={true} onChangeText={(text: string)=>setPassword(text)} />

      <Button title={strings.register} color={theme.colors.primary} bgColor={theme.colors.secondary} onPress={registerHandler} />

      <Text style={[style.small, {color: theme.colors.secondary}]}>{strings.bySigning} <Text onPress={openBrowser} style={style.underline}>{strings.terms}</Text></Text>
    </>
  )
}

export default Register

const style = StyleSheet.create({
  small: {
      fontSize: fontSize(0.6),
      marginTop: 20
  },
  underline: {
      textDecorationLine: 'underline'
  }
})
