import * as React from 'react'

import { Page, Icon } from 'components/base'
import { ActivityCard, CardsWrapper, AuthenticCard, InstagramCard, TravelStoryCard, TopDestinationCard } from '..'

import styles from './HomeLayout.module.scss'
import images from './assets'

export const HomeLayout: React.FC = () => (
  <Page>
    <CardsWrapper title="Why book with us?" linkTitle="Learn more >>">
      <div className={styles.whyBook}>
        <div>
          <Icon name="liveAvailablityInstantConfirmations" />
          <span>Live Availablity</span>
        </div>
        <div>
          <Icon name="bestSelections" />
          <span>Best Selections</span>
        </div>
        <div>
          <Icon name="securePayment" />
          <span>100% Safe Payments</span>
        </div>
        <div>
          <Icon name="guarantee" />
          <span>100% Guarantee</span>
        </div>
        <div>
          <Icon name="liveChatExpertAgentAssistance" />
          <span>Live Chat</span>
        </div>
        <div>
          <Icon name="verifiedTourOperators" />
          <span>Verified Tour Operators</span>
        </div>
      </div>
    </CardsWrapper>

    <CardsWrapper title="Top Destinations" linkTitle="Expolore more destinations">
      <div className={styles.cardsRow}>
        <TopDestinationCard title="Great Barrier Reef" country="Australia" width="md" height="lg" img={images.maskGroup16} gradDeg={219} />
        <div className={styles.topDestinationsCardsColumn}>
          <div className={styles.cardsRow}>
            <TopDestinationCard title="Rotorua" country="New Zealand" width="sm" height="md" img={images.maskGroup18} gradDeg={213} />
            <TopDestinationCard title="Bangkok" country="Thailand" width="md" height="md" img={images.maskGroup20} gradDeg={234} />
          </div>
          <div className={styles.cardsRow}>
            <TopDestinationCard title="Queenstown" country="New Zealand" width="md" height="sm" img={images.maskGroup19} gradDeg={245} />
            <TopDestinationCard title="Waitomo" country="New Zealand" width="sm" height="sm" img="54" gradDeg={226} />
          </div>
        </div>
        <TopDestinationCard title="Uluru" country="Australia" width="sm" height="lg" img={images.maskGroup17} gradDeg={201} />
      </div>
    </CardsWrapper>

    <CardsWrapper title="Activities, Tours & Things To D" linkTitle="Show more >>">
      <div key="1" className={styles.activitiesTourThingsCardsRow}>
        <ActivityCard title="Dive & Snorkelling" variant="diveSnorkelling" />
        <ActivityCard title="Multi-days Tours" variant="multidaysTours" />
        <ActivityCard title="Surfing & SUP" variant="surfingSUP" />
        <ActivityCard title="Whale & dolphin watching" variant="whaleDolphinWatching" gradDeg={209} />
      </div>

      <div key="2" className={styles.activitiesTourThingsCardsRow}>
        <ActivityCard title="Classes & Workshops" variant="classesWorkshops" />
        <ActivityCard title="Skydiving" variant="skydiving" gradDeg={209} />
        <ActivityCard title="Bungee Jumping" variant="bungeeJumping" />
        <ActivityCard title="Attractions" variant="attractions" />
      </div>
    </CardsWrapper>

    <CardsWrapper title="Travel stories" linkTitle="Read more">
      <TravelStoryCard
        key="1"
        img={images.featuredArticle}
        title="HOW TO TRAVEL BY RV ON A BACKPACKER BUDGET"
        description="America, Backpacking Tips, Budget tips, Road Trip, RV"
        variant="lg"
        gradDeg={252}
      />
      <div key="2" className={styles.travelStoriesCardsRow}>
        <TravelStoryCard
          img={images.article}
          title="10 TIPS EVERY BACKPACKER SHOULD KNOW"
          description="America, Backpacking Tips, Budget tips"
          variant="md"
          gradDeg={250}
        />
        <TravelStoryCard
          img={images.maskGroup15}
          title="WHY I LOVE SOLO TRAVEL (AND WHY YOU WILL TO)"
          description="America, Backpacking Tips, Budget tips"
          variant="sm"
          gradDeg={234}
        />
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

    <CardsWrapper title="Promoting the best of" linkTitle="Learn more">
      <div className={styles.cardsRow}>
        <img alt="" src={images.p1} />
        <img alt="" src={images.p2} />
        <img alt="" src={images.p3} />
        <img alt="" src={images.p4} />
        <img alt="" src={images.p5} />
        <img alt="" src={images.p6} />
      </div>
    </CardsWrapper>

    <CardsWrapper title="Inspiration from our instagram" linkTitle="Follow us">
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
