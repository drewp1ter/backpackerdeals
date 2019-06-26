import React from 'react'

import { Input, Button } from 'components'

import styles from './MyProfile.module.scss'

export const MyProfile: React.FC = () => {

  return (
    <div className={styles.myProfile}>
      <h2>My profile</h2>
      <div className={styles.photo}>
        <div className={styles.image}>
          JD
        </div>
        <i className="fas fa-cloud-upload-alt" />
        <label htmlFor="photo-upload">Upload photo</label>
        <input type="file" id="photo-upload" hidden={true} />
      </div>
      <div className={styles.fields}>
        <Input theme="standart" label="Name" size="md" placeholder="Enter your first and last name" />
        <Input theme="standart" label="Address line" size="md" placeholder="Enter your address" />
        <Input theme="standart" label="Address line 2" size="md" placeholder="Enter your address" />
        <Input theme="standart" label="City" size="md" placeholder="Enter your city" />
        <Input theme="standart" label="State" size="md" placeholder="Enter your State" />
        <Input theme="standart" label="Postcode" size="md" placeholder="Postcode" />
      </div>
    </div>
  )
}