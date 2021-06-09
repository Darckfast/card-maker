import React from 'react'
import { useEffect, useState } from 'react';
import { DefaultTheme } from 'styled-components';

export const useDarkMode
  = (lightTheme: DefaultTheme, darkTheme: DefaultTheme):
    [{ name: string, activeTheme: DefaultTheme }, () => void] => {

    const [theme, setTheme] = useState({ name: 'dark', activeTheme: darkTheme });

    const themeToggler = (): void => {
      const nextTheme = theme.name === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', nextTheme)
      setTheme({ name: nextTheme, activeTheme: nextTheme === 'light' ? lightTheme : darkTheme })
    }

    useEffect(() => {
      const localTheme = localStorage.getItem('theme');
      localTheme && setTheme(
        {
          name: localTheme,
          activeTheme: localTheme === 'light' ? lightTheme : darkTheme
        }
      )
    }, [])

    return [theme, themeToggler]
  }
