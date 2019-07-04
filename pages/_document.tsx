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
        <HeadVar />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
