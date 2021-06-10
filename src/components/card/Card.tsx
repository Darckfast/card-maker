import React, { useState } from 'react'
import { CardContainer } from '../../styles/components/Card';

interface CardComponentProps {
  holoEffect: boolean,
  sparklesEffect: boolean,
  color: {
    backgroundColor: string,
    innerBackgroundColor: string
  },
  cardName: string,
  cardDescription: string,
  cardImgSrc: string
}

const Card: React.FC<CardComponentProps> = props => {
  const [holoPosition, setHoloPosition] = useState(
    {
      position: {
        x: '50%',
        y: '50%'
      },
      rotation: {
        x: '0deg',
        y: '0deg'
      },
      transition: 'none',
    })

  const registerMouse = ({ nativeEvent: { offsetX, offsetY }, target: { offsetHeight, offsetWidth } }) => {
    const calcPos = (offset: number, size: number) => Math.abs(Math.floor(100 / size * offset) - 100)

    const xPos = calcPos(offsetX, offsetWidth)
    const yPos = calcPos(offsetY, offsetHeight)

    const xRot = (yPos - 50) / 2;
    const yRot = ((xPos - 50) * .5) * -1;

    setHoloPosition(() => ({
      position: {
        x: `${xPos}%`,
        y: `${yPos}%`
      },
      rotation: {
        x: `${xRot}deg`,
        y: `${yRot}deg`
      },
      transition: 'none'
    }))
  }

  const resetPosition = () => {
    setHoloPosition(() => ({
      position: {
        x: '50%',
        y: '50%'
      },
      rotation: {
        x: '0deg',
        y: '0deg'
      },
      transition: '.2s'
    }))
  }

  return (
    <CardContainer
      effects={{ holoEffect: props.holoEffect, sparklesEffect: props.sparklesEffect }}
      colors={props.color}
      onMouseLeave={resetPosition}
      holoPosition={holoPosition}
      onMouseMove={e => registerMouse(e)} >

      <img src={props.cardImgSrc} />
      <span className={'name'}>{props.cardName}</span>
      <span className={'description'}>{props.cardDescription}</span>
    </CardContainer>
  )
}

export default Card
