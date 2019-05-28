import * as React from 'react'

import { Page, Icon } from 'components/base'
import { ActivityCard, CardsWrapper, AuthenticCard, InstagramCard } from '..'

import styles from './homeLayout.module.scss'

const HomeLayout: React.FC = () => (
  <Page>
    <CardsWrapper title="Why book with us?" linkTitle="Learn more >>">
      <div className={styles.whyBook}>
        <Icon name="liveAvailablityInstantConfirmations" />
        <Icon name="bestSelections" />
        <Icon name="securePayment" />
        <Icon name="guarantee" />
        <Icon name="liveChatExpertAgentAssistance" />
        <Icon name="verifiedTourOperators" />
      </div>
    </CardsWrapper>

    <CardsWrapper title="Activities, Tours & Things To D" linkTitle="Show more >>">
      <div key="1" className={styles.activitiesTourThingsCardsRow}>
        <ActivityCard title="Dive & Snorkelling" img="lol" />
        <ActivityCard title="Multi-days Tours" img="lol" />
        <ActivityCard title="Surfing & SUP" img="lol" />
        <ActivityCard title="Whale & dolphin watching" img="lol" />
      </div>

      <div key="2" className={styles.activitiesTourThingsCardsRow}>
        <ActivityCard title="Classes & Workshops" img="lol" />
        <ActivityCard title="Skydiving" img="lol" />
        <ActivityCard title="Bungee Jumping" img="lol" />
        <ActivityCard title="Attractions" img="lol" />{' '}
      </div>
    </CardsWrapper>

    <CardsWrapper title="Authentic reviews from our travellers" linkTitle="Read all reviews >>">
      <div className={styles.cardsRow}>
        <AuthenticCard
          title="Easy and convenient booking"
          body="We had a great time on this tour. You do three zip lines which each have terrific views, the first over a winery and the second tw…"
          sign="Megan S."
          date="24.05.2012"
        />
        <AuthenticCard
          title="Easy and convenient booking"
          body="We had a great time on this tour. You do three zip lines which each have terrific views, the first over a winery and the second tw…"
          sign="Megan S."
          date="24.05.2012"
        />
        <AuthenticCard
          title="Easy and convenient booking"
          body="We had a great time on this tour. You do three zip lines which each have terrific views, the first over a winery and the second tw…"
          sign="Megan S."
          date="24.05.2012"
        />
      </div>
    </CardsWrapper>

    <CardsWrapper title="Inspiration from our instagram" linkTitle="Follow us >>">
      <div className={styles.cardsRow}>
        <InstagramCard img="none" />
        <InstagramCard img="none" />
        <InstagramCard img="none" />
        <InstagramCard img="none" />
        <InstagramCard img="none" />
        <InstagramCard img="none" />
      </div>
    </CardsWrapper>
  </Page>
)

export default HomeLayout
