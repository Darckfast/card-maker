import type { NextApiRequest, NextApiResponse } from 'next'
import { ServerStyleSheet } from 'styled-components'
import { renderToString } from 'react-dom/server'
import { Card } from '../../../components/card/Card'
import { get } from 'https'
import { querystring, reverseQuerystring } from '../../../utils/querystring'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const params = reverseQuerystring('?' + querystring(req.query))

  if (params.holo.enabled) {
    params.holo.src = await getImageAsBase64(params.holo.src as string)
  }

  if (params.sparkles.enabled) {
    params.sparkles.src = await getImageAsBase64(params.sparkles.src as string)
  }

  const sheet = new ServerStyleSheet()

  try {
    const html = renderToString(
      sheet.collectStyles(Card({ ...params, enableNaturalAnimation: true }))
    )
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

  return res.status(500).json({ msg: 'Erro during card generation' })
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
