import React from 'react'

import styles from './Checkbox.module.scss'

interface IProps {
  label: string
}

export const Checkbox: React.FC<IProps> = ({ label }) => (
  <div className={styles.checkbox}>
    <input type="checkbox" />
    <span/>
    <label>{label}</label>
  </div>
)
