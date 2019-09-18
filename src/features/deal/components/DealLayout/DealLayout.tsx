import Link from 'next/link'
import React, { useRef, useState } from 'react'

import { Breadcrumbs, MobileMenuWrapper } from 'components'
import { ReviewsSection } from 'features/reviews/components'
import {
  BookingWeek,
  BookNow,
  DealsSection,
  FaqSection,
  Navigation,
  RelatedTravelBlogs,
  TourDescription,
  TourDetailsCard,
  TourGallery,
  TourIcons,
  TourOperator,
  TourOptions,
  WhatsToExpect,
} from '..'
import { BookingMonth, OrderDetails } from '../../containers'
import { recommendedDeals } from './data'
import styles from './DealLayout.module.scss'

export const DealLayout: React.FC = () => {
  const [isOpenNavMenu, setIsOpenNavMenu] = useState<boolean>(false)
  const handleToggleMobileNav = () => setIsOpenNavMenu(!isOpenNavMenu)
  const refs = {
    included: useRef<HTMLDivElement>(null),
    excluded: useRef<HTMLDivElement>(null),
    whereWeVisit: useRef<HTMLDivElement>(null),
    whatsToExpect: useRef<HTMLDivElement>(null),
    bookingCalendar: useRef<HTMLDivElement>(null),
    terms: useRef<HTMLDivElement>(null),
    policy: useRef<HTMLDivElement>(null),
    reviews: useRef<HTMLDivElement>(null),
  }

  return (
    <>
      <div className={styles.headerSection}>
        <Navigation refs={refs} className={styles.navigation} />
        <Breadcrumbs className={styles.breadcrumbs} titles={['Deals']} />
        <TourDescription className={styles.tourDescription} />
      </div>

      <div className={styles.section}>
        <TourGallery className={styles.tourGallery} lazyLoad={true} />

        <div className={styles.iconsOrderDetails}>
          <div className={styles.stickyWrapper}>
            <OrderDetails className={styles.orderDetails} />
          </div>
          <div>
            <TourIcons className={styles.tourIcons} />
          </div>
        </div>

        <TourDetailsCard
          className={styles.card}
          navAnchor={refs.included}
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
          navAnchor={refs.excluded}
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
          navAnchor={refs.whereWeVisit}
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

        {/*<TourDetailsCard className={styles.card} title="Why we love this">*/}
        {/*  <p>*/}
        {/*    We love how many walks you get to do on this tour. It’s a great way to see the landscape and immerse yourself in the outback*/}
        {/*    experience.*/}
        {/*  </p>*/}
        {/*</TourDetailsCard>*/}

        <WhatsToExpect navAnchor={refs.whatsToExpect} className={styles.whatsToExpect} />
        <TourOptions className={styles.tourOptions} />
        {/* <BookingMonth navAnchor={refs.bookingCalendar} className={styles.bookingCalendar} /> */}
        <BookingWeek className={styles.bookingCalendar} />
        <FaqSection className={styles.faqSection} />

        <TourDetailsCard
          className={styles.card}
          navAnchor={refs.terms}
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
          navAnchor={refs.policy}
          title="Cancellation policy"
          items={[
            'Cancellations 30 days or more before departure: 25% of the total cost',
            'Cancellations 30 days or more before departure: 25% of the total cost',
            'Cancellations 30 days or more before departure: 25% of the total cost',
          ]}
        />

        <TourOperator className={styles.tourOperator} />
        <ReviewsSection navAnchor={refs.reviews} className={styles.reviews} title="Reviews" rating={4} />
        <RelatedTravelBlogs className={styles.relatedTravelBlogs} />
      </div>
      <div className={styles.section}>
        <DealsSection className={styles.dealsSection} title="Recommended Deals" data={recommendedDeals} />
        <DealsSection className={styles.dealsSection} title="Recently viewed deals" data={recommendedDeals} />
      </div>
      <BookNow onClickMenu={handleToggleMobileNav} className={isOpenNavMenu && styles.hideBookNow} />
      <MobileMenuWrapper open={isOpenNavMenu} className={styles.moduleNavMenu}>
        <Navigation refs={refs} onClose={handleToggleMobileNav} />
      </MobileMenuWrapper>
    </>
  )
}
