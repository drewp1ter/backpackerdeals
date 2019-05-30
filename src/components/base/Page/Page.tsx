import * as React from 'react'

import { Footer, Header } from 'components/partials'

interface IProps {
  readonly children?: React.ReactNode
}

interface IState {
  readonly language: string
  readonly currency: string
}

export class Page extends React.Component<IProps, IState> {
  state = {
    language: 'english',
    currency: 'aud',
  }

  public handleChangeLanguage = (language: string) => this.setState({ language: language })

  public handleChangeCurrency = (currency: string) => this.setState({ currency: currency })

  render() {
    const { children } = this.props
    const { language, currency } = this.state
    return (
      <div>
        <Header
          handleChangeLanguage={this.handleChangeLanguage}
          handleChangeCurrency={this.handleChangeCurrency}
          currentLanguage={language}
          currentCurrency={currency}
        />
        {children}
        <Footer />
      </div>
    )
  }
}
