import { Autocomplete } from 'components/Autocomplete'
import { Input } from 'components/Input'
import { PhoneNumber } from 'components/PhoneNumber'
import React from 'react'
import { WithCard } from '../WithCard'
import styles from './ContactSection.module.scss'

export const ContactSection: React.FC = () => {

  return (
    <WithCard className={styles.contactSection}>
      <>
        <h3>Contact information</h3>

        <div className={styles.field}>
          <Input label="Contact Name" placeholder="First and Last Name"/>
        </div>
        <div className={styles.field}>
          <Input label="Email" placeholder="Email Address"/>
        </div>
        <Autocomplete
          className={styles.field}
          suggestions={['USA', 'Australia', 'Argentina', 'Malasya']}
          placeholder="Select country of origin"
          label="Country of origin"
        />
        <PhoneNumber className={styles.field} size="lg" />
        <Autocomplete
          className={styles.field}
          suggestions={['USA', 'Australia', 'Argentina', 'Malasya']}
          placeholder="Select pickup location"
          label="Pickup location"
        />
      </>
    </WithCard>
  )
}
