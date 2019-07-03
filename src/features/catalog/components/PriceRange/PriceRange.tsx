import classNames from 'classnames'
import React from 'react'
import { Handles, Rail, Slider, SliderItem, Tracks } from 'react-compound-slider'

import styles from './PriceRange.module.scss'

const domain: number[] = [100, 900]

interface IProps {
  readonly range?: number[]
  readonly className?: string,
  readonly onChange?: (values: number[]) => void
}

export const PriceRange: React.FC<IProps> = ({ className, onChange, range = [100, 500] }) => {
  const handleChangeRange = (values: readonly number[]) => {
    onChange && onChange([...values]);
  }

  return (
    <div className={ classNames(styles.priceRange, className)}>
      <h4 className={styles.title}>Price range</h4>
      <Slider mode={1} step={1} domain={domain} className={styles.slider} onChange={handleChangeRange} values={range}>
        <Rail>{({ getRailProps }) => <div className={styles.rail} {...getRailProps()} />}</Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <div>
              {handles.map(({ id, value, percent }: SliderItem) => (
                <div
                  key={id}
                  role="slider"
                  className={styles.handle}
                  aria-valuemin={domain[0]}
                  aria-valuemax={domain[1]}
                  aria-valuenow={value}
                  style={{
                    left: `${percent}%`,
                  }}
                  {...getHandleProps(id)}
                ><div className={styles.dot} /></div>
              ))}
            </div>
          )}
        </Handles>
        <Tracks left={false} right={false}>
          {({ tracks, getTrackProps }) => (
            <div>
              {tracks.map(({ id, source, target }) => (
                <div
                  key={id}
                  className={styles.track}
                  style={{
                    left: `${source.percent}%`,
                    width: `${target.percent - source.percent}%`,
                  }}
                  {...getTrackProps()}
                />
              ))}
            </div>
          )}
        </Tracks>
      </Slider>
      <div className={styles.aud}>
        <span>$100 AUD</span>
        <span>$900 AUD</span>
      </div>
    </div>
  )
}
