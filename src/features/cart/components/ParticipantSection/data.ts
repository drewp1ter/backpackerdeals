import { IParticipantForm } from './ParticipantSection'

const forms: IParticipantForm[] = [
  {
    name: 'Adult 1',
    fields: [
      { label: 'Adult 1 Name', placeholder: 'First and Last Name', labelID: 'Adult 1' },
      { label: 'Dietary requirements (Please specify)', placeholder: 'Your Dietary requirements', labelID: 'Adult 1 requirements' },
    ],
  },
  {
    name: 'Adult 2',
    fields: [
      { label: 'Adult 2 Name', placeholder: 'First and Last Name', labelID: 'Adult 2' },
      { label: 'Dietary requirements (Please specify)', placeholder: 'Your Dietary requirements', labelID: 'Adult 2 requirements' },
    ],
  },
  {
    name: 'Child',
    fields: [
      { label: 'Child Name', placeholder: 'First and Last Name', labelID: 'Child' },
      { label: 'Dietary requirements (Please specify)', placeholder: 'Your Dietary requirements', labelID: 'Child requirements' },
    ],
  },
]

export {
  forms
}
