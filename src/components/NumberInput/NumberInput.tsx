import classNames from 'classnames'
import React, { useRef } from 'react'

import styles from './NumberInput.module.scss'

export interface IProps {
  readonly min?: number
  readonly max?: number
  readonly value?: number
  readonly name?: string
  readonly onChange?: (value: number, name?: string) => void
  readonly className?: string
}

export const NumberInput: React.FC<IProps> = ({ value, onChange, className, min, max, name }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleIncrement = () => inputRef.current!.stepUp()
  const handleDecrement = () => inputRef.current!.stepDown()
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(Number(target.value), name || '')
  return (
    <div className={classNames(styles.inputNumber, className)}>
      <button onClick={handleDecrement} />
      <input
        onChange={handleChange}
        ref={inputRef}
        className={styles.quantity}
        min={min}
        max={max}
        name="quantity"
        value={value}
        type="number"
      />
      <button className={styles.plus} onClick={handleIncrement} />
    </div>
  )
}
