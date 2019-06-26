import React from 'react'

import styles from './CatalogLayout.module.scss'

import { Breadcrumbs } from 'components'
import { InstagramSection } from 'features/home/components'
import { ActivitiesSection, DescriptionSection, MoreActivities, TopActivities } from '..'

export const CatalogLayout: React.FC = () => (
  <>
    <ActivitiesSection />
    <DescriptionSection />
    <Breadcrumbs titles={['Australia']} className={styles.breadcrumbs} />
    <TopActivities />
    <MoreActivities />
    <InstagramSection className={styles.instagramCards} />
  </>
)
