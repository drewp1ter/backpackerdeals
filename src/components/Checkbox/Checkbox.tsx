import classNames from 'classnames'
import React from 'react'

import styles from './Checkbox.module.scss'

interface IProps {
  label: string
  className?: string
}

export const Checkbox: React.FC<IProps> = ({ label, className }) => (
  <div className={classNames(styles.checkbox, className)}>
    <input type="checkbox" />
    <span/>
    <label>{label}</label>
  </div>
)
