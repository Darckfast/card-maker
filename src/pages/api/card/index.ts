import type { NextApiRequest, NextApiResponse } from 'next'
import { ServerStyleSheet } from 'styled-components'
import { renderToString } from 'react-dom/server'
import Card from '../../../components/card/Card'
import { get } from 'https'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const configs = {
    configs: {
      name: req.query.name as string,
      description: req.query.description as string,
      imgSrc: await getImage(req.query.imgSrc as string),
      holoEffect: req.query.holoEffect === 'true',
      sparklesEffect: req.query.sparklesEffect === 'true',
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
        transition: 'none',
      }
    }
  }

  console.log(configs)

  const sheet = new ServerStyleSheet()

  try {
    const html = renderToString(sheet.collectStyles(Card(configs)))
    const styles = sheet.getStyleTags()

    res.setHeader('Content-Type', 'image/svg+xml')

    return res.status(200).send(`
      <svg
        width="384"
        height="552"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">

        <foreignObject width="384" height="552" style="perspective: 2000px;">
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

  res.status(200).json({ name: 'John Doe' })
}

const getImage = async (url: string) => {
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
