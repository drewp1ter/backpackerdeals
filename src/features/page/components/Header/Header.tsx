import Link from 'next/link'
import React, { Component } from 'react'

import { AdvancedSearch, Cookies, SelectContinent, SelectMenu } from '..'
import { MobileMenu } from '../../containers'
import { getCookie } from '../Cookies/CookieManager'
import BlackLogo from './assets/blackLogo.svg'
import Logo from './assets/logo_Header.svg'
import { currencies, languages } from './constants'
import styles from './Header.module.scss'

interface IProps {
  readonly theme?: string
}

export interface IState {
  readonly currentLanguage: number
  readonly currentCurrency: number
  readonly scrolled: boolean
  readonly hasCookies: boolean
}

export class Header extends Component<IProps, IState> {
  state = {
    currentLanguage: 0,
    currentCurrency: 0,
    scrolled: false,
    hasCookies: true,
  }

  componentDidMount() {
    addEventListener('scroll', this.handleTrottleScroll)

    const hasCookie = getCookie('disallow_page_cookies')

    if (!hasCookie) {
      this.setState({ hasCookies: false })
    }
  }

  componentWillUnmount() {
    removeEventListener('scroll', this.handleTrottleScroll)
  }

  handleTrottleScroll = () => this.throttle(this.handleScroll, 400)

  throttle = (method: () => void, wait: number) => {
    let isThrottling = false
    if (!isThrottling) {
      method.apply(this)
      isThrottling = true
      setTimeout(() => {
        method.apply(this)
        isThrottling = false
      }, wait)
    }
  }

  blurActiveElement = () => {
    if (window.document.activeElement !== null) {
      ;(window.document.activeElement as HTMLElement).blur()
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

  handleChangeLanguage = ({ currentTarget }: React.MouseEvent<HTMLElement>) => {
    const language = Number(currentTarget.dataset.idx)
    this.blurActiveElement()
    this.setState({ currentLanguage: language })
  }

  handleChangeCurrency = ({ currentTarget }: React.MouseEvent<HTMLElement>) => {
    const currency = Number(currentTarget.dataset.idx)
    this.blurActiveElement()
    this.setState({ currentCurrency: currency })
  }

  handleSetCookies = () => this.setState({ hasCookies: true })

  render() {
    const { theme } = this.props
    const { currentCurrency, currentLanguage, scrolled, hasCookies } = this.state

    const languageOpener: React.ReactNode = (
      <div className={styles.languageOpener}>
        <img src={languages[currentLanguage].icon} alt={languages[currentLanguage].name} />
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
        {!hasCookies && <Cookies className={styles.cookiesContainer} onSetCookies={this.handleSetCookies} />}

        <div className={styles.tools}>
          <div>
            <div className={styles.logoAndSearch}>
              <Link href="/">
                <a>
                  <img src={Logo} alt="Logo" className={styles.logo} />
                  <img src={BlackLogo} alt="Logo" className={styles.blackLogo} />
                </a>
              </Link>
              <AdvancedSearch theme={scrolled ? 'dark' : theme} />
            </div>
            <div className={styles.tours}>
              <SelectMenu openerClass={styles.selectContinentOpener} opener={continentOpener} title="Select continent" size="lg" pos="left">
                <SelectContinent displayTheme="flex" />
              </SelectMenu>
              <a href="">Top Deals</a>
              <a href="">Last Minute Deals</a>
            </div>
            <div className={styles.currencyAndLanguage}>
              <a href="">
                <i className="fas fa-phone" />
                <span>+ 61 3 90163720</span>
              </a>
              <SelectMenu openerClass={styles.currencyAndLanguageOpener} opener={currencyOpener} title="Select currency">
                <>
                  <div className={styles.currencies}>
                    {currencies.map((currency, idx) => (
                      <p
                        onClick={this.handleChangeCurrency}
                        className={styles.currency}
                        key={idx}
                        data-active={idx === currentCurrency}
                        data-idx={idx}
                      >
                        {currency.name} {currency.icon}
                      </p>
                    ))}
                  </div>
                  <h6 className={styles.noteTitle}>Please note</h6>
                  <p className={styles.note}>
                    Currency Conversions are approximate guide only. All transactions are processed in their respective currency
                  </p>
                </>
              </SelectMenu>
              <SelectMenu openerClass={styles.currencyAndLanguageOpener} opener={languageOpener} title="Select your language">
                <div className={styles.languages}>
                  {languages.map((language, idx) => (
                    <div
                      onClick={this.handleChangeLanguage}
                      key={idx}
                      className={styles.language}
                      data-active={idx === currentLanguage}
                      data-idx={idx}
                    >
                      <img src={language.icon} alt={language.name} />
                      <span>{language.name}</span>
                    </div>
                  ))}
                </div>
              </SelectMenu>
              <div className={styles.profileIcon}>
                <i className="fas fa-user" />
              </div>
            </div>
            <div className={styles.mobileTools}>
              <MobileMenu theme={scrolled ? 'dark' : theme} />
            </div>
          </div>
        </div>
      </header>
    )
  }
}