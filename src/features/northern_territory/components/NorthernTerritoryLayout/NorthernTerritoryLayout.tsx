import React from 'react'

import { WelcomeToAustralia } from '..'
import styles from './NorthernTerritoryLayout.module.scss'

export const NorthernTerritoryLayout: React.FC = () => {

  return (
    <div className={styles.layout}>
      Hello World!!!
      <WelcomeToAustralia />
    </div>
  )
}