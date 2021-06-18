import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import ToggleTheme, {
  ToggleThemeProps
} from '../components/toggle-theme/ToggleTheme'
import { GitHubIcon } from '../styles/svgs/icons/githubIcon'
import Card from '../components/card/Card'
import { FormContainer } from '../styles/components/Form'
import CheckBox from '../components/checkbox/Checkbox'
import RadioButton from '../components/radio-button/RadioButton'
import { useMouseMovement } from '../hooks/useMouseMovement'
import { querystring } from '../utils/querystring'

const Home: React.FC<ToggleThemeProps> = props => {
  const [code, setCode] = useState('')
  const [animation, registerMouse, resetPosition] = useMouseMovement()

  const [configForm, setConfigForm] = useState({
    name: '',
    description: '',
    colorSchema: 'grey',
    imgSrc: '',
    holo: {
      enabled: false,
      src: ''
    },
    sparkles: {
      enabled: false,
      src: ''
    }
  })

  useEffect(() => {
    setCode(() => querystring(configForm))
  }, [configForm])

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
              type="text"
              autoComplete="off"
              placeholder="Untitled card"
              value={configForm.name}
              onChange={e =>
                setConfigForm(config => ({ ...config, name: e.target.value }))
              }
            />
          </label>

          <label>
            Card Description:
            <input
              type="text"
              autoComplete="off"
              placeholder="Untitled project(1)"
              value={configForm.description}
              onChange={e =>
                setConfigForm(config => ({
                  ...config,
                  description: e.target.value
                }))
              }
            />
          </label>

          <label>
            Image Src:
            <input
              type="text"
              placeholder="https://imgur.com/bC8SSpf.png"
              autoComplete="off"
              value={configForm.imgSrc}
              onChange={e =>
                setConfigForm(config => ({ ...config, imgSrc: e.target.value }))
              }
            />
          </label>

          <CheckBox
            value={configForm.sparkles.enabled}
            label="Enable Sparkles"
            onChangeValue={e =>
              setConfigForm(config => ({
                ...config,
                sparkles: { ...config.sparkles, enabled: e.target.checked }
              }))
            }
          />

          <label>
            Sparkles Src:
            <input
              disabled={!configForm.sparkles.enabled}
              type="text"
              autoComplete="off"
              value={configForm.sparkles.src}
              onChange={e =>
                setConfigForm(config => ({
                  ...config,
                  sparkles: { ...config.sparkles, src: e.target.value }
                }))
              }
            />
          </label>

          <CheckBox
            value={configForm.holo.enabled}
            label="Enable HoloEffect"
            onChangeValue={e =>
              setConfigForm(config => ({
                ...config,
                holo: { ...config.holo, enabled: e.target.checked }
              }))
            }
          />

          <label>
            Holo Src:
            <input
              disabled={!configForm.holo.enabled}
              type="text"
              autoComplete="off"
              placeholder="https://i.imgur.com/QPzHsAF.png"
              value={configForm.holo.src}
              onChange={e =>
                setConfigForm(config => ({
                  ...config,
                  holo: { ...config.holo, src: e.target.value }
                }))
              }
            />
          </label>
        </FormContainer>

        <div onMouseMove={e => registerMouse(e)} onMouseLeave={resetPosition}>
          <svg width="320" height="460">
            <foreignObject
              width="320"
              height="460"
              style={{ perspective: '2000px' }}
            >
              <Card configs={configForm} animation={animation} />
            </foreignObject>
          </svg>
        </div>

        <FormContainer>
          <label>
            Card color schema:
            <RadioButton
              options={[
                { desc: 'Blue', value: 'blue' },
                { desc: 'Red', value: 'red' },
                { desc: 'Black', value: 'black' },
                { desc: 'Grey', value: 'grey' },
                { desc: 'Green', value: 'green' }
              ]}
              onChangeValue={e =>
                setConfigForm(configs => ({
                  ...configs,
                  colorSchema: e.target.value
                }))
              }
            />
          </label>
        </FormContainer>
        <footer>
          <a href="https://github.com/Darckfast/nextjs-typescript-template">
            <GitHubIcon></GitHubIcon>
          </a>

          <ToggleTheme
            changeTheme={props.changeTheme}
            currentTheme={props.currentTheme}
          ></ToggleTheme>
        </footer>

        <div className="code">
          <button onClick={() => navigator.clipboard.writeText(code)}>
            Copy card code
          </button>
        </div>
      </main>
    </Container>
  )
}

export default Home
