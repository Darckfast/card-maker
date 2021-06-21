import styled from 'styled-components'
import { CardComponentProps } from '../../components/card/Card'

export const CardContainer = styled.div.attrs<CardComponentProps>(
  ({ position, rotation, transition }) => ({
    style: {
      transform: rotation
        ? `rotateX(${rotation.x}) rotateY(${rotation.y})`
        : 'none',
      backgroundPosition: position ? `${position.x} ${position.y}` : 'none',
      transition: transition ?? 'none'
    }
  })
)<CardComponentProps>`
  width: 320px;
  height: 460px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  font: 400 16px Roboto, sans-serif;

  border-radius: 4px;

  background-color: ${props => props.colorSchema.primary};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  transform-origin: center;
  animation: ${props =>
    props.enableNaturalAnimation ? 'holoCard 15s ease infinite' : 'none'};
  perspective: 2000px;

  backdrop-filter: ${props => (props.type === 'glass' ? `blur(42px)` : 'none')};

  ::after {
    content: '';
    position: absolute;
    width: 296px;
    height: 437px;

    border: 1px solid white;
    border-radius: inherit;

    background-image: ${({ sparkles: { enabled, src } }) =>
      enabled ? `url(${src})` : 'none'};

    mix-blend-mode: screen;
    background-repeat: no-repeat;
  }

  ::before {
    content: '';
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
    animation: ${props =>
      props.enableNaturalAnimation
        ? 'holoGradient 15s ease infinite both'
        : 'none'};

    background-image: ${props =>
      props.holo.enabled ? `url(${props.holo.src})` : 'none'};
  }

  img {
    max-width: 256px;
    max-height: 200px;

    border: 2px solid ${props => props.colorSchema.secondary};
    margin-bottom: 2rem;
  }

  .name {
    width: 12rem;
    height: 2rem;

    border: 2px solid ${props => props.colorSchema.secondary};
    color: ${props => props.colorSchema.secondary};
    border-radius: 4px;
    align-self: flex-start;

    margin-left: 2rem;
    margin-bottom: 1rem;

    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;

    opacity: ${props => (props.type === 'glass' ? '0.6' : 'none')};
  }

  .description {
    width: 16rem;
    height: 8rem;

    color: black;
    background-color: ${props => props.colorSchema.secondary};
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    overflow: hidden;
    overflow-wrap: anywhere;
    flex-flow: wrap;
    padding: 0.5rem;

    opacity: ${props => (props.type === 'glass' ? '0.6' : 'none')};
  }

  .noise {
    position: absolute;
    height: 100%;
    width: 100%;
    mix-blend-mode: overlay;
    opacity: 0.2;
    background-image: ${props =>
      props.noise.enabled ? `url(${props.noise.src})` : 'none'};
  }

  .glass {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: radial-gradient(
      100% 100% at 0% 0%,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  @keyframes holoCard {
    0%,
    100% {
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
    0%,
    100% {
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
