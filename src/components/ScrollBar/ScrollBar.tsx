import * as React from 'react'

import Scrollbars from 'react-custom-scrollbars'
import styles from './ScrollBar.module.scss'

export interface IProps {
  readonly children?: React.ReactNode
}

export const ScrollBar: React.FC<IProps> = ({ children }) => {

  const renderThumb = ({ ...props }) => (<div className={styles.scrollBarThumb} {...props}/>)

  const renderTrackVertical = ({ ...props }) => (<div className={styles.scrollBarTrack} {...props}/>)

  return (
    <Scrollbars
      autoHeight={true}
      autoHeightMax={370}
      className={styles.scrollBar}
      renderTrackVertical={renderTrackVertical}
      renderThumbVertical={renderThumb}
    >
      {children}
    </Scrollbars>
  )
}




