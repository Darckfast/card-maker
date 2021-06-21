import React from 'react'
import { CardContainer } from '../../styles/components/Card'

export interface CardComponentProps {
  name: string
  description: string
  imgSrc: string
  colorSchema: {
    primary: string
    secondary: string
  }
  holo: {
    enabled: boolean
    src: string
  }
  sparkles: {
    enabled: boolean
    src: string
  }
  noise: {
    enabled: boolean
    src: string
  }
  type: string
  enableAnimation: boolean
  enableNaturalAnimation: boolean
  position: {
    x: string
    y: string
  }
  rotation: {
    x: string
    y: string
  }
  transition: string
}

const Card: React.FC<CardComponentProps> = props => {
  return (
    <CardContainer {...props}>
      <div className="noise"></div>
      <div className="glass"></div>
      <img src={props.imgSrc} />
      <span className={'name'}>{props.name}</span>
      <span className={'description'}>{props.description}</span>
    </CardContainer>
  )
}

export default Card
