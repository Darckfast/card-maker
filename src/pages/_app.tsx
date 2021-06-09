import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import { useDarkMode } from '../components/hooks/useDarkMode'
import { lightTheme, darkTheme } from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [currentTheme, themeToggle] = useDarkMode(lightTheme, darkTheme)

  pageProps = { ...pageProps, themeToggle, currentTheme }

  return (
    <ThemeProvider theme={currentTheme.activeTheme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
