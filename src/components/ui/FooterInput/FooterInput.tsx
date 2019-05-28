import * as React from 'react'

import { OrangeButton } from 'components/base'

import styles from './FooterInput.scss'

export interface IProps {
  readonly handleChange?: () => void
  readonly handleSubmit?: () => void
  readonly email?: string
}

export const FooterInput: React.FC<IProps> = ({
  handleChange,
  handleSubmit,
  email
}) => (
  <div className={styles.FooterInput}>
    <input type="email" placeholder="Your e-mail address" value={ email } onChange={ handleChange } />
    <OrangeButton onClick={ handleSubmit } className="rounded">
      SUBMIT
    </OrangeButton>
  </div>
)