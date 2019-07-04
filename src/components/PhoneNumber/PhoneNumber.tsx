import React, { useState } from 'react'

import classNames from 'classnames'
import countries from './countries'

import { ScrollBar } from '../ScrollBar'

import styles from './PhoneNumber.module.scss'

export interface IProps {
  readonly className?: string
  readonly name?: string
  readonly onChange?: (value: string, name?: string) => void
  readonly size?: 'md' | 'lg'
}

interface IState {
  readonly isOpen: boolean
  readonly countryCodeIdx: number
  readonly phone: string
}

export const PhoneNumber: React.FC<IProps> = ({ className, onChange, name, size = 'md' }) => {
  const [state, setState] = useState<IState>({
    isOpen: false,
    countryCodeIdx: 0,
    phone: '',
  })

  const handleClose = () => setState({ ...state, isOpen: false })
  const toggleSelect = () => setState({ ...state, isOpen: !state.isOpen })

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const match = target.value.match(/\d+/g)
    const phone = match ? match[0] : ''
    setState({ ...state, phone })
    onChange && onChange(countries[state.countryCodeIdx][1] + phone, name)
  }

  const handleSelect = ({ currentTarget }: React.MouseEvent<HTMLElement>) => {
    const idx = currentTarget.dataset.idx || 0
    setState({ ...state, countryCodeIdx: +idx, isOpen: false })
    onChange && onChange(countries[state.countryCodeIdx][1] + state.phone, name)
  }

  return (
    <div className={classNames(styles.phoneNumber, className)}>
      <label htmlFor="phone_number">Phone Number (If you prefer Whatsapp please enter that number)</label>
      <div className={styles.body}>
        <div className={styles.countryCode} tabIndex={0} onBlur={handleClose}>
          <div className={styles.currentValue} data-opened={state.isOpen} data-size={size} onClick={toggleSelect}>
            <div>
              {countries[state.countryCodeIdx][0]}
              <span>{countries[state.countryCodeIdx][1]}</span>
            </div>
            <i className="fas fa-angle-down" />
          </div>

          <ul data-size={size} data-opened={state.isOpen}>
            <ScrollBar>
              {countries.map((country, idx) => (
                <li key={idx} className={styles.option} onClick={handleSelect} data-idx={idx}>
                  {country[0]}
                  <span>{country[1]}</span>
                </li>
              ))}
            </ScrollBar>
          </ul>
        </div>
        <input value={state.phone} onChange={handleChange} id="phone_number" type="text" placeholder="Select country code" />
      </div>
    </div>
  )
}
