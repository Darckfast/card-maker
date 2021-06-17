import type { NextApiRequest, NextApiResponse } from 'next'
import { ServerStyleSheet } from 'styled-components'
import { renderToString } from 'react-dom/server'
import Card from '../../../components/card/Card'
import { get } from 'https'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const configs = {
    name: req.query.name as string,
    description: req.query.description as string,
    imgSrc: req.query.imgSrc as string,
    holo: {
      enabled: req.query['holo[enabled]'] === 'true',
      src: req.query['holo[src]'] as string
    },
    sparkles: {
      enabled: req.query['sparkles[enabled]'] === 'true',
      src: req.query['sparkles[src]'] as string
    },
    backgroundColor: req.query.backgroundColor as string,
    innerBackgroundColor: req.query.innerBackgroundColor as string,
    enableAnimation: true,
    holoPosition: {
      position: {
        x: '50%',
        y: '50%'
      },
      rotation: {
        x: '0deg',
        y: '0deg'
      },
      transition: 'none'
    }
  }

  if (configs.holo.enabled) {
    configs.holo.src = await getImageAsBase64(configs.holo.src as string)
  }

  if (configs.sparkles.enabled) {
    configs.sparkles.src = await getImageAsBase64(
      configs.sparkles.src as string
    )
  }

  const sheet = new ServerStyleSheet()

  try {
    const html = renderToString(sheet.collectStyles(Card({ configs })))
    const styles = sheet.getStyleTags()

    res.setHeader('Content-Type', 'image/svg+xml')

    return res.status(200).send(`
      <svg
        width="384"
        height="552"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="perspective: 2000px;margin: 2rem">

        <foreignObject width="384" height="552" >
          <div xmlns="http://www.w3.org/1999/xhtml">
            ${styles}
            ${html}
          </div>
        </foreignObject>
      </svg>
    `)
  } catch (e) {
    console.log(e)
  } finally {
    sheet.seal()
  }

  res.status(500).json({ msg: 'Erro during card generation' })
}

const getImageAsBase64 = async (url: string) => {
  return new Promise<string>(resolve => {
    const req = get(url, res => {
      res.setEncoding('base64')
      if (res.statusCode !== 200) {
        resolve(null)
      }

      let chunk = ''
      res.on('data', d => {
        chunk += d
      })

      res.on('end', () => {
        resolve('data:' + res.headers['content-type'] + ';base64,' + chunk)
      })
    })

    req.end()
  })
}
