import React from 'react'
import styled from 'styled-components'
import Icon from '../svgBase'

const Svg = styled(Icon)`
  width: 32px;
  height: 32px;

  rect,
  path {
    stroke: ${props => props.theme.colors.text};
    fill: transparent;
  }

  path {
    stroke-dasharray: 33;
    stroke-dashoffset: 33;
  }

  @keyframes check {
    from {
      stroke-dashoffset: 33;
    }

    to {
      stroke-dashoffset: 0;
    }
  }
`
export const CheckBoxIcon = ({
  className
}: {
  className?: string
}): JSX.Element => (
  <Svg viewBox="0 0 32 32" className={className}>
    <rect x="1" y="1" width="30" height="30" rx="7" strokeWidth="2" />
    <path
      d="M5.33331 14.2222L15.5555 23.5555L25.7778 7.11108"
      strokeWidth="2"
    />
  </Svg>
)
