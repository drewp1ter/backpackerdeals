import React, { useState } from 'react'

import { AdvancedSearch } from 'components'
import { SelectContinent, SelectMenu } from '..'

import Logo from './assets/logo_Header.svg'
import { currencies, languages } from './constants'
import styles from './Header.module.scss'

export const Header: React.FC = () => {
  const [currentLanguage, setLanguage] = useState<string>('english')
  const [currentCurrency, setCurrency] = useState<string>('aud')

  const handleChangeLanguage = (event: React.MouseEvent<HTMLElement>) => {
    const language = event.currentTarget.dataset.language || ''
    setLanguage(language)
  }

  const handleChangeCurrency = (event: React.MouseEvent<HTMLElement>) => {
    const currency = event.currentTarget.dataset.currency || ''
    setCurrency(currency)
  }

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
          <AdvancedSearch />
        </div>
        <div className={styles.tours}>
          <SelectContinent />
          <div className={styles.explore} />
          <a href="">Top Deals</a>
          <a href="">Last Minute Deals</a>
        </div>
        <div className={styles.currencyAndLanguage}>
          <a href="">
            <i className="fas fa-phone" />
            <span>+ 61 3 90163720</span>
          </a>
          <SelectMenu opener={currencyOpener} title="Select currency">
            <div className={styles.currencies}>
              {Object.entries(currencies).map((currency, index) => (
                <p
                  onClick={handleChangeCurrency}
                  className={styles.currency}
                  key={`${currency[0]}-${index}`}
                  data-active={currency[0] === currentCurrency}
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
          </SelectMenu>
          <SelectMenu opener={languageOpener} title="Select your language">
            <div className={styles.languages}>
              {Object.entries(languages).map((language, index) => (
                <div
                  onClick={handleChangeLanguage}
                  key={`language-${index}`}
                  className={styles.language}
                  data-active={language[0] === currentLanguage}
                  data-language={language[0]}
                >
                  <img src={language[1].icon} alt={language[1].name} />
                  <span>{language[1].name}</span>
                </div>
              ))}
            </div>
          </SelectMenu>
          <div className={styles.profileIcon}>
            <i className="fas fa-user" />
          </div>
        </div>
      </div>
    </header>
  )
}
