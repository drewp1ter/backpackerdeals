import React, { useState } from 'react'

import { AdvancedSearchTravel, MobileMenuWrapper } from 'components'
import { ISearchActions } from 'features/search'
import { PageActions } from '../..'
import { MobileSelectMenu, SelectContinent } from '../../components'

import Types from 'Types'
import { currencies, languages } from '../../components/Header/constants'
import { cities, countries } from './data'

import styles from './MobileMenu.module.scss'

interface IProps {
  readonly theme?: string
}

export interface IState {
  readonly currency: IIconInfo
  readonly language: IIconInfo
  readonly searchQuery: string
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
  const initialState: IState = {
    currency: currencies[0],
    language: languages[0],
    searchQuery: '',
  }

  const [state, setState] = useState(initialState)
  const handleChangeSearch = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => setState({ ...state, [name]: value })
  const handleChangeSearchType = ({ currentTarget }: React.MouseEvent<HTMLSpanElement>) => {
    const searchType: any = currentTarget.dataset.type
    changeSearchType && changeSearchType(searchType)
  }

  const handleClickCurrency = ({ currentTarget }: React.MouseEvent<HTMLParagraphElement>) => {
    blurActiveElement()
    const idx = Number(currentTarget.dataset.idx)
    setState({ ...state, currency: currencies[idx] })
  }

  const handleClickLanguage = ({ currentTarget }: React.MouseEvent<HTMLDivElement>) => {
    blurActiveElement()
    const idx = Number(currentTarget.dataset.idx)
    setState({ ...state, language: languages[idx] })
  }

  const blurActiveElement = () => {
    if (window.document.activeElement !== null) {
      ;(window.document.activeElement as HTMLElement).blur()
    }
  }

  const currencyFormatFn = (currency: IIconInfo) => `${currency.icon} ${currency.name}`
  const languageFormatFn = (language: IIconInfo) => language.name

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
              {currencies.map((currency, idx) => (
                <p key={idx} data-idx={idx} onClick={handleClickCurrency}>
                  {currency.name} {currency.icon}
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
              {languages.map((language, idx) => (
                <div  key={idx} className={styles.languages} data-idx={idx} onClick={handleClickLanguage}>
                  <img src={language.icon} alt={language.name} />
                  <span>{language.name}</span>
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
                  <input
                    type="text"
                    placeholder="Try Australia"
                    value={state.searchQuery}
                    name="searchQuery"
                    onChange={handleChangeSearch}
                  />
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
              <AdvancedSearchTravel theme="menu" />
            )}
          </>
        </>
      </MobileMenuWrapper>
    </div>
  )
}
