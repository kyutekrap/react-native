import React, { useState } from 'react'
import Button from '../../component/button'
import Input from '../../component/input'
import Title from '../../component/title'
import { LoginService } from '../../services/login'
import { LoginPost } from '../../interface/login'
import { setSession } from '../../storage/session'
import { useDispatch } from 'react-redux'
import { setUsername as setUser } from '../../redux/action'
import { validateForm } from '../../global'
import Snackbar from '../../component/snackbar'
import strings from '../../strings/Login'
import { useTheme } from '../../theme'


const Login = ({ navigation }) => {

  const theme = useTheme()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const loginHandler = () => {
    const payload: LoginPost = {
      'username': username,
      'password': password
    }
    if (validateForm(payload)) {
      loginPush(payload)
    }
  }

  const [wrongSnack, setWrongSnack] = useState(false)
  const [networkSnack, setNetworkSnack] = useState(false)
  const dispatch = useDispatch()
  const loginPush = async (payload: LoginPost) => {
    try {
      const result = await LoginService(payload)
      if (result !== null && result === true) {
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
    } catch (error) {
      //
    }
  };

  return (
    <>
      <Snackbar show={wrongSnack} message={strings.doubleCheck} onPress={() => setWrongSnack(false)} bgColor='#FF6961' color='white' />
      <Snackbar show={networkSnack} message={strings.networkFailed} onPress={() => setWrongSnack(false)} bgColor='#FF6961' color='white' />

      <Title title={strings.logIn} />

      <Input placeholder={strings.username} maxLength={90} onChangeText={(text: string) => setUsername(text)} />
      <Input placeholder={strings.password} maxLength={30} onChangeText={(text: string) => setPassword(text)} secureTextEntry={true} />

      <Button title={strings.logInBig} bgColor={theme.colors.secondary} color={theme.colors.primary} onPress={loginHandler} />

      {/* <Text style={style.small} onPress={() => navigation.navigate('Recover')}>Forgot Password?</Text> */}
    </>
  )
}

export default Login
