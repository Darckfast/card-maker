import React from 'react'
import styled from 'styled-components'
import Icon from './svgBase'

const Svg = styled(Icon)`
  width: 40px;
  height: 40px;

  fill: #2284e6;

  cursor: pointer;

  border-radius: 50%;
  padding: .3rem;
  background-color: ${props => props.theme.colors.backgroundLight};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover {
    transition: .2s;
    fill: #4598ed;

    background-color: ${props => props.theme.colors.backgroundLighter};

    transform: scale(1.1);
  }
`

export const DarkIcon = ({
  className
}: {
  className?: string
}): JSX.Element => (
  <Svg viewBox="0 0 512 512" className={className}>
    <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path>
  </Svg>
)
