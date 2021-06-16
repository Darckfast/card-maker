import styled from 'styled-components'

interface CardProps {
  backgroundColor: string,
  innerBackgroundColor: string,
  effects: {
    holoEffect: string,
    sparklesEffect: string
  },
  holoPosition: {
    position: {
      x: string,
      y: string,
    },
    rotation: {
      x: string,
      y: string
    },
    transition: string
  },
  enableAnimation: boolean
}

export const CardContainer = styled.div.attrs((props: any) => ({
  style: {
    transform: `rotateX(${props.holoPosition.rotation.x}) rotateY(${props.holoPosition.rotation.y})`,
    backgroundPositionX: props.holoPosition.position.x,
    backgroundPositionY: props.holoPosition.position.y,
    transition: props.holoPosition.transition
  }
}))<CardProps>`
  width: 320px;
  height: 460px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  font: 400 16px Roboto,sans-serif;

  border-radius: 4px;

  background-color: ${props => props.backgroundColor};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  transform-origin: center;
  animation: ${props => props.enableAnimation ? 'holoCard 15s ease infinite' : 'none'};
  perspective: 2000px;
  transform: translate3d(0,0,-1px);

  ::after {
    content: "";
    position: absolute;
    width: 296px;
    height: 437px;

    border: 1px solid white;
    border-radius: inherit;

    background-image: url(${props => props.effects.sparklesEffect});

//    background-image: ${props => props.effects.sparklesEffect ? 'url(https://64.media.tumblr.com/2541216cdf5738dd5b0c32a0b6737c4f/tumblr_opno5nZGCT1vsjcxvo1_r1_540.gifv)': 'none' };
    mix-blend-mode: screen;
    background-repeat: no-repeat;
  }

  ::before {
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

    will-change: transform;
    mix-blend-mode: color-dodge;
    animation: ${props => props.enableAnimation ? 'holoGradient 15s ease infinite both' : 'none'};

    background-image: url(${props => props.effects.holoEffect});
    /* background-image: ${
    props => props.effects.holoEffect ?
    `linear-gradient(
      120deg,
      transparent 18%,
      rgba(31, 231, 255, 0.7) 46%,
      rgba(255, 46, 235, 0.7) 56%,
      transparent 81%,
      transparent 98%);` : 'none'} */
  }

  img {
    max-width: 256px;
    max-height: 200px;

    border: 2px solid ${props => props.innerBackgroundColor };;
    margin-bottom: 2rem;
  }

  .name {
    width: 12rem;
    height: 2rem;

    border: 2px solid ${props => props.innerBackgroundColor };
    color: ${props => props.innerBackgroundColor };
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
    background-color: ${props => props.innerBackgroundColor };
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    overflow: hidden;
    overflow-wrap: anywhere;
    flex-flow: wrap;
    padding: .5rem;
  }

  @keyframes holoCard {
    0%, 100% {
      transform: rotateX(0deg) rotateY(0deg);
    }
    33% {
      transform: rotateX(10deg) rotateY(-6deg);
    }
    66% {
      transform: rotateX(-10deg) rotateY(6deg);
    }
  }

  @keyframes holoGradient {
    0%, 100% {
      background-position: 50% 50%;
    }
    33% {
      background-position: 100% 100%;
    }
    66% {
      background-position: 0% 0%;
  }
}
`
