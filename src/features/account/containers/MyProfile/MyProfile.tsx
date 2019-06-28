import React from 'react'

import { Autocomplete, Button, Input, NewSelect } from 'components'
import options from './options'

import styles from './MyProfile.module.scss'

export const MyProfile: React.FC = () => {
  return (
    <div className={styles.myProfile}>
      <h3>My profile</h3>
      <div className={styles.photo}>
        <div className={styles.image}>JD</div>
        <i className="fas fa-cloud-upload-alt" />
        <Input type="file" label="Upload photo" />
      </div>
      <div className={styles.fields}>
        <Input theme="standart" label="Name" placeholder="Enter your first and last name" />
        <Input theme="standart" label="Address line" placeholder="Enter your address" />
        <Input theme="standart" label="Address line 2" placeholder="Enter your address" />
        <Input theme="standart" label="City" placeholder="Enter your city" />
        <Input theme="standart" label="State" placeholder="Enter your State" />
        <Input theme="standart" label="Postcode" placeholder="Postcode" />
        <Autocomplete
          className={styles.autocomplete}
          suggestions={['USA', 'Australia', 'Argentina', 'Malasya']}
          placeholder="Type or choose your country"
          label="Country"
        />
        <Input className={styles.field} theme="standart" type="email" label="Email" placeholder="Email Address" />
        <NewSelect options={options} theme="dark" value={options[1]} />
        <Button>Update changes</Button>
      </div>
    </div>
  )
}
