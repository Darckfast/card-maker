import React from 'react'
import { DarkIcon } from '../styles/icons/darkIcon'
import { LightIcon } from '../styles/icons/lightIcon'

interface ToggleThemeProps {
  currentTheme: { activeTheme: any, name: string },
  changeTheme: () => void
}

const ToggleTheme: React.FC<ToggleThemeProps> = props => {
  return (
    <a className={'toggle-button'} onClick={props.changeTheme}>
      {props.currentTheme.name === 'light' ? <DarkIcon></DarkIcon> : <LightIcon></LightIcon>}
    </a>
  )
}

export default ToggleTheme
