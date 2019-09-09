import { Input, IProps as IInputProps } from 'components/Input'
import { Select } from 'components/Select'
import React from 'react'
import { WithCard } from '../WithCard'
import { forms } from './data'
import styles from './ParticipantSection.module.scss'

export interface IParticipantForm {
  name: string,
  fields: IInputProps[]
}

export const ParticipantSection: React.FC = () => {

  const renderIParticipantForm = (form: IParticipantForm) => (
    <div className={styles.participantForm} key={form.name}>
      <b>{form.name}</b>
      {form.fields &&
      form.fields.map(field => <Input key={field.labelID} label={field.label} placeholder={field.placeholder}/>)}
      <Input label="Date of birth">
        <div className={styles.dateFields}>
          <Select size="md" placeholder="Date" options={[]} />
          <Select size="md" placeholder="Month" options={[]} />
          <Select size="md" placeholder="Year" options={[]} />
        </div>
      </Input>
    </div>
  )

  return (
    <WithCard className={styles.participantSection}>
      <>
        <h3>ParticipantSection</h3>
        {forms.map(renderIParticipantForm)}
      </>
    </WithCard>
  )
}
