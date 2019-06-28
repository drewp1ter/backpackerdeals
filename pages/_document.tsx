import { InlineStylesHead } from 'components/InlineStylesHead'
import Document, { Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
  static getInitialProps({ renderPage }: any) {
    const { html, head, errorHtml, chunks } = renderPage()
    return { html, head, errorHtml, chunks }
  }

  render() {
    const HeadVar = process.env.NODE_ENV === 'production' ? InlineStylesHead : Head
    return (
      <html lang="en">
        <HeadVar>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" />
          {/*<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossOrigin="anonymous" />*/}
        </HeadVar>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
