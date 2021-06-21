import { useState } from 'react'

export const useMouseMovement = (): [
  any,
  (mouseMovement: any) => void,
  () => void,
  (paramName: string, value: any) => void
] => {
  const [positions, setPositions] = useState({
    enableAnimation: false,
    enableNaturalAnimation: false,
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
    if (positions.enableAnimation) {
      setPositions(movement => {
        const calcPos = (offset: number, size: number) =>
          Math.abs(Math.floor((100 / size) * offset) - 100)

        const xPos = calcPos(offsetX, offsetWidth)
        const yPos = calcPos(offsetY, offsetHeight)

        const xRot = (yPos - 50) / 2
        const yRot = (xPos - 50) * 0.5 * -1

        return {
          ...movement,
          position: {
            x: `${xPos}%`,
            y: `${yPos}%`
          },
          rotation: {
            x: `${xRot}deg`,
            y: `${yRot}deg`
          },
          transition: 'none'
        }
      })
    }
  }

  const resetPositions = () => {
    setPositions(movement => ({
      ...movement,
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

  const changeValue = (paramName: string, value: any) => {
    setPositions(positions => ({ ...positions, [paramName]: value }))

    console.log(positions)
  }

  return [positions, registerMovement, resetPositions, changeValue]
}
