import { Actions as PageActions, IPageState } from 'features/page'
import * as React from 'react'

import {
  ActivitiesSection,
  AuthenticSection,
  BookWithUsSection,
  CardsWrapper,
  InstagramSection,
  LastMinuteDeal,
  PromoutingSection,
  SearchTravelSection,
  TopDestinationsSection,
  TravelStoriesSection,
} from '../../components'

import styles from './HomeLayout.module.scss'

export const HomeLayout: React.FC<Partial<IPageState> & Partial<PageActions>> = ({ openSearch, searchType }) => (
  <>
    <SearchTravelSection openSearch={openSearch} searchType={searchType} />
    <BookWithUsSection />
    <TopDestinationsSection />
    <ActivitiesSection />

    <CardsWrapper title="Last Minute Deals" linkTitle="View all minute deals">
      <LastMinuteDeal />
    </CardsWrapper>

    <TravelStoriesSection />
    <AuthenticSection />
    <PromoutingSection />
    <InstagramSection className={styles.instagramCards} />
  </>
)
