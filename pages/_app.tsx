import withRedux from 'next-redux-wrapper'
import App, { Container } from 'next/app'
import React from 'react'
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
          <Component {...pageProps} />
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
