import * as React from 'react'

// @ts-ignore
import { Scrollbars } from 'react-custom-scrollbars'
import styles from './ScrollBar.module.scss'

export interface IProps {
  readonly children?: React.ReactNode
}

export class ScrollBar extends React.Component<IProps> {

  renderThumb({ ...props }) {
    return (
      <div className={styles.scrollBarThumb}
           {...props}/>
    )
  }

  renderTrackVertical({ ...props }) {
    return (
      <div className={styles.scrollBarTrack}
           {...props}/>
    )
  }

  render() {
    const { children } = this.props
    return (
      <Scrollbars
        autoHeight={true}
        autoHeightMax={370}
        className={styles.scrollBar}
        renderTrackVertical={this.renderTrackVertical}
        renderThumbVertical={this.renderThumb}
      >
        {children}
      </Scrollbars>
    )
  }
}




