import classNames from 'classnames'
import React from 'react'

import { Button } from 'components'
import styles from './CheckAviability.module.scss'

export interface IProps {
  readonly className?: string
}

export const CheckAviability: React.FC<IProps> = ({ className }) => {
  return (
    <div className={classNames(styles.checkAviability, className)}>
      <Button>Check Aviability</Button>
    </div>
  )
}
