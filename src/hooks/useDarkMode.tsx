import { useEffect, useState } from 'react'

import { DefaultTheme } from 'styled-components'

export const useDarkMode = (
  lightTheme: DefaultTheme,
  darkTheme: DefaultTheme
): [{ name: string; activeTheme: DefaultTheme }, () => void] => {
  const [currentTheme, setCurrentTheme] = useState({
    name: 'dark',
    activeTheme: darkTheme
  })

  const themeToggler = (): void => {
    const nextTheme = currentTheme.name === 'light' ? 'dark' : 'light'

    localStorage.setItem('theme', nextTheme)

    setCurrentTheme({
      name: nextTheme,
      activeTheme: nextTheme === 'light' ? lightTheme : darkTheme
    })
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')

    localTheme &&
      setCurrentTheme({
        name: localTheme,
        activeTheme: localTheme === 'light' ? lightTheme : darkTheme
      })
  }, [])

  return [currentTheme, themeToggler]
}
