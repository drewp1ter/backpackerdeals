import classNames from 'classnames'
import Link from 'next/link'
import * as React from 'react'

import styles from './CardsWrapper.module.scss'

export interface IProps {
  readonly title: string
  readonly linkTitle: string
  readonly children: JSX.Element | JSX.Element[]
  readonly className?: string
  readonly linkURL?: string
}

export const CardsWrapper: React.FC<IProps> = ({ title, linkTitle, children, className, linkURL }) => {
  const mainClass = classNames(styles.cardsWrapper, className)
  return (
    <section className={mainClass}>
      <h3>{title}</h3>
      <p>
        <Link href={linkURL || '#'}>
          <a>
            {linkTitle}
            <i className="fas fa-angle-double-right" />
          </a>
        </Link>
      </p>
      {children}
    </section>
  )
}
