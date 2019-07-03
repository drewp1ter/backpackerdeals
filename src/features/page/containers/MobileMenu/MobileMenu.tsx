import React, { useState } from 'react'

import { Button, MobileMenuWrapper, Select } from 'components'
import { MobileSelectMenu } from 'features/page/components'
import { SearchActions } from 'features/search'
import { SearchRadio } from 'features/search/components'
import { PageActions } from '../..'
import { SelectContinent } from '../../components'

import Types from 'Types'
import { numberOfDays, startLocation } from '../../../../components/AdvancedSearch/data'
import { currencies, IIconInfo, languages } from '../../components/Header/constants'
import { cities, countries, options } from './data'

import styles from './MobileMenu.module.scss'

interface IProps {
  readonly theme?: string
}

export const MobileMenu: React.FC<Partial<Types.RootState> & PageActions & SearchActions & IProps> =
  ({
    search,
    page,
    theme,
    openMenu,
    closeMenu,
    openSearch,
    closeSearch,
    changeSearchType,
  }) => {
  const fields = {
    startLocation: 'Start location',
    typeOfTour: 'Type of tour',
    endLocation: 'End location',
    date: new Date(),
    numberOfDays: 'Number of days',
    currency: currencies.aud,
    language: languages.english,
  };

  const [searchQuery, changeSearch] = React.useState('')
  const [multiDayTour, selectTourType] = React.useState(false)
  const [selected, setSelected] = useState({...fields})

  const handleChange = (value: any, key: string) => setSelected({ ...selected, [key]: value })

  // const handleChangeDate = (value: Date) => handleChange(value, 'date')

  const handleClickReset = () => setSelected({...fields})
  const handleClickOption = (value: any, key: string) => {
    blurActiveElement();
    handleChange(value, key)
  }

  const blurActiveElement = () => {
      if (window.document.activeElement !== null) {
        (window.document.activeElement as HTMLElement).blur()
      }
  }

  const currencyFormatFn = (currency: IIconInfo) => `${currency.icon} ${currency.name}`
  const languageFormatFn = (language: IIconInfo) => language.name

  return (
    <div className={styles.mobileMenu} data-theme={theme}>
      <button onClick={openSearch} className={styles.searchIcon}>
        <span>Search</span>
        <i className="fas fa-search"/>
      </button>
      <button onClick={openMenu} className={styles.menuIcon}>
        <i className="fas fa-bars"/>
      </button>

      <MobileMenuWrapper className={styles.menu} open={page!.menuIsOpen}>
        <div className={styles.mobileHeader}>
          <p>
            <i className="fas fa-phone-alt"/>
            <span>+ 61 3 90163720</span>
          </p>

          <button onClick={closeMenu}>
            <i className="fas fa-times"/>
          </button>
        </div>
        <hr/>
        <div className={styles.navigation}>
          <div onClick={openSearch} className={styles.menuItem}>
            <div className={styles.title}>
              <i className="fas fa-search"/>
              <span>Search</span>
            </div>
            <div className={styles.additionalTitle}>
              <span>{search!.searchType === 'advanced' ? 'Advanced search' : 'Basic search'}</span>
              <i className="fas fa-filter"/>
            </div>
          </div>
          <MobileSelectMenu
            title="Explore by country"
            leftIcon="fas fa-map-marker-alt"
            rightIcon="fas fa-chevron-right"
            reversableIcon="right"
            reverseType="90"
          >
            <SelectContinent theme="mobile"/>
          </MobileSelectMenu>
          <div className={styles.menuItem}>
            <div className={styles.title}>
              <i className="fas fa-thumbs-up"/>
              <span>Top Deals</span>
            </div>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.title}>
              <i className="fas fa-clock"/>
              <span>Last Minute Deals</span>
            </div>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.title}>
              <i className="fas fa-user-alt"/>
              <span>Sign up</span>
            </div>
          </div>
          <h5>Settings</h5>
          <MobileSelectMenu
            childrenClassName={styles.currencies}
            leftIcon="fas fa-chevron-down"
            reversableIcon="left"
            selected={selected.currency}
            format={currencyFormatFn}
            reverseType="180"
          >
            {Object.entries(currencies).map((currency, index) => (
              <p key={`${currency[0]}-${index}`}
                 data-currency={currency[1]}
                 data-field="currency"
                 onClick={() => handleClickOption(currency[1], 'currency')}>
                {currency[1].name} {currency[1].icon}
              </p>
            ))}
          </MobileSelectMenu>
          <MobileSelectMenu
            childrenClassName={styles.languages}
            leftIcon="fas fa-chevron-down"
            reversableIcon="left"
            selected={selected.language}
            format={languageFormatFn}
            reverseType="180"
          >
            {Object.entries(languages).map((language, index) => (
              <div className={styles.languages}
                   onMouseDown={() => handleClickOption(language[1], 'language')}
                   key={`language-${index}`}>
                <img src={language[1].icon} alt={language[1].name}/>
                <span>{language[1].name}</span>
              </div>
            ))}
          </MobileSelectMenu>
        </div>
      </MobileMenuWrapper>
      <MobileMenuWrapper className={styles.search} open={search!.searchIsOpen}>
        <div className={styles.searchHeader}>
          <i onClick={closeSearch} className="fas fa-arrow-left"/>
          <span onClick={() => changeSearchType('basic')} data-active={search!.searchType === 'basic'}>
            Basic Search
          </span>
          <span onClick={() => changeSearchType('advanced')} data-active={search!.searchType === 'advanced'}>
            Advanced Search
          </span>
        </div>
        <hr/>
        <>
          {search!.searchType === 'basic' ? (
            <>
              <div className={styles.searchInput}>
                <input type="text" placeholder="Try Australia" value={searchQuery}
                       onChange={event => changeSearch(event.target.value)}/>
                <i className="fas fa-search"/>
              </div>
              {countries.filter(country => country.includes(searchQuery)).length > 0 && (
                <>
                  <h5>Countries</h5>
                  <div className={styles.results}>
                    {countries
                      .filter(country => country.includes(searchQuery))
                      .map((country, index) => (
                        <p key={`${country}-${index}`}>{country}</p>
                      ))}
                  </div>
                </>
              )}

              {cities.filter(city => city.includes(searchQuery)).length > 0 && (
                <>
                  <h5>Cities</h5>
                  <div className={styles.results}>
                    {cities
                      .filter(city => city.includes(searchQuery))
                      .map((city, index) => (
                        <p key={`${city}-${index}`}>{city}</p>
                      ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <Select bodyTheme="mobile"
                      selectedOption={selected.startLocation}
                      options={options}
                      onChange={value => handleChange(value, 'startLocation')}
                      theme="dark"/>
              <div className={styles.radioButtons}>
                <SearchRadio placeholder="Day Tour" selected={!multiDayTour} onClick={() => selectTourType(false)}/>
                <SearchRadio placeholder="Multi day Tour" selected={multiDayTour} onClick={() => selectTourType(true)}/>
              </div>
              <Select bodyTheme="mobile"
                      selectedOption={selected.typeOfTour}
                      options={startLocation}
                      onChange={value => handleChange(value, 'typeOfTour')}
                      theme="dark"/>
              <Select bodyTheme="mobile"
                      selectedOption={selected.endLocation}
                      options={options}
                      onChange={value => handleChange(value, 'endLocation')}
                      theme="dark"/>
              <Select bodyTheme="mobile"
                      selectedOption={selected.numberOfDays}
                      options={numberOfDays}
                      onChange={value => handleChange(value, 'numberOfDays')}
                      theme="dark"/>
              <div className={styles.advancedSearchButtons}>
                <Button className={styles.orangeButton} theme="orange" form="rectangled">
                  SEARCH
                </Button>
                <button className={styles.resetButton} onClick={handleClickReset}>Reset search</button>
              </div>
            </>
          )}
        </>
      </MobileMenuWrapper>
    </div>
  )
}
