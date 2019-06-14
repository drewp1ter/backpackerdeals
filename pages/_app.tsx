import withRedux from 'next-redux-wrapper'
import App, { Container } from 'next/app'
import * as React from 'react'
import { Provider, ProviderProps } from 'react-redux'
import makeStore from 'store'

import '@fortawesome/fontawesome-free/css/all.css'
import 'normalize.css'
import 'root.scss'

export interface IContextProps {
  isServer: boolean
}

export const AppContext = React.createContext<Partial<IContextProps>>({
  isServer: false,
})

class MyApp extends App<ProviderProps & IContextProps> {
  render() {
    const { Component, pageProps, store, isServer } = this.props
    const context = { isServer }
    return (
      <Container>
        <Provider store={store}>
          <AppContext.Provider value={context}>
            <Component {...pageProps} />
          </AppContext.Provider>
        </Provider>
      </Container>
    )
  }
}

MyApp.getInitialProps = async ({ Component, ctx }: any) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
  const { isServer } = ctx
  return { pageProps, isServer }
}

export default withRedux(makeStore)(MyApp)
