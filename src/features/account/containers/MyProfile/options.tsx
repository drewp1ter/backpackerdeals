import React from 'react'

import { Icon } from 'components'

import styles from './MyProfile.module.scss'

export default [
  <div className={styles.selectItem} key={1}><Icon name="spain" /><span>+11</span></div>,
  <div className={styles.selectItem} key={2}><Icon name="english" /><span>+7</span></div>,
  <div className={styles.selectItem} key={3}><Icon name="german" /><span>+44</span></div>
]