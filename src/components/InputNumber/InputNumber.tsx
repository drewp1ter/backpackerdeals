import classNames from 'classnames'
import React, { useRef } from 'react'

import styles from './InputNumber.module.scss'

export interface IProps {
  readonly value?: number
  readonly onChange?: (value: number) => void
  readonly className?: string
}

export const InputNumber: React.FC<IProps> = ({ value, onChange, className }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleIncrement = () => inputRef.current!.stepUp()
  const handleDecrement = () => inputRef.current!.stepDown()
  return (
    <div className={classNames(styles.inputNumber, className)}>
      <button onClick={handleDecrement} />
      <input ref={inputRef} className={styles.quantity} min="0" name="quantity" value="0" type="number" />
      <button className={styles.plus} onClick={handleIncrement} />
    </div>
  )
}
