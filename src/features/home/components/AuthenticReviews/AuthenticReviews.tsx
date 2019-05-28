import * as React from 'react'

import { AuthenticCard } from '..'
import styles from './authenticReviews.module.scss'

const AuthenticReviews: React.FC = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Authentic reviews from our travellers</h1>
      <a className={styles.readAll}>Read all reviews >></a>
      <div className={styles.cardsRow}>
        <AuthenticCard
          title="Easy and convenient booking"
          body="We had a great time on this tour. You do three zip lines which each have terrific views, the first over a winery and the second tw…"
          sign="Megan S."
          date="24.05.2012"
        />
        <AuthenticCard
          title="Easy and convenient booking"
          body="We had a great time on this tour. You do three zip lines which each have terrific views, the first over a winery and the second tw…"
          sign="Megan S."
          date="24.05.2012"
        />
        <AuthenticCard
          title="Easy and convenient booking"
          body="We had a great time on this tour. You do three zip lines which each have terrific views, the first over a winery and the second tw…"
          sign="Megan S."
          date="24.05.2012"
        />
      </div>
    </div>
  )
}

export default AuthenticReviews
