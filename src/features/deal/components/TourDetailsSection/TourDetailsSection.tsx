import React from 'react'

import { TourDetailsCard } from '..'
import styles from './TourDetailsSection.module.scss'

export const TourDetailsSection: React.FC = () => {
  return (
    <>
      <TourDetailsCard
        className={styles.card}
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
    </>
  )
}
