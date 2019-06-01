import React from 'react'

import { SelectMenu, Tabs, Tab } from '..'
import styles from './SelectContinent.module.scss'

export const SelectContinent: React.FC = () => {
  const continentOpener: React.ReactNode = <span className={styles.continentOpener}>Explore by country</span>
  return (
    <SelectMenu openerClass={styles.opener} open={false} opener={continentOpener} title="Select continent" size="lg" pos="left">
      <Tabs>
        <Tab label="Australia & NZ">
          <Tabs theme="leftmenu">
            <Tab label="Australia" description="258 Activities">
              Nothing to see here
            </Tab>
            <Tab label="New Zealand" description="258 Activities">
              adas
            </Tab>
          </Tabs>
        </Tab>
        <Tab label="Africa">
          After &apos;while, <em>Crocodile</em>!
        </Tab>
        <Tab label="Asia">
          Nothing to see here, this tab is <em>extinct</em>!
        </Tab>
      </Tabs>
    </SelectMenu>
  )
}
