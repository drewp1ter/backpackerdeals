import withRedux from 'next-redux-wrapper'
import App, { Container } from 'next/app'
import * as React from 'react'
import Helmet from 'react-helmet'
import { Provider, ProviderProps } from 'react-redux'
import makeStore from 'store'

import 'fontAwesome.css'
import 'normalize.css'
import 'scss/root.scss'

class MyApp extends App<ProviderProps> {
  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <>
            <Helmet
              htmlAttributes={{ lang: 'en' }}
              title="Backpackerdeals"
              meta={[
                {
                  name: 'viewport',
                  content: 'width=device-width, initial-scale=1',
                },
                { property: 'og:title', content: 'Backpackerdeals' },
              ]}
            />
            <Component {...pageProps} />
          </>
        </Provider>
      </Container>
    )
  }
}

MyApp.getInitialProps = async ({ Component, ctx }: any) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
  return { pageProps }
}

export default withRedux(makeStore)(MyApp)
