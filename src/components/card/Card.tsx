import React, { useEffect, useState } from 'react'
import { CardContainer } from '../../styles/components/Card';

interface CardComponentProps {
  holoEffect: boolean,
  sparklesEffect: boolean,
  color: string,
  cardName: string,
  cardDescription: string,
  cardImgSrc: string
}

const Card: React.FC<CardComponentProps> = props => {
  const [colorSchema, setColorSchema] = useState({
    backgroundColor: 'black',
    innerBackgroundColor: 'black',
  })

  const [effects, setEffects] = useState({
    holoEffect: props.holoEffect,
    sparklesEffect: props.sparklesEffect
  })

  const [holoPosition, setHoloPosition] = useState(
    {
      pos: {
        x: '50%',
        y: '50%'
      },
      rotation: {
        x: '0deg',
        y: '0deg'
      },
      transition: 'none',
    })

  useEffect(() => {
    setColorSchema(() => {
      switch (props.color) {
        case 'blue':
          return ({ backgroundColor: '#4744CB', innerBackgroundColor: '#ABB3FC' })
        case 'red':
          return ({ backgroundColor: '#E43232', innerBackgroundColor: '#FCABAB' })
        case 'green':
          return ({ backgroundColor: '#00A66A', innerBackgroundColor: '#ABFCC2' })
        case 'black':
          return ({ backgroundColor: 'black', innerBackgroundColor: 'black' })
        default:
          return ({ backgroundColor: '#404040', innerBackgroundColor: 'white' })
      }
    })
  }, [])

  const registerMouse = ({ nativeEvent: { offsetX, offsetY } }) => {
    const calcPos = (offset: number, size: number) => Math.abs(Math.floor(100 / size * offset) - 100)

    const xPos = calcPos(offsetX, 320)
    const yPos = calcPos(offsetY, 460)

    const xRot = (xPos! * 20!) / 100;
    const yRot = ((yPos! * 20!) / 100) * -1;

    setHoloPosition(() => ({
      pos: {
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
      pos: {
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
      colors={colorSchema}
      onMouseLeave={resetPosition}
      onMouseMove={e => registerMouse(e)}
      style={
        {
          backgroundPositionX: holoPosition.pos.x,
          backgroundPositionY: holoPosition.pos.y,
          transform: `rotateX(${holoPosition.rotation.x}) rotateY(${holoPosition.rotation.y}) `,
          transition: holoPosition.transition
        }} >

      <img src={props.cardImgSrc} />
      <span className={'name'}>{props.cardName}</span>
      <span className={'description'}>{props.cardDescription}</span>
    </CardContainer>
  )
}

export default Card
