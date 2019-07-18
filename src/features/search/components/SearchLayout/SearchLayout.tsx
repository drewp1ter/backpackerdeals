
import React from 'react'

import styles from './SearchLayout.module.scss'

import { InstagramSection } from 'features/home/components'
import { ActivitiesSection, DescriptionSection, MoreActivities, TopActivities } from '..'

export const SearchLayout: React.FC = () => (
  <>
    <ActivitiesSection />
    <DescriptionSection />
    <TopActivities />
    <MoreActivities />
    <InstagramSection className={styles.instagramCards} />
  </>
)
