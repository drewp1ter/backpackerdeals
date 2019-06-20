import React from 'react'

import { OrangeButton, MobileMenuWrapper } from 'components'
import { MobileSelectMenu } from 'features/page/components'
import { SearchActions } from 'features/search'
import { SearchRadio, SearchSelect } from 'features/search/components'
import { PageActions } from '../..'
import { SelectContinent } from '../../components'

import Types from 'Types'
import { currencies, languages } from '../../components/Header/constants'
import { cities, countries, options } from './data'

import styles from './MobileMenu.module.scss'

interface IProps {
  readonly theme?: string
}

export const MobileMenu: React.FC<Partial<Types.RootState> & PageActions & SearchActions & IProps> = ({
  search,
  page,
  theme,
  openMenu,
  closeMenu,
  openSearch,
  closeSearch,
  changeSearchType,
}) => {
  const [searchQuery, changeSearch] = React.useState('')
  const [multiDayTour, selectTourType] = React.useState(false)

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
        <div className={styles.mobileHeader}>
          <p>
            <i className="fas fa-phone-alt" />
            <span>+ 61 3 90163720</span>
          </p>

          <button onClick={closeMenu}>
            <i className="fas fa-times" />
          </button>
        </div>
        <hr />
        <div className={styles.navigation}>
          <div onClick={openSearch} className={styles.menuItem}>
            <div className={styles.title}>
              <i className="fas fa-search" />
              <span>Search</span>
            </div>
            <div className={styles.additionalTitle}>
              <span>{search!.searchType === 'advanced' ? 'Advanced search' : 'Basic search'}</span>
              <i className="fas fa-filter" />
            </div>
          </div>
          <MobileSelectMenu
            title="Explore by country"
            leftIcon="fas fa-map-marker-alt"
            rightIcon="fas fa-chevron-right"
            reversableIcon="right"
            reverseType="90"
          >
            <SelectContinent theme="mobile" />
          </MobileSelectMenu>
          <div className={styles.menuItem}>
            <div className={styles.title}>
              <i className="fas fa-thumbs-up" />
              <span>Top Deals</span>
            </div>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.title}>
              <i className="fas fa-clock" />
              <span>Last Minute Deals</span>
            </div>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.title}>
              <i className="fas fa-user-alt" />
              <span>Sign up</span>
            </div>
          </div>
          <h5>Settings</h5>
          <MobileSelectMenu
            childrenClassName={styles.currencies}
            leftIcon="fas fa-chevron-down"
            reversableIcon="left"
            title="$ AUD"
            reverseType="180"
          >
            {Object.entries(currencies).map((currency, index) => (
              <p key={`${currency[0]}-${index}`}>
                {currency[1].name} {currency[1].icon}
              </p>
            ))}
          </MobileSelectMenu>
          <MobileSelectMenu
            childrenClassName={styles.languages}
            leftIcon="fas fa-chevron-down"
            reversableIcon="left"
            title="English"
            reverseType="180"
          >
            {Object.entries(languages).map((language, index) => (
              <div className={styles.languages} key={`language-${index}`}>
                <img src={language[1].icon} alt={language[1].name} />
                <span>{language[1].name}</span>
              </div>
            ))}
          </MobileSelectMenu>
        </div>
      </MobileMenuWrapper>
      <MobileMenuWrapper className={styles.search} open={search!.searchIsOpen}>
        <div className={styles.searchHeader}>
          <i onClick={closeSearch} className="fas fa-arrow-left" />
          <span onClick={() => changeSearchType('basic')} data-active={search!.searchType === 'basic'}>
            Basic Search
          </span>
          <span onClick={() => changeSearchType('advanced')} data-active={search!.searchType === 'advanced'}>
            Advanced Search
          </span>
        </div>
        <hr />
        <>
          {search!.searchType === 'basic' ? (
            <>
              <div className={styles.searchInput}>
                <input type="text" placeholder="Try Australia" value={searchQuery} onChange={event => changeSearch(event.target.value)} />
                <i className="fas fa-search" />
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
              <SearchSelect bodyTheme="mobile" selectedOption="Start Location" options={options} handleSelect={() => {}} theme="dark" />
              <div className={styles.radioButtons}>
                <SearchRadio placeholder="Day Tour" selected={!multiDayTour} onClick={() => selectTourType(false)} />
                <SearchRadio placeholder="Multi day Tour" selected={multiDayTour} onClick={() => selectTourType(true)} />
              </div>
              <SearchSelect bodyTheme="mobile" selectedOption="End Location" disabled={true} handleSelect={() => {}} theme="dark" />
              <SearchSelect bodyTheme="mobile" selectedOption="Select Date" options={options} handleSelect={() => {}} theme="dark" />
              <SearchSelect bodyTheme="mobile" selectedOption="Number of days" disabled={true} handleSelect={() => {}} theme="dark" />
              <div className={styles.advancedSearchButtons}>
                <OrangeButton className={styles.orangeButton} theme="rectangled">
                  SEARCH
                </OrangeButton>
                <button className={styles.resetButton}>Reset search</button>
              </div>
            </>
          )}
        </>
      </MobileMenuWrapper>
    </div>
  )
}
