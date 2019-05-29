import * as React from 'react'

import { HeaderInput } from 'components/base'

import './Header.scss'

interface IProps {}

export const Header: React.FC<IProps> = ({}) => (
  <header>
    <div>
      <img src="" alt="" className="logo"/>
      <div className="advanced-search"></div>
      <div className="explore"></div>
      <a href="">Top Deals</a>
      <a href="">Last Minute Deals</a>
      <a href="">
        <i className="fas fa-phone"></i>
        <span>+ 61 3 90163720</span>
      </a>
      <div>$ Currency</div>
    </div>
    <h1>Search Less, Travel More</h1>
    <h2>Great experience at backpacker prices</h2>
    <HeaderInput />
  </header>
)
