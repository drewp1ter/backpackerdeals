import Chinese from './assets/chineese.png'
import English from './assets/english.png'
import French from './assets/french.png'
import German from './assets/german.png'
import Portuguese from './assets/portuguese.png'
import Russian from './assets/russian.png'
import Spanish from './assets/spain.png'

interface IIcons {
  [key: string]: {
    icon: string
    name: string
  }
}

export const languages: IIcons = {
  english: { icon: English, name: 'English' },
  spanish: { icon: Spanish, name: 'Spanish' },
  german: { icon: German, name: 'German' },
  russian: { icon: Russian, name: 'Russian' },
  chinese: { icon: Chinese, name: 'Chinese' },
  french: { icon: French, name: 'French' },
  portuguese: { icon: Portuguese, name: 'Portuguese' },
}

export const currencies: IIcons = {
  aud: { name: 'AUD', icon: '$' },
  thb: { name: 'THB', icon: 'B' },
  eur: { name: 'EUR', icon: '€' },
  gbp: { name: 'GBP', icon: '£' },
  nzd: { name: 'NZD', icon: '$' },
  jpy: { name: 'JPY', icon: '¥' },
  usd: { name: 'USD', icon: '$' },
  fjd: { name: 'FJD', icon: '$' },
  zar: { name: 'ZAR', icon: 'R' },
}