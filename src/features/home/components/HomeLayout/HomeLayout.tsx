import * as React from 'react'
import { openSearch } from 'store/ui/actions'

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
} from '..'

import styles from './HomeLayout.module.scss'

export interface IProps {
  readonly openSearch: typeof openSearch
  readonly searchType: string
}

export const HomeLayout: React.FC<IProps> = ({ openSearch, searchType }) => (
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
