import React from 'react'

import { MostPopular, Tab, Tabs } from '..'
import data from './data'

interface IProps {
  readonly theme?: 'mobile'
  readonly displayTheme?: 'flex'
}

export const SelectContinent: React.FC<IProps> = ({ theme, displayTheme }) => (
  <Tabs bodyTheme={theme}>
    <Tab label="Australia & NZ">
      <Tabs displayTheme={displayTheme} bodyTheme={theme} theme="leftmenu">
        <Tab label="Australia" description="258 Activities">
          <MostPopular theme={theme} places={data} title="Most popular cities in Australia" />
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
