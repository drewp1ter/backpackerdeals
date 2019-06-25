import React, { Component } from 'react'

import { AdvancedSearch } from 'components'
import { SelectContinent, SelectMenu } from '..'
import { MobileMenu } from '../../containers'

import BlackLogo from './assets/blackLogo.svg'
import Logo from './assets/logo_Header.svg'
import { currencies, languages } from './constants'
import styles from './Header.module.scss'

interface IProps {
  readonly theme?: string
}

export class Header extends Component<IProps> {
  state = {
    currentLanguage: 'english',
    currentCurrency: 'aud',
    scrolled: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.throttle(this.handleScroll, 400))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.throttle(this.handleScroll, 400))
  }

  throttle = (method: () => void, wait: number) => {
    let isThrottling = false

    return (...args: any) => {
      if (!isThrottling) {
        method.apply(this, args)
        isThrottling = true
        setTimeout(() => {
          isThrottling = false
        }, wait)
      }
    }
  }

  handleScroll = () => {
    if (window.pageYOffset > 200) {
      if (!this.state.scrolled) {
        this.setState({ scrolled: true })
      }
    } else {
      if (this.state.scrolled) {
        this.setState({ scrolled: false })
      }
    }
  }

  handleChangeLanguage = (event: React.MouseEvent<HTMLElement>) => {
    const language = event.currentTarget.dataset.language || ''
    this.setState({ currentLanguage: language })
  }

  handleChangeCurrency = (event: React.MouseEvent<HTMLElement>) => {
    const currency = event.currentTarget.dataset.currency || ''
    this.setState({ currentCurrency: currency })
  }

  render() {
    const { theme } = this.props
    const { currentCurrency, currentLanguage, scrolled } = this.state

    const languageOpener: React.ReactNode = (
      <div className={styles.languageOpener}>
        <img src={languages[currentLanguage].icon} alt={languages[currentLanguage].name}/>
        <span> {languages[currentLanguage].name.slice(0, 3)}</span>
      </div>
    )

    const currencyOpener: React.ReactNode = (
      <span>
        {currencies[currentCurrency].icon} {currencies[currentCurrency].name}
      </span>
    )

    const continentOpener: React.ReactNode = <span className={styles.continentOpener}>Explore by country</span>
    return (
      <header data-theme={scrolled ? 'dark' : theme}>
        <div className={styles.tools}>
          <div className={styles.logoAndSearch}>
            <img src={Logo} alt="Logo" className={styles.logo}/>
            <img src={BlackLogo} alt="Logo" className={styles.blackLogo}/>
            <AdvancedSearch theme={scrolled ? 'dark' : theme}/>
          </div>
          <div className={styles.tours}>
            <SelectMenu openerClass={styles.selectContinentOpener} opener={continentOpener} title="Select continent"
                        size="lg" pos="left">
              <SelectContinent displayTheme="flex"/>
            </SelectMenu>
            <a href="">Top Deals</a>
            <a href="">Last Minute Deals</a>
          </div>
          <div className={styles.currencyAndLanguage}>
            <a href="">
              <i className="fas fa-phone"/>
              <span>+ 61 3 90163720</span>
            </a>
            <SelectMenu
              openerClass={styles.currencyAndLanguageOpener}
              opener={currencyOpener}
              title={scrolled ? "Select currency" : ""}
              size={scrolled ? 'md' : 'unset'}
            >
              <div className={scrolled ? styles.currencies : styles.currenciesList}>
                {Object.entries(currencies).map((currency, index) => (
                  <p
                    onClick={this.handleChangeCurrency}
                    className={styles.currency}
                    key={`${currency[0]}-${index}`}
                    data-active={currency[0] === currentCurrency}
                    data-currency={currency[0]}
                  >
                    {currency[1].name} {currency[1].icon}
                  </p>
                ))}
              </div>

              {scrolled && (
                <div>
                  <h6>Please note</h6>
                  <p className={styles.note}>
                    Currency Conversions are approximate guide only. All transactions are processed in their respective
                    currency
                  </p>
                </div>
              )}

            </SelectMenu>
            <SelectMenu
              openerClass={styles.currencyAndLanguageOpener}
              opener={languageOpener}
              title={scrolled ? "Select currency" : ""}
              size={scrolled ? 'md' : 'unset'}
            >
              <div className={scrolled ? styles.languages : styles.languagesList}>
                {Object.entries(languages).map((language, index) => (
                  <div
                    onClick={this.handleChangeLanguage}
                    key={`language-${index}`}
                    className={styles.language}
                    data-active={language[0] === currentLanguage}
                    data-language={language[0]}
                  >
                    <img src={language[1].icon} alt={language[1].name}/>
                    <span>{language[1].name}</span>
                  </div>
                ))}
              </div>
            </SelectMenu>
            <div className={styles.profileIcon}>
              <i className="fas fa-user"/>
            </div>
          </div>
          <div className={styles.mobileTools}>
            <MobileMenu theme={scrolled ? 'dark' : theme}/>
          </div>
        </div>
      </header>
    )
  }
}
