import styled from 'styled-components'

interface CardProps {
  colors: {
    backgroundColor: string,
    innerBackgroundColor: string,
  }
  effects: {
    holoEffect: boolean,
    sparklesEffect: boolean
  }
}

export const CardContainer = styled.div<CardProps>`
  width: 320px;
  height: 460px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;

  border-radius: 4px;
  margin: 2rem;

  background-color: ${props => props.colors.backgroundColor};

  &::after {
    content: "";
    position: absolute;
    width: 296px;
    height: 437px;

    border: 1px solid white;
    border-radius: inherit;

    background-image: ${props => props.effects.sparklesEffect ? 'url(https://64.media.tumblr.com/2541216cdf5738dd5b0c32a0b6737c4f/tumblr_opno5nZGCT1vsjcxvo1_r1_540.gifv)': 'none' };
    mix-blend-mode: screen;
    background-repeat: no-repeat;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border-radius: inherit;
    background-position: inherit;
    background-repeat: no-repeat;
    background-size: 300% 300%;
    opacity: 1;
    z-index: 1;
    transform: translate3d(0, 0, 0);
    will-change: transform;
    mix-blend-mode: color-dodge;

    background-image: ${
    props => props.effects.holoEffect ?
    `linear-gradient(
      120deg,
      transparent 18%,
      rgba(31, 231, 255, 0.7) 46%,
      rgba(255, 46, 235, 0.7) 56%,
      transparent 81%,
      transparent 98%);` : 'none'}
  }

  img {
    max-width: 256px;
    max-height: 242px;

    border: 2px solid ${props => props.colors.innerBackgroundColor };;
    margin-bottom: 2rem;
  }

  .name {
    width: 8rem;
    height: 2rem;

    border: 2px solid ${props => props.colors.innerBackgroundColor };
    color: ${props => props.colors.innerBackgroundColor };
    border-radius: 4px;
    align-self: flex-start;

    margin-left: 2rem;
    margin-bottom: 1rem;

    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .description {
    width: 16rem;
    height: 8rem;

    color: black;
    background-color: ${props => props.colors.innerBackgroundColor };
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    overflow: hidden;
    overflow-wrap: anywhere;
    flex-flow: wrap;
    padding: 1rem;
  }
`
