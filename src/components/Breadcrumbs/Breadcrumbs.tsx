import classNames from 'classnames'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { WithRouterProps } from 'next/router'
import React from 'react'

import styles from './Breadcrumbs.module.scss'

export interface IProps {
  titles: string[]
  className?: string
}

const Breadcrumbs: React.FC<IProps & WithRouterProps> = ({ titles, router, className }) => {
  const rootClass = classNames(styles.breadcrumbs, className)
  const routes = router!.route.match(/\/\w+/g)
  let links = ''
  return (
    <div className={rootClass}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <i className="fas fa-angle-right" />
      {routes!.map((route: string, idx: number) => {
        links += route
        return idx < routes!.length - 1 ? (
          <>
            <Link key={idx} href={links}>
              <a>{titles[idx]}</a>
            </Link>
            <i key={idx} className="fas fa-angle-right" />
          </>
        ) : (
          <a key={idx}>{titles[idx]}</a>
        )
      })}
    </div>
  )
}

export default withRouter(Breadcrumbs)
