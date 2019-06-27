import * as React from 'react'

// @ts-ignore
import { Scrollbars } from 'react-custom-scrollbars'
import styles from './ScrollBar.module.scss'

export interface IProps {
  readonly children?: React.ReactNode
}

export const ScrollBar: React.FC<IProps> = ({ children }) => {

  const renderThumb = ({ ...props }) => {
    return (
      <div className={styles.scrollBarThumb} {...props}/>
    )
  }

  const renderTrackVertical = ({ ...props }) => {
    return (
      <div className={styles.scrollBarTrack} {...props}/>
    )
  }

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




