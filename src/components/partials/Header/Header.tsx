import * as React from 'react'

import classNames from 'classnames'

import { HeaderInput } from 'components/base'
import { HeaderSelectMenu } from 'features/home/components'

import Logo from './assets/logo_Header.svg'
import Chinese from './assets/chineese.png'
import English from './assets/english.png'
import French from './assets/french.png'
import German from './assets/german.png'
import Russian from './assets/russian.png'
import Spanish from './assets/spain.png'
import Portuguese from './assets/portuguese.png'

import styles from './Header.module.scss'

interface IProps {
  readonly currentLanguage: string
  readonly currentCurrency: string
  readonly handleChangeLanguage: (event: React.MouseEvent<HTMLElement>) => void
  readonly handleChangeCurrency: (event: React.MouseEvent<HTMLElement>) => void
}

interface IIcons {
  [key: string]: {
    icon: string
    name: string
  }
}

const languages: IIcons = {
  english: { icon: English, name: 'English' },
  spanish: { icon: Spanish, name: 'Spanish' },
  german: { icon: German, name: 'German' },
  russian: { icon: Russian, name: 'Russian' },
  chinese: { icon: Chinese, name: 'Chinese' },
  french: { icon: French, name: 'French' },
  portuguese: { icon: Portuguese, name: 'Portuguese' },
}

const currencies: IIcons = {
  aud: { name: 'AUD', icon: '$' },
  thb: { name: 'THB', icon: 'B' },
  eur: { name: 'EUR', icon: '€' },
  gbp: { name: 'GBP', icon: '£' },
  nzd: { name: 'NZD', icon: '$' },
  jpy: { name: 'JPY', icon: '¥' },
  usd: { name: 'USD', icon: '$' },
  fjd: { name: 'FJD', icon: '$' },
  zar: { name: 'ZAR', icon: 'R' },
}

export const Header: React.FC<IProps> = ({ currentLanguage, currentCurrency, handleChangeLanguage, handleChangeCurrency }) => {
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

  return (
    <header>
      <div className={styles.tools}>
        <div className={styles.logoAndSearch}>
          <img src={Logo} alt="Logo" className="logo" />
          <div className="advanced-search" />
        </div>
        <div className={styles.tours}>
          <div className={styles.explore} />
          <a href="">Top Deals</a>
          <a href="">Last Minute Deals</a>
        </div>
        <div className={styles.currencyAndLanguage}>
          <a href="">
            <i className="fas fa-phone" />
            <span>+ 61 3 90163720</span>
          </a>
          <HeaderSelectMenu opener={currencyOpener} title="Select currency">
            <div className={styles.currencies}>
              {Object.entries(currencies).map((currency, index) => (
                <p
                  onClick={handleChangeCurrency}
                  className={classNames(styles.currency, currency[0] === currentCurrency && styles.active)}
                  key={`${currency[0]}-${index}`}
                  data-currency={currency[0]}
                >
                  {currency[1].name} {currency[1].icon}
                </p>
              ))}
            </div>

            <h6>Please note</h6>
            <p className={styles.note}>
              Currency Conversions are approximate guide only. All transactions are processed in their respective currency
            </p>
          </HeaderSelectMenu>
          <HeaderSelectMenu opener={languageOpener} title="Select your language">
            <div className={styles.languages}>
              {Object.entries(languages).map((language, index) => (
                <div
                  onClick={handleChangeLanguage}
                  key={`language-${index}`}
                  className={classNames(styles.language, language[0] === currentLanguage && 'active')}
                  data-language={language[0]}
                >
                  <img src={language[1].icon} alt={language[1].name} />
                  <span>{language[1].name}</span>
                </div>
              ))}
            </div>
          </HeaderSelectMenu>
        </div>
      </div>
      <h1>Search Less, Travel More</h1>
      <h2>Great experience at backpacker prices</h2>
      <HeaderInput />
    </header>
  )
}
