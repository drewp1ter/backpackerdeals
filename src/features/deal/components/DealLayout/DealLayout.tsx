import Link from 'next/link'
import React, { useRef } from 'react'

import { Breadcrumbs } from 'components'
import {
  BookingCalendar,
  DealsSection,
  FaqSection,
  Navigation,
  OrderDetails,
  RelatedTravelBlogs,
  TourDescription,
  TourDetailsCard,
  TourIcons,
  TourInfoGallery,
} from '..'
import { recommendedDeals } from './data'
import styles from './DealLayout.module.scss'

export const DealLayout: React.FC = () => {

  const refs = {
    included: useRef<HTMLDivElement>(null),
    excluded: useRef<HTMLDivElement>(null),
    whereWeVisit: useRef<HTMLDivElement>(null),
    terms: useRef<HTMLDivElement>(null),
    policy: useRef<HTMLDivElement>(null)
  }

  return (
    <div className={styles.dealLayout}>
      <Navigation refs={refs} />

      <Breadcrumbs className={styles.breadcrumbs} titles={['Deals']} />

      <TourDescription className={styles.tourDescription} />

      <div className={styles.header}>
        <div>
          <TourInfoGallery className={styles.tourInfoGallery} />
          <TourIcons className={styles.tourIcons} />
        </div>
        <OrderDetails className={styles.orderDetails} />
      </div>

      <TourDetailsCard
        className={styles.card}
        rf={refs.included}
        title="What’s included"
        items={[
          'Alice Springs to Uluru (Ayers Rock) to Alice Springs - all transport',
          'Knowledgeable guide',
          'National park fees',
          '3 Day / 2 Night camping',
          '2 x Breakfast, 3 x Lunch, 2 x Dinner',
          'Swags (sleeping mattress)',
        ]}
      />

      <TourDetailsCard
        className={styles.card}
        rf={refs.excluded}
        title="What’s excluded"
        items={[
          'Sleeping bag hire for $20 (or bring your own)',
          'Optional camel ride for $7 for 3 to 5 minutes',
          'Optional Fields of Light for $42',
          'Flights',
        ]}
      />

      <TourDetailsCard
        className={styles.card}
        rf={refs.whereWeVisit}
        title="Where we visit"
        items={[
          'Uluru sunrise',
          'Uluru sunset',
          'Uluru base walk',
          'Aboriginal Cultural Centre',
          'Kings Canyon',
          'Kata Tjuta (Valley of the Winds/The Olgas)',
          'Garden of Eden',
          'Curtin Springs',
          'Mala Walk',
          'Mutijulu Waterhole',
          'Camel farm (Optional camel ride for $7 for 3 to 5 minutes)',
        ]}
      />

      <TourDetailsCard className={styles.card} title="Why we love this">
        <p>
          We love how many walks you get to do on this tour. It’s a great way to see the landscape and immerse yourself in the outback
          experience.
        </p>
      </TourDetailsCard>

      <TourDetailsCard className={styles.card} title="What to expect">
        <p>
          No trip to Australia is complete without visiting Uluru, in the ‘Red Centre’ - a region famous for its cultural connection, native
          vegetation and stunning landscape. This trip is the perfect choice for budget-conscious travellers looking to experience all that
          the region has to offer! It’s affordable and great fun!
        </p>
      </TourDetailsCard>

      <BookingCalendar />

      <FaqSection className={styles.faqSection} />

      <TourDetailsCard
        className={styles.card}
        rf={refs.terms}
        title="Terms & Conditions"
        items={[
          'Itinerary may change due to cultural reasons, seasonal changes, operational logistics and accessibility.',
          'Tour is not suitable for children under 5 years of age.',
          'Due to limited space on the vehicle please restrict luggage to one day pack and one soft overnight bag/backpack. Excess luggage should be stored at your Alice Springs accommodation. If commencing at Ayers Rock please ensure you have one day pack and a soft overnight bag/backpack with the items you require for the 3 days packed inside as your large luggage will be stored in the vehicle/trailer and will not be accessible during this time.',
        ]}
      >
        <Link href="#">
          <a>Tour operator terms & conditions</a>
        </Link>
      </TourDetailsCard>

      <TourDetailsCard
        className={styles.card}
        rf={refs.policy}
        title="Cancellation policy"
        items={[
          'Cancellations 30 days or more before departure: 25% of the total cost',
          'Cancellations 30 days or more before departure: 25% of the total cost',
          'Cancellations 30 days or more before departure: 25% of the total cost',
        ]}
      />

      <RelatedTravelBlogs className={styles.relatedTravelBlogs} />
      <DealsSection className={styles.dealsSection} title="Recommended Deals" data={recommendedDeals} />
      <DealsSection className={styles.dealsSection} title="Recently viewed deals" data={recommendedDeals} />
    </div>
  )
}
