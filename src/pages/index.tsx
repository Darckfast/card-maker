import React, { useState } from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import ToggleTheme from '../components/ToggleTheme'
import { GitHubIcon } from '../styles/icons/githubIcon'
import Card from '../components/card/Card'
import { FormContainer } from '../styles/components/Form'
import CheckBox from '../components/checkbox/Checkbox'
import RadioButton from '../components/radio-button/radioButton'

const Home: React.FC<any> = (props) => {
  const [cardName, setCardName] = useState('')
  const [cardDescription, setCardDescription] = useState('')
  const [color, setColor] = useState('black')
  const [cardImgSrc, setCardImgSrc] = useState('')
  const [holoEffect, setHoloEffect] = useState(false)
  const [sparklesEffect, setSparklesEffect] = useState(false)

  return (
    <Container>
      <Head>
        <title>NextJS Template with Typescript</title>
      </Head>

      <main>
        <ToggleTheme changeTheme={props.themeToggle} currentTheme={props.currentTheme}></ToggleTheme>

        <Card
          holoEffect={holoEffect}
          sparklesEffect={sparklesEffect}
          cardDescription={cardDescription}
          cardName={cardName}
          cardImgSrc={cardImgSrc}
          color={'white'} />

        <FormContainer>
          <label>
            Card Name:
            <input type='text' value={cardName} onChange={e => setCardName(() => e.target.value)} />
          </label>

          <label>
            Card Description:
            <input type='text' value={cardDescription} onChange={e => setCardDescription(() => e.target.value)} />
          </label>

          <label>
            Image Src:
            <input type='text' value={cardImgSrc} onChange={e => setCardImgSrc(() => e.target.value)} />
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

          {/* <RadioButton options={['1', '2']} /> */}
        </FormContainer>
        <footer>
          <a href="https://github.com/Darckfast/nextjs-typescript-template">
            <GitHubIcon></GitHubIcon>
          </a>
        </footer>
      </main>
    </Container>
  )
}

export default Home
