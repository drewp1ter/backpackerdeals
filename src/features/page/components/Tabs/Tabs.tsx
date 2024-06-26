import React, { useState } from 'react'

import styles from './Tabs.module.scss'

export interface IProps {
  readonly children: JSX.Element[]
  readonly theme?: 'head' | 'leftmenu'
  readonly bodyTheme?: 'mobile'
  readonly displayTheme?: 'flex'
}

export const Tabs: React.FC<IProps> = ({ children, theme = 'head', bodyTheme, displayTheme }) => {
  const [activeTab, setActiveTab] = useState<number>(0)

  const handleTabClick = (event: React.MouseEvent<HTMLElement>) => {
    const id = event.currentTarget.dataset.id || 0
    setActiveTab(+id)
  }

  const renderTabs = () =>
    children.map(({ props: { label, description } }, idx) => (
      <li key={label} className={styles.tab} onClick={handleTabClick} data-active={activeTab === idx} data-id={idx}>
        {label}
        {description && <p>{description}</p>}
      </li>
    ))

  return (
    <div className={styles.tabs} data-displaytheme={displayTheme} data-bodytheme={bodyTheme}>
      <ul data-theme={theme}>{renderTabs()}</ul>
      {children[activeTab]}
    </div>
  )
}
