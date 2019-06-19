import React from 'react'

import styles from './CatalogLayout.module.scss'

import { ActivitiesSection, DescriptionSection, MoreActivities, TopActivities } from '..'
import { InstagramSection } from 'features/home/components'

export const CatalogLayout: React.FC = () => (
  <>
    <ActivitiesSection />
    <DescriptionSection />
    <TopActivities />
    <MoreActivities />
    <InstagramSection className={styles.instagramCards} />
  </>
)
