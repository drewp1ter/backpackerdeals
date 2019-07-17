import React from 'react'

import { MostPopular, Tab, Tabs } from '..'
import data from './data'

interface IProps {
  readonly theme?: 'mobile'
  readonly displayTheme?: 'flex'
  readonly handleClose?: () => void
}

export const SelectContinent: React.FC<IProps> = ({ theme, handleClose, displayTheme }) => (
  <Tabs bodyTheme={theme}>
    <Tab label="Australia & NZ">
      <Tabs displayTheme={displayTheme} bodyTheme={theme} theme="leftmenu">
        <Tab label="Australia" description="258 Activities">
          <MostPopular handleClose={handleClose} theme={theme} places={data} title="Most popular cities in Australia" />
        </Tab>
        <Tab label="New Zealand" description="258 Activities">
          <MostPopular handleClose={handleClose} theme={theme} places={data} title="Most popular cities in Australia" />
        </Tab>
      </Tabs>
    </Tab>
    <Tab label="Africa">
      <Tabs displayTheme={displayTheme} bodyTheme={theme} theme="leftmenu">
        <Tab label="Australia" description="258 Activities">
          <MostPopular handleClose={handleClose} theme={theme} places={data} title="Most popular cities in Australia" />
        </Tab>
        <Tab label="New Zealand" description="258 Activities">
          <MostPopular handleClose={handleClose} theme={theme} places={data} title="Most popular cities in Australia" />
        </Tab>
      </Tabs>
    </Tab>
    <Tab label="Asia">
      <Tabs displayTheme={displayTheme} bodyTheme={theme} theme="leftmenu">
        <Tab label="Australia" description="258 Activities">
          <MostPopular handleClose={handleClose} theme={theme} places={data} title="Most popular cities in Australia" />
        </Tab>
        <Tab label="New Zealand" description="258 Activities">
          <MostPopular handleClose={handleClose} theme={theme} places={data} title="Most popular cities in Australia" />
        </Tab>
      </Tabs>
    </Tab>
  </Tabs>
)
