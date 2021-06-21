import React, { ChangeEvent } from 'react'
import { RadioButtonContainer } from '../../styles/components/RadioButton'
import { RadioButtonIcon } from '../../styles/svgs/components/radioButton'

interface RadioButtonProps {
  options: { desc: string; value: string }[]
  label?: string
  type: string
  value?: string
  onChangeValue?: (e: ChangeEvent<HTMLInputElement>) => void
}

const RadioButton: React.FC<RadioButtonProps> = props => {
  return (
    <RadioButtonContainer>
      {props.options.map(({ value, desc }, index) => {
        return (
          <label key={index}>
            <input
              type="radio"
              name={props.type}
              value={value}
              onChange={props.onChangeValue}
            />
            <RadioButtonIcon />
            {desc}
          </label>
        )
      })}
    </RadioButtonContainer>
  )
}

export default RadioButton
