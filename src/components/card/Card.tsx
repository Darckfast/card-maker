import React, { useEffect } from 'react'
import { CardContainer } from '../../styles/components/Card'

export interface CardComponentProps {
  configs: {
    name: string
    description: string
    imgSrc: string
    colorSchema: string
    holo: {
      enabled: boolean
      src: string
    }
    sparkles: {
      enabled: boolean
      src: string
    }
  }
  animation: {
    enableAnimation: boolean
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
}

const Card: React.FC<CardComponentProps> = props => {
  useEffect(() => {
    console.log(props)
  }, [])

  return (
    <CardContainer
      colorSchema={props.configs.colorSchema}
      holo={props.configs.holo}
      sparkles={props.configs.sparkles}
      animation={props.animation}
    >
      <img src={props.configs.imgSrc} />
      <span className={'name'}>{props.configs.name}</span>
      <span className={'description'}>{props.configs.description}</span>
    </CardContainer>
  )
}

export default Card
