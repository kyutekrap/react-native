import React, {createContext, useContext} from 'react'
import {Appearance} from 'react-native'
import { colors } from './color'
import {themeProps} from '../interface/theme'

const mode = Appearance.getColorScheme()
const ThemeContext = createContext<any>({})

const theme = {
  colors: colors[mode as string],
}

export const ThemeProvider = ({children}: any) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext) as themeProps