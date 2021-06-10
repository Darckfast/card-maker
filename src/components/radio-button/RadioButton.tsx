import React, { ChangeEvent } from 'react'
import { RadioButtonContainer } from '../../styles/components/RadioButton'
import { RadioButtonIcon } from '../../styles/icons/components/radioButton'

interface RadioButtonProps {
  options: string[]
  label?: string
  value?: string
  onChangeValue?: (e: ChangeEvent<HTMLInputElement>) => void
}

const RadioButton: React.FC<RadioButtonProps> = props => {
  return (
    <RadioButtonContainer>
      {props.options.map((opt, index) => {
        return (<label key={index}>
          <input
            type='radio'
            name='options'
            value={opt}
            onChange={props.onChangeValue} />
          <RadioButtonIcon />
          {opt}
        </label>)
      })}
    </RadioButtonContainer>)
}

export default RadioButton
