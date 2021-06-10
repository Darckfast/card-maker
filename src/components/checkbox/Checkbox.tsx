import React, { ChangeEvent } from 'react'
import { CheckBoxIcon } from '../../styles/icons/components/checkbox'
import { ToggleLabel } from '../../styles/pages/Home'

interface CheckBoxProps {
  label?: string
  value: boolean
  name?: string
  onChangeValue?: (e: ChangeEvent<HTMLInputElement>) => void
}

const CheckBox: React.FC<CheckBoxProps> = props => {
  return (
    <ToggleLabel>
      {props.label}
      <input
        type="checkbox"
        name={props.name}
        checked={props.value}
        onChange={props.onChangeValue}
      />
      <CheckBoxIcon />
    </ToggleLabel>
  )
}

export default CheckBox
