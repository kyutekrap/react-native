import React, {useEffect, useState} from 'react'
import Title from '../../component/title'
import { ScrollView } from 'react-native-gesture-handler'
import Button from '../../component/button'
import InputWithButton from '../../component/input_with_button'
import { clearSession } from '../../storage/session'
import { SettingsIndexPost, SettingsIndexGet, 
  SettingsDeletePost, SettingsUpdateAliasPost, SettingsUpdatePasswordPost } from '../../interface/settings'
import { SettingsMainService, SettingsDeleteService, 
  SettingsUpdateAliasService, SettingsUpdatePasswordService } from '../../services/settings'
import { useDispatch, useSelector } from 'react-redux'
import { setUsername } from '../../redux/action'
import Alert from '../../component/alert'
import { validateForm } from '../../global'
import BoldText from '../../component/bold_text'
import strings from '../../strings/Settings'
import { useTheme } from '../../theme'


const Settings = ({ navigation }) => {

  const theme = useTheme()

  const username = useSelector((state: any) => state.username)

  const [userInfo, setUserInfo] = useState<SettingsIndexGet>({alias: ''})

  useEffect(() => {
    if (username !== null || undefined || '') {
      const payload: SettingsIndexPost = {
        username: username
      }
      getUserInfo(payload)
    }
  }, [username])

  const getUserInfo = async (payload: SettingsIndexPost) => {
    const userInfo = await SettingsMainService(payload)
    if (userInfo) {
      setUserInfo(userInfo)
    }
  }

  const [alias, setAlias] = useState(userInfo.alias)
  const [password, setPassword] = useState("")

  const [completeDialog, setCompleteDialog] = useState('none')

  const updateAlias = () => {
    const payload: SettingsUpdateAliasPost = {
      username: username,
      alias: alias
    }
    if (validateForm(payload)) {
      updateAliasPush(payload)
    }
  }
  const updateAliasPush = async(payload: SettingsUpdateAliasPost) => {
    const result = SettingsUpdateAliasService(payload)
    if (await result) {
      setCompleteDialog('flex')
    }
  }

  const updatePassword = () => {
    const payload: SettingsUpdatePasswordPost = {
      username: username,
      password: password
    }
    if (validateForm(payload)) {
      updatePasswordPush(payload)
    }
  }
  const updatePasswordPush = async(payload: SettingsUpdatePasswordPost) => {
    const result = SettingsUpdatePasswordService(payload)
    if (await result) {
      setCompleteDialog('flex')
    }
  }

  const dispatch = useDispatch()

  const deleteHandler = async () => {
    const payload: SettingsDeletePost = {
      username: username
    }
    const result = SettingsDeleteService(payload)
    if (await result) {
      dispatch(setUsername(''))
      navigation.navigate("Logged_Out")
    }
  }

  const logoutHandler = () => {
    clearSession()
    .then(() => {
      dispatch(setUsername(''))
      navigation.navigate('Logged_Out')
    })
  }

  return (
    <>
      <Alert title={strings.updateComplete} onYes={() => setCompleteDialog('none')} display={completeDialog} />
      <ScrollView>
          <Title title={strings.profileDetails} />

          <BoldText text={strings.editAlias} />
          <InputWithButton placeholder={strings.alias} maxLength={30} onPress={updateAlias} value={userInfo.alias}
            onChangeText={(text: string) => setAlias(text)} />

          <BoldText text={strings.resetPassword} />
          <InputWithButton placeholder={strings.password} maxLength={30} onPress={updatePassword}
            onChangeText={(text: string) => setPassword(text)} />

          <BoldText text={strings.deleteBig} />
          <Button title={strings.delete} bgColor={theme.colors.secondary} color={theme.colors.primary}
            onPress={deleteHandler} marginTop={10} marginBottom={10} />

          <BoldText text={strings.logoutBig} />
          <Button title={strings.logout} bgColor={theme.colors.secondary} color={theme.colors.primary}
            onPress={logoutHandler} marginTop={10} marginBottom={20} />
      </ScrollView>
    </>
  )
}

export default Settings
