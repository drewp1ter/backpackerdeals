import { Input } from 'components/Input'
import React from 'react'
import { WithCard } from '../WithCard'
import styles from './InstructionsSection.module.scss'

export const InstructionsSection: React.FC = () => {

  return (
    <WithCard className={styles.instructionsSection}>
      <h3>InstructionsSection</h3>
      <Input label="Message (optional)">
        <textarea placeholder="Please any special request" />
      </Input>
    </WithCard>
  )
}
