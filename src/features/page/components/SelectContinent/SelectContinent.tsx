import React from 'react'

import { MostPopular, Tab, Tabs } from '..'
import data from './data'

export const SelectContinent: React.FC = () => (
  <Tabs>
    <Tab label="Australia & NZ">
      <Tabs theme="leftmenu">
        <Tab label="Australia" description="258 Activities">
          <MostPopular places={data} title="Most popular cities in Australia" />
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
)
