import React from 'react'

import { SearchSelect, OrangeButton, SearchRadio } from 'components'
import { MobileSelectMenu } from 'features/page/components'
import { SelectContinent } from '..'

import { countries, cities, options } from './data'
import { currencies, languages } from '../Header/constants'

import styles from './MobileMenu.module.scss'

interface IProps {}

export const MobileMenu: React.FC<IProps> = () => {
  const [isOpen, toggleMenu] = React.useState(false)
  const [searchIsOpen, toggleSearch] = React.useState(false)
  const [searchType, selectSearch] = React.useState('basic')
  const [search, changeSearch] = React.useState('')
  const [multiDayTour, selectTourType] = React.useState(false)

  return (
    <div className={styles.mobileMenu}>
      <button onClick={() => toggleSearch(true)} className={styles.menuIcon}>
        <i className="fas fa-search" />
      </button>
      <button onClick={() => toggleMenu(true)} className={styles.menuIcon}>
        <i className="fas fa-bars" />
      </button>

      <div className={styles.menuBackground} data-open={isOpen} />

      <div className={styles.menu} data-open={isOpen}>
        <div className={styles.mobileHeader}>
          <p>
            <i className="fas fa-phone-alt" />
            <span>+ 61 3 90163720</span>
          </p>

          <button onClick={() => toggleMenu(false)}>
            <i className="fas fa-times" />
          </button>
        </div>
        <hr />
        <div className={styles.navigation}>
          <div onClick={() => toggleSearch(true)} className={styles.menuItem}>
            <div className={styles.title}>
              <i className="fas fa-search" />
              <span>Search</span>
            </div>
            <div className={styles.additionalTitle}>
              <span>{searchType === 'advanced' ? 'Advanced search' : 'Basic search'}</span>
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
              <SelectContinent />
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
          <MobileSelectMenu leftIcon="fas fa-chevron-down" reversableIcon="left" title="$ AUD" reverseType="180">
            {Object.entries(currencies).map((currency, index) => (
              <p key={`${currency[0]}-${index}`}>
                {currency[1].name} {currency[1].icon}
              </p>
            ))}
          </MobileSelectMenu>
          <MobileSelectMenu leftIcon="fas fa-chevron-down" reversableIcon="left" title="English" reverseType="180">
            {Object.entries(languages).map((language, index) => (
              <div className={styles.languages} key={`language-${index}`}>
                <img src={language[1].icon} alt={language[1].name} />
                <span>{language[1].name}</span>
              </div>
            ))}
          </MobileSelectMenu>
        </div>
      </div>
      <div className={styles.search} data-open={searchIsOpen}>
        <div className={styles.searchHeader}>
          <i onClick={() => toggleSearch(false)} className="fas fa-arrow-left" />
          <span onClick={() => selectSearch('basic')} data-active={searchType === 'basic'}>
            Basic Search
          </span>
          <span onClick={() => selectSearch('advanced')} data-active={searchType === 'advanced'}>
            Advanced Search
          </span>
        </div>
        <hr />
        <>
          {searchType === 'basic' ? (
            <>
              <div className={styles.searchInput}>
                <input type="text" placeholder="Try Australia" value={search} onChange={event => changeSearch(event.target.value)} />
                <i className="fas fa-search" />
              </div>
              {countries.filter(country => country.includes(search)).length > 0 && (
                <>
                  <h5>Countries</h5>
                  <div className={styles.results}>
                    {countries
                      .filter(country => country.includes(search))
                      .map((country, index) => (
                        <p key={`${country}-${index}`}>{country}</p>
                      ))}
                  </div>
                </>
              )}

              {cities.filter(city => city.includes(search)).length > 0 && (
                <>
                  <h5>Cities</h5>
                  <div className={styles.results}>
                    {cities
                      .filter(city => city.includes(search))
                      .map((city, index) => (
                        <p key={`${city}-${index}`}>{city}</p>
                      ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <SearchSelect selectedOption="Start Location" options={options} handleSelect={() => {}} theme="dark" />
              <div className={styles.radioButtons}>
                <SearchRadio placeholder="Day Tour" selected={!multiDayTour} onClick={() => selectTourType(false)} />
                <SearchRadio placeholder="Multi day Tour" selected={multiDayTour} onClick={() => selectTourType(true)} />
              </div>
              <SearchSelect selectedOption="End Location" disabled={true} handleSelect={() => {}} theme="dark" />
              <SearchSelect selectedOption="Select Date" options={options} handleSelect={() => {}} theme="dark" />
              <SearchSelect selectedOption="Number of days" disabled={true} handleSelect={() => {}} theme="dark" />
              <div className={styles.advancedSearchButtons}>
                <OrangeButton className={styles.orangeButton} theme="rectangled">
                  SEARCH
                </OrangeButton>
                <button className={styles.resetButton}>Reset search</button>
              </div>
            </>
          )}
        </>
      </div>
    </div>
  )
}
