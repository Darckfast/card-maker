import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import ToggleTheme from '../components/ToggleTheme'
import { GitHubIcon } from '../styles/icons/githubIcon'
import Card from '../components/card/Card'
import { FormContainer } from '../styles/components/Form'
import CheckBox from '../components/checkbox/Checkbox'
import RadioButton from '../components/radio-button/RadioButton'

const Home: React.FC<any> = (props) => {
  const [code, setCode] = useState('')
  const [configForm, setConfigForm] = useState({
    name: '',
    description: '',
    backgroundColor: '#404040',
    innerBackgroundColor: 'white',
    imgSrc: '',
    holoEffect: false,
    sparklesEffect: false,
    enableAnimation: false,
    holoPosition: {
      position: {
        x: '50%',
        y: '50%'
      },
      rotation: {
        x: '0deg',
        y: '0deg'
      },
      transition: 'none',
    }
  })


  const setColorSchema = (color) => {
    let colorSchema
    switch (color) {
      case 'Blue':
        colorSchema = ({ backgroundColor: '#4744CB', innerBackgroundColor: '#ABB3FC' })
        break;
      case 'Red':
        colorSchema = ({ backgroundColor: '#E43232', innerBackgroundColor: '#FCABAB' })
        break;
      case 'Green':
        colorSchema = ({ backgroundColor: '#00A66A', innerBackgroundColor: '#ABFCC2' })
        break;
      case 'Black':
        colorSchema = ({ backgroundColor: 'black', innerBackgroundColor: 'white' })
        break;
      default:
        colorSchema = ({ backgroundColor: '#404040', innerBackgroundColor: 'white' })
        break;
    }

    setConfigForm(config => ({ ...config, ...colorSchema }))
  }

  useEffect(() => {
    setCode(Object
      .keys(configForm)
      .map((val) => `${encodeURIComponent(val)}=${encodeURIComponent(configForm[val])}`)
      .join('&'))
  }, [configForm])


  const registerMouse = (e) => {
    const {
      nativeEvent:
      { offsetX, offsetY },
      target:
      { offsetHeight, offsetWidth } } = e

    const calcPos = (offset: number, size: number) => Math.abs(Math.floor(100 / size * offset) - 100)

    const xPos = calcPos(offsetX, offsetWidth)
    const yPos = calcPos(offsetY, offsetHeight)

    const xRot = (yPos - 50) / 2;
    const yRot = ((xPos - 50) * .5) * -1;

    setConfigForm((config) => ({
      ...config, holoPosition: {
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
    }))
  }

  const resetPosition = () => {
    setConfigForm((config) => ({
      ...config, holoPosition: {
        position: {
          x: '50%',
          y: '50%'
        },
        rotation: {
          x: '0deg',
          y: '0deg'
        },
        transition: '.2s'
      }
    }))
  }

  return (
    <Container>
      <Head>
        <title>NextJS Template with Typescript</title>
      </Head>

      <main>
        <FormContainer>
          <label>
            Card Name:
            <input
              type='text'
              autoComplete='off'
              value={configForm.name}
              onChange={e => setConfigForm((config) => ({ ...config, name: e.target.value }))} />
          </label>

          <label>
            Card Description:
            <input
              type='text'
              autoComplete='off'
              value={configForm.description}
              onChange={e => setConfigForm((config) => ({ ...config, description: e.target.value }))} />
          </label>

          <label>
            Image Src:
            <input
              type='text'
              autoComplete='off'
              value={configForm.imgSrc}
              onChange={e => setConfigForm((config) => ({ ...config, imgSrc: e.target.value }))} />
          </label>

          <CheckBox
            value={configForm.holoEffect}
            label={'Enable HoloEffect'}
            onChangeValue={e => setConfigForm((config) => ({ ...config, holoEffect: e.target.checked }))}
          />

          <CheckBox
            value={configForm.sparklesEffect}
            label={'Enable Sparkles'}
            onChangeValue={e => setConfigForm((config) => ({ ...config, sparklesEffect: e.target.checked }))}
          />
        </FormContainer>

        <div
          onMouseMove={e => registerMouse(e)}
          onMouseLeave={resetPosition}>

          <svg width="320" height="460">
            <foreignObject width="320" height="460" style={{ perspective: '2000px' }}>
              <Card configs={configForm} />
            </foreignObject>
          </svg>
        </div>

        <FormContainer>
          <label>
            Card color schema:
            <RadioButton
              options={['Blue', 'Red', 'Black', 'Grey', 'Green']}
              onChangeValue={(e) => setColorSchema(e.target.value)}
            />
          </label>
        </FormContainer>
        <footer>
          <a href="https://github.com/Darckfast/nextjs-typescript-template">
            <GitHubIcon></GitHubIcon>
          </a>

          <ToggleTheme changeTheme={props.themeToggle} currentTheme={props.currentTheme}></ToggleTheme>
        </footer>

        <div className="code">
          <span>{code}</span>
        </div>
      </main>
    </Container >
  )
}

export default Home
