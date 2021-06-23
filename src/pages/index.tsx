import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import { ToggleTheme } from '../components/toggle-theme/ToggleTheme'
import { GitHubIcon } from '../styles/svgs/icons/githubIcon'
import {
  FormContainer,
  FormBackground,
  LabelInput
} from '../styles/components/Form'
import { useMouseMovement } from '../hooks/useMouseMovement'
import { querystring, reverseQuerystring } from '../utils/querystring'
import { darkTheme } from '../styles/theme'
import { Card } from '../components/card/Card'
import { CheckBox } from '../components/checkbox/Checkbox'
import { RadioButton } from '../components/radio-button/RadioButton'

const Home: React.FC = () => {
  const [code, setCode] = useState('')
  const [animation, registerMouse, resetPosition, changeValue] =
    useMouseMovement()

  const [configForm, setConfigForm] = useState({
    name: '',
    description: '',
    colorSchema: darkTheme.cardTheme.grey,
    imgSrc: '',
    holo: {
      enabled: false,
      src: 'https://i.imgur.com/QPzHsAF.png'
    },
    sparkles: {
      enabled: false,
      src: ''
    },
    noise: {
      enabled: false,
      src: 'https://imgur.com/bGJ7wi9.png'
    },
    type: 'glass'
  })

  useEffect(() => {
    setCode(
      () => `${window.location.origin}/api/card?${querystring(configForm)}`
    )
  }, [configForm])

  const reverseQuerystringMiddleware = async (e: Promise<string>) => {
    const inputtedQs = await e

    if (!inputtedQs.length) {
      console.log('No info found')
    }

    setConfigForm(config => ({ ...config, ...reverseQuerystring(inputtedQs) }))
  }

  return (
    <Container>
      <Head>
        <title>NextJS Template with Typescript</title>
      </Head>
      <main>
        <FormContainer>
          <LabelInput>
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
          </LabelInput>

          <LabelInput>
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
          </LabelInput>

          <LabelInput>
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
          </LabelInput>

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

          <LabelInput>
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
          </LabelInput>

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

          <LabelInput>
            Holo Src:
            <input
              disabled={!configForm.holo.enabled}
              type="text"
              autoComplete="off"
              placeholder="Src of holo png"
              value={configForm.holo.src}
              onChange={e =>
                setConfigForm(config => ({
                  ...config,
                  holo: { ...config.holo, src: e.target.value }
                }))
              }
            />
          </LabelInput>

          <CheckBox
            value={configForm.noise.enabled}
            label="Enable Noise"
            onChangeValue={e =>
              setConfigForm(config => ({
                ...config,
                noise: { ...config.noise, enabled: e.target.checked }
              }))
            }
          />

          <LabelInput>
            Noise Src:
            <input
              disabled={!configForm.noise.enabled}
              type="text"
              autoComplete="off"
              placeholder="Src of noise png"
              value={configForm.noise.src}
              onChange={e =>
                setConfigForm(config => ({
                  ...config,
                  noise: { ...config.noise, src: e.target.value }
                }))
              }
            />
          </LabelInput>
        </FormContainer>

        <FormBackground
          onMouseMove={e => registerMouse(e)}
          onMouseLeave={resetPosition}
        >
          <svg width="320" height="460">
            <foreignObject
              width="320"
              height="460"
              style={{ perspective: '2000px' }}
            >
              <Card {...{ ...configForm, ...animation }} />
            </foreignObject>
          </svg>
        </FormBackground>

        <FormContainer>
          <LabelInput>
            Card color schema:
            <RadioButton
              options={[
                { desc: 'Blue', value: 'blue' },
                { desc: 'Red', value: 'red' },
                { desc: 'Black', value: 'black' },
                { desc: 'Grey', value: 'grey' },
                { desc: 'Green', value: 'green' },
                { desc: 'Transparent', value: 'transparent' }
              ]}
              type="card_color"
              onChangeValue={e =>
                setConfigForm(configs => ({
                  ...configs,
                  colorSchema: darkTheme.cardTheme[e.target.value]
                }))
              }
            />
          </LabelInput>

          <LabelInput>
            Card type:
            <RadioButton
              options={[
                { desc: 'Solid', value: 'solid' },
                { desc: 'Glass', value: 'glass' }
              ]}
              type="card_type"
              onChangeValue={e =>
                setConfigForm(configs => ({
                  ...configs,
                  type: e.target.value
                }))
              }
            />
          </LabelInput>

          <CheckBox
            value={animation.enableAnimation}
            label="Mouse animation"
            onChangeValue={e =>
              changeValue('enableAnimation', e.target.checked)
            }
          />

          <CheckBox
            value={animation.enableNaturalAnimation}
            label="Natural animation"
            onChangeValue={e =>
              changeValue('enableNaturalAnimation', e.target.checked)
            }
          />
        </FormContainer>
        <footer>
          <a href="https://github.com/Darckfast/nextjs-typescript-template">
            <GitHubIcon></GitHubIcon>
          </a>

          <ToggleTheme />
        </footer>

        <div className="code">
          <button onClick={() => navigator.clipboard.writeText(code)}>
            Copy card code
          </button>
          <button
            onClick={() =>
              reverseQuerystringMiddleware(navigator.clipboard.readText())
            }
          >
            Paste card code
          </button>
        </div>
      </main>
    </Container>
  )
}

export default Home
