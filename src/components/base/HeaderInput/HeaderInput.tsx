import * as React from 'react'

import { OrangeButton } from 'components/base'

import SearchIcon from './assets/Group 3.svg'

import './HeaderInput.scss'

interface IProps {}

export const HeaderInput: React.FC<IProps> = () => (
  <div className="header-input">
    <input placeholder="Search for a destination, activity or tour" type="text" name="" id="" />
    <OrangeButton className="rounded">SEARCH</OrangeButton>
    <img src={SearchIcon} alt="Advanced search" />
  </div>
)
