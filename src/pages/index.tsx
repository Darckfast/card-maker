import React, { useState } from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import ToggleTheme from '../components/ToggleTheme'
import { GitHubIcon } from '../styles/icons/githubIcon'
import Card from '../components/card/Card'
import { FormContainer } from '../styles/components/Form'
import CheckBox from '../components/checkbox/Checkbox'
import RadioButton from '../components/radio-button/RadioButton'

const Home: React.FC<any> = (props) => {
  const [cardName, setCardName] = useState('')
  const [cardDescription, setCardDescription] = useState('')
  const [color, setColor] = useState({ backgroundColor: '#404040', innerBackgroundColor: 'white' })
  const [cardImgSrc, setCardImgSrc] = useState('')
  const [holoEffect, setHoloEffect] = useState(false)
  const [sparklesEffect, setSparklesEffect] = useState(false)


  const setColorSchema = (color) => {
    switch (color) {
      case 'Blue':
        return ({ backgroundColor: '#4744CB', innerBackgroundColor: '#ABB3FC' })
      case 'Red':
        return ({ backgroundColor: '#E43232', innerBackgroundColor: '#FCABAB' })
      case 'Green':
        return ({ backgroundColor: '#00A66A', innerBackgroundColor: '#ABFCC2' })
      case 'Black':
        return ({ backgroundColor: 'black', innerBackgroundColor: 'white' })
      default:
        return ({ backgroundColor: '#404040', innerBackgroundColor: 'white' })
    }
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
              value={cardName}
              onChange={e => setCardName(() => e.target.value)} />
          </label>

          <label>
            Card Description:
            <input
              type='text'
              autoComplete='off'
              value={cardDescription}
              onChange={e => setCardDescription(() => e.target.value)} />
          </label>

          <label>
            Image Src:
            <input
              type='text'
              autoComplete='off'
              value={cardImgSrc}
              onChange={e => setCardImgSrc(() => e.target.value)} />
          </label>

          <CheckBox
            value={holoEffect}
            label={'Enable HoloEffect'}
            onChangeValue={e => setHoloEffect(() => e.target.checked)}
          />

          <CheckBox
            value={sparklesEffect}
            label={'Enable Sparkles'}
            onChangeValue={e => setSparklesEffect(() => e.target.checked)}
          />
        </FormContainer>

        <Card
          holoEffect={holoEffect}
          sparklesEffect={sparklesEffect}
          cardDescription={cardDescription}
          cardName={cardName}
          cardImgSrc={cardImgSrc}
          color={color} />

        <FormContainer>
          <label>
            Card color schema:
            <RadioButton
              options={['Blue', 'Red', 'Black', 'Grey', 'Green']}
              onChangeValue={(e) => setColor(() => setColorSchema(e.target.value))}
            />
          </label>
        </FormContainer>
        <footer>
          <a href="https://github.com/Darckfast/nextjs-typescript-template">
            <GitHubIcon></GitHubIcon>
          </a>

          <ToggleTheme changeTheme={props.themeToggle} currentTheme={props.currentTheme}></ToggleTheme>
        </footer>
      </main>
    </Container>
  )
}

export default Home
