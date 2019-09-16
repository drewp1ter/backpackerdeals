import { InlineStylesHead } from 'components/InlineStylesHead'
import Document, { Head, Main, NextScript } from 'next/document'
import Helmet, { HelmetData } from 'react-helmet'

export interface IProps {
  readonly helmet: HelmetData
}

export default class CustomDocument extends Document<IProps> {
  static async getInitialProps({ renderPage }: any) {
    const { html, head, errorHtml, chunks } = renderPage()
    return { html, head, errorHtml, chunks, helmet: Helmet.renderStatic() }
  }

  // should render on <html>
  get helmetHtmlAttrComponents () {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  // should render on <body>
  get helmetBodyAttrComponents () {
    return  this.props.helmet.bodyAttributes.toComponent()
  }

  // should render on <head>
  get helmetHeadComponents () {
    return Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => this.props.helmet[el as keyof HelmetData].toComponent())
  }

  render() {
    const HeadVar = process.env.NODE_ENV === 'production' ? InlineStylesHead : Head
    return (
      <html {...this.helmetHtmlAttrComponents}>
        <HeadVar>{this.helmetHeadComponents}</HeadVar>
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
          <div id="modal-root" />
        </body>
      </html>
    )
  }
}
