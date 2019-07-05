import React, { useState } from 'react'

import classNames from 'classnames'

import styles from './FooterLinks.module.scss'

interface IProps {
  readonly title: string
  readonly children: React.ReactNode
  readonly className?: string
}

export const FooterLinks: React.FC<IProps> = ({ title, children, className }) => {
  const [isOpen, toggleOpen] = useState(false)

  const handleClick = () => toggleOpen(!isOpen)

  return (
    <div className={classNames(styles.footerLink, className)}>
      <div onClick={handleClick} className={styles.linkTitle} data-active={isOpen}>
        <span>{title}</span>
        <i className="fas fa-chevron-right"/>
      </div>
      <div className={styles.links} data-visible={isOpen}>
        {children}
      </div>
    </div>
  )
}
