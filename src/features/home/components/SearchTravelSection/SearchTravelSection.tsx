import * as React from 'react'

import { HeaderInput } from 'components/base'

import styles from './SearchTravelSection.module.scss'

export const SearchTravelSection: React.FC = () => (
  <section className={styles.searchTravelSection}>
    <h1>Search Less, Travel More</h1>
    <h2>Great experience at backpacker prices</h2>
    <HeaderInput />
  </section>
)
