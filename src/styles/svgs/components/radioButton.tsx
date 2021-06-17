import React from 'react'
import styled from 'styled-components'
import Icon from '../svgBase'

const Svg = styled(Icon)``

export const RadioButtonIcon = ({
  className
}: {
  className?: string
}): JSX.Element => (
  <Svg viewBox="0 0 22 22" className={className}>
    <circle cx="11" cy="11" r="10" fill="transparent" strokeWidth="2" />
    <circle cx="11" cy="11" r="7" type={'checkmark'} strokeWidth="0" />
  </Svg>
)
