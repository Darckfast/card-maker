import React from 'react'
import { CardContainer } from '../../styles/components/Card';

export interface CardComponentProps {
  configs: {
    holoEffect: boolean,
    sparklesEffect: boolean,
    name: string,
    description: string,
    imgSrc: string,
    backgroundColor: string,
    innerBackgroundColor: string,
    holoPosition: any,
    enableAnimation: boolean
  }
}

const Card: React.FC<CardComponentProps> = props => {
  return (
    <CardContainer
      effects={{ holoEffect: props.configs.holoEffect, sparklesEffect: props.configs.sparklesEffect }}
      innerBackgroundColor={props.configs.innerBackgroundColor}
      backgroundColor={props.configs.backgroundColor}
      holoPosition={props.configs.holoPosition}
      enableAnimation={props.configs.enableAnimation}
    >

      <img src={props.configs.imgSrc} />
      <span className={'name'}>{props.configs.name}</span>
      <span className={'description'}>{props.configs.description}</span>
    </CardContainer>)
}

export default Card
