import { Provider } from 'react-redux'
import store from './redux/store'
import {ThemeProvider, useTheme} from './theme'
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper'

const AppProvider = ({children}: any) => {
  const Customtheme = useTheme()
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...Customtheme.colors,
    },
  }

  return (
    <Provider store={store}>
      <ThemeProvider>
        <PaperProvider theme={theme}>
          {children}
        </PaperProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default AppProvider