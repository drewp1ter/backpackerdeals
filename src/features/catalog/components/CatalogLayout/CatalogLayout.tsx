import React from 'react'

import styles from './CatalogLayout.module.scss'

import { InstagramSection } from 'features/home/components'
import { ActivitiesSection, DescriptionSection, MoreActivities, TopActivities } from '..'

export const CatalogLayout: React.FC = () => (
  <>
    <ActivitiesSection />
    <DescriptionSection />
    <TopActivities />
    <MoreActivities />
    <InstagramSection className={styles.instagramCards} />
  </>
)
