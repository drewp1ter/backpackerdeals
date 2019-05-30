import * as React from 'react'

import { HeaderInput } from 'components/base'

import Logo from './assets/logo_Header.svg'

import './Header.scss'

interface IProps {}

export const Header: React.FC<IProps> = ({}) => (
  <header>
    <div className="tools">
      <div className="logo-and-search">
        <img src={Logo} alt="Logo" className="logo" />
        <div className="advanced-search" />
      </div>
      <div className="tours">
        <div className="explore" />
        <a href="">Top Deals</a>
        <a href="">Last Minute Deals</a>
      </div>
      <div className="currency-and-language">
        <a href="">
          <i className="fas fa-phone" />
          <span>+ 61 3 90163720</span>
        </a>
        <div>$ AUD</div>
        <div>Eng</div>
      </div>
    </div>
    <h1>Search Less, Travel More</h1>
    <h2>Great experience at backpacker prices</h2>
    <HeaderInput />
  </header>
)
