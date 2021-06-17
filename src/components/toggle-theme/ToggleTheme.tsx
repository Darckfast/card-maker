import React from 'react'
import { DefaultTheme } from 'styled-components'
import { DarkIcon } from '../../styles/svgs/icons/darkIcon'
import { LightIcon } from '../../styles/svgs/icons/lightIcon'

export interface ToggleThemeProps {
  currentTheme: { activeTheme: DefaultTheme; name: string }
  changeTheme: () => void
}

const ToggleTheme: React.FC<ToggleThemeProps> = props => {
  return (
    <a className={'toggle-button'} onClick={props.changeTheme}>
      {props.currentTheme.name === 'light' ? (
        <DarkIcon></DarkIcon>
      ) : (
        <LightIcon></LightIcon>
      )}
    </a>
  )
}

export default ToggleTheme
