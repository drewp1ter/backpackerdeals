import React, { useState } from 'react'

import { Button, Calendar, MobileMenuWrapper, Select } from 'components'
import { ISearchActions } from 'features/search'
import moment from 'moment'
import { PageActions } from '../..'
import { MobileSelectMenu, SelectContinent } from '../../components'

import { numberOfDays, startLocation } from 'features/page/components/AdvancedSearch/data'
import Types from 'Types'
import { currencies, IIconInfo, languages } from '../../components/Header/constants'
import { cities, countries, options } from './data'

import styles from './MobileMenu.module.scss'

interface IProps {
  readonly theme?: string
}

export const MobileMenu: React.FC<Partial<Types.RootState> & Partial<PageActions> & Partial<ISearchActions> & IProps> = ({
  search,
  page,
  theme,
  openMenu,
  closeMenu,
  openSearch,
  closeSearch,
  changeSearchType,
}) => {
  const initialState = {
    startLocation: '',
    endLocation: '',
    date: undefined,
    numberOfDays: '',
    currency: currencies.aud,
    language: languages.english,
    searchQuery: ''
  }

  const [state, setState] = useState({ ...initialState })
  const handleChange = (value: any, key: string) => setState({ ...state, [key]: value })
  const handleChangeDate = (value: Date) => handleChange(value, 'date')
  const handleChangeSearch = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => setState({ ...state, [name]: value })
  const handleChangeSearchType = ({ currentTarget }: React.MouseEvent<HTMLSpanElement>) => {
    const searchType: any = currentTarget.dataset.type
    changeSearchType && changeSearchType(searchType)
  }

  const handleClickReset = () => setState({ ...initialState })
  const handleClickOption = (value: any, key: string) => {
    blurActiveElement()
    handleChange(value, key)
  }

  const blurActiveElement = () => {
    if (window.document.activeElement !== null) {
      ;(window.document.activeElement as HTMLElement).blur()
    }
  }

  const currencyFormatFn = (currency: IIconInfo) => `${currency.icon} ${currency.name}`
  const languageFormatFn = (language: IIconInfo) => language.name
  const dateFormatFn = () => state.date && moment(state.date).format('DD/MM/YYYY')

  return (
    <div className={styles.mobileMenu} data-theme={theme}>
      <button onClick={openSearch} className={styles.searchIcon}>
        <span>Search</span>
        <i className="fas fa-search" />
      </button>
      <button onClick={openMenu} className={styles.menuIcon}>
        <i className="fas fa-bars" />
      </button>

      <MobileMenuWrapper className={styles.menu} open={page!.menuIsOpen}>
        <>
          <div className={styles.mobileHeader}>
            <p>
              <i className="fas fa-phone-alt" />
              <span>+ 61 3 90163720</span>
            </p>

            <button onClick={closeMenu}>
              <i className="fas fa-times" />
            </button>
          </div>

          <ul className={styles.navigation}>
            <li onClick={openSearch} className={styles.menuItem}>
              <div className={styles.title}>
                <i className="fas fa-search" />
                <span>Search</span>
              </div>
              <div className={styles.additionalTitle}>
                <span>{search!.searchType === 'advanced' ? 'Advanced search' : 'Basic search'}</span>
                <i className="fas fa-filter" />
              </div>
            </li>
            <MobileSelectMenu
              title="Explore by country"
              leftIcon="fas fa-map-marker-alt"
              rightIcon="fas fa-chevron-right"
              reversableIcon="right"
              reverseType="90"
            >
              <SelectContinent theme="mobile" handleClose={closeMenu} />
            </MobileSelectMenu>
            <li className={styles.menuItem}>
              <div className={styles.title}>
                <i className="fas fa-thumbs-up" />
                <span>Top Deals</span>
              </div>
            </li>
            <li className={styles.menuItem}>
              <div className={styles.title}>
                <i className="fas fa-clock" />
                <span>Last Minute Deals</span>
              </div>
            </li>
            <li className={styles.menuItem}>
              <div className={styles.title}>
                <i className="fas fa-user-alt" />
                <span>Sign up</span>
              </div>
            </li>
            <h5>Settings</h5>
            <MobileSelectMenu
              childrenClassName={styles.currencies}
              leftIcon="fas fa-chevron-down"
              reversableIcon="left"
              selected={state.currency}
              format={currencyFormatFn}
              reverseType="180"
            >
              {Object.entries(currencies).map((currency, index) => (
                <p key={index} data-currency={currency[1]} data-field="currency" onClick={() => handleClickOption(currency[1], 'currency')}>
                  {currency[1].name} {currency[1].icon}
                </p>
              ))}
            </MobileSelectMenu>
            <MobileSelectMenu
              childrenClassName={styles.languages}
              leftIcon="fas fa-chevron-down"
              reversableIcon="left"
              selected={state.language}
              format={languageFormatFn}
              reverseType="180"
            >
              {Object.entries(languages).map((language, index) => (
                <div className={styles.languages} onMouseDown={() => handleClickOption(language[1], 'language')} key={index}>
                  <img src={language[1].icon} alt={language[1].name} />
                  <span>{language[1].name}</span>
                </div>
              ))}
            </MobileSelectMenu>
          </ul>
        </>
      </MobileMenuWrapper>
      <MobileMenuWrapper className={styles.search} open={search!.searchIsOpen}>
        <>
          <div className={styles.searchHeader}>
            <i onClick={closeSearch} className="fas fa-arrow-left" />
            <span onClick={handleChangeSearchType} data-type="basic" data-active={search!.searchType === 'basic'}>
              Basic Search
            </span>
            <span onClick={handleChangeSearchType} data-type="advanced" data-active={search!.searchType === 'advanced'}>
              Advanced Search
            </span>
          </div>
          <hr />
          <>
            {search!.searchType === 'basic' ? (
              <>
                <div className={styles.searchInput}>
                  <input type="text" placeholder="Try Australia" value={state.searchQuery} name="searchQuery" onChange={handleChangeSearch} />
                  <i className="fas fa-search" />
                </div>
                {countries.filter(country => country.includes(state.searchQuery)).length > 0 && (
                  <>
                    <h5>Countries</h5>
                    <div className={styles.results}>
                      {countries
                        .filter(country => country.includes(state.searchQuery))
                        .map((country, index) => (
                          <p key={index}>{country}</p>
                        ))}
                    </div>
                  </>
                )}

                {cities.filter(city => city.includes(state.searchQuery)).length > 0 && (
                  <>
                    <h5>Cities</h5>
                    <div className={styles.results}>
                      {cities
                        .filter(city => city.includes(state.searchQuery))
                        .map((city, index) => (
                          <p key={index}>{city}</p>
                        ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <Select
                  className={styles.select}
                  placeholder="Start location"
                  value={state.startLocation}
                  options={startLocation}
                  name="startLocation"
                  onChange={handleChange}
                  size="lg"
                />
                <Select
                  className={styles.select}
                  placeholder="End location"
                  value={state.endLocation}
                  options={options}
                  name="endLocation"
                  onChange={handleChange}
                  size="lg"
                />
                <Select className={styles.select} placeholder="Select date" value={dateFormatFn()} size="lg">
                  <Calendar className={styles.calendar} value={state.date || new Date()} onChange={handleChangeDate} />
                </Select>
                <Select
                  placeholder="Number of days"
                  className={styles.select}
                  value={state.numberOfDays}
                  options={numberOfDays}
                  name="numberOfDays"
                  onChange={handleChange}
                  size="lg"
                />
                <div className={styles.advancedSearchButtons}>
                  <Button className={styles.orangeButton} theme="orange" form="rectangled">
                    SEARCH
                  </Button>
                  <Button className={styles.resetButton} theme="transparent" form="standart" size="sm" onClick={handleClickReset}>
                    Reset search
                  </Button>
                </div>
              </>
            )}
          </>
        </>
      </MobileMenuWrapper>
    </div>
  )
}
