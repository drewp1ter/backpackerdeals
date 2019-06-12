import * as React from 'react'

import { CardsWrapper, InstagramCard } from '..'
import styles from './InstagramSection.module.scss'

export interface IProps {
  readonly className?: string
}

export const InstagramSection: React.FC<IProps> = ({ className }) => (
  <CardsWrapper className={className} title="Inspiration from our instagram" linkTitle="Follow us">
    <div className={styles.instagramCards}>
      <InstagramCard variant="v1" />
      <InstagramCard variant="v2" />
      <InstagramCard variant="v3" />
      <InstagramCard variant="v4" />
      <InstagramCard variant="v5" />
      <InstagramCard variant="v6" />
    </div>
  </CardsWrapper>
)
