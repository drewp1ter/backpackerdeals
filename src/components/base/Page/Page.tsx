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

  public handleChangeLanguage = (event: React.MouseEvent<HTMLElement>) => {
    const language = event.currentTarget.dataset.language || ''
    this.setState({ language })
  } 

  public handleChangeCurrency = (event: React.MouseEvent<HTMLElement>) => {
    const currency = event.currentTarget.dataset.currency || ''
    this.setState({ currency })
  }

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
