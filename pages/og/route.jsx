import { ImageResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(req) {
  const { searchParams } = req.nextUrl
  const postTitle = searchParams.get('title')
  const postDescription = searchParams.get('description')

  const font = fetch(
    new URL(
      '../../public/fonts/soehne/soehne-dreiviertelfett.woff2',
      import.meta.url
    )
  ).then(res => res.arrayBuffer())
  const fontData = await font

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage:
            'url(https://res.cloudinary.com/doolrgmzd/image/upload/v1691466255/cover/og.png)'
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: 'flex',
            fontSize: 100,
            fontFamily: 'Soehne',
            letterSpacing: '-0.05em',
            fontStyle: 'normal',
            color: 'white',
            lineHeight: '120px',
            whiteSpace: 'pre-wrap'
          }}
        >
          {postTitle}
        </div>
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: 'flex',
            fontSize: 50,
            fontFamily: 'Soehne',
            letterSpacing: '2.5em',
            fontStyle: 'normal',
            color: 'white',
            lineHeight: '70px',
            whiteSpace: 'pre-wrap'
          }}
        >
          {postDescription}
        </div>
      </div>
    ),
    {
      width: 1640,
      height: 924,
      fonts: [
        {
          name: 'Soehne',
          data: fontData,
          style: 'normal'
        }
      ]
    }
  )
}
