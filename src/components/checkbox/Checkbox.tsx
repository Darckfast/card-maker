import React, { ChangeEvent } from 'react'
import { CheckBoxIcon } from '../../styles/svgs/components/checkbox'
import { ToggleLabel } from '../../styles/components/CheckBox'

interface CheckBoxProps {
  label?: string
  value: boolean
  disabled?: boolean
  name?: string
  onChangeValue?: (e: ChangeEvent<HTMLInputElement>) => void
}

const CheckBox: React.FC<CheckBoxProps> = props => {
  return (
    <ToggleLabel>
      {props.label}
      <input
        disabled={props.disabled ?? false}
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
