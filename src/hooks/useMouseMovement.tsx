import { useState } from 'react'

export const useMouseMovement = (): [any, (any) => void, () => void] => {
  const [positions, setPositions] = useState({
    enableAnimation: false,
    position: {
      x: '50%',
      y: '50%'
    },
    rotation: {
      x: '0deg',
      y: '0deg'
    },
    transition: '.2s'
  })

  const registerMovement = ({
    nativeEvent: { offsetX, offsetY },
    target: { offsetHeight, offsetWidth }
  }) => {
    const calcPos = (offset: number, size: number) =>
      Math.abs(Math.floor((100 / size) * offset) - 100)

    const xPos = calcPos(offsetX, offsetWidth)
    const yPos = calcPos(offsetY, offsetHeight)

    const xRot = (yPos - 50) / 2
    const yRot = (xPos - 50) * 0.5 * -1

    setPositions(() => ({
      enableAnimation: false,
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

  const resetPositions = () => {
    setPositions(() => ({
      enableAnimation: false,
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

  return [positions, registerMovement, resetPositions]
}
