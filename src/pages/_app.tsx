import React, { createContext } from 'react'
import { AppProps } from 'next/app'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import { useDarkMode } from '../hooks/useDarkMode'
import { lightTheme, darkTheme } from '../styles/theme'

type ThemeContextType = {
  currentTheme: {
    name: string
    activeTheme: DefaultTheme
  }
  changeTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextType)

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [currentTheme, changeTheme] = useDarkMode(lightTheme, darkTheme)

  return (
    <ThemeProvider theme={currentTheme.activeTheme}>
      <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default MyApp
