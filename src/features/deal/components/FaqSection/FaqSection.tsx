import classNames from 'classnames'
import React from 'react'
import { FaqCard } from '..'
import data from './data'

import styles from './FaqSection.module.scss'

export interface IProps {
  readonly className?: string
}

export interface IState {
  readonly isExpanded: number
}

export class FaqSection extends React.Component<IProps, IState> {
  state = {
    isExpanded: 0,
  }

  handleClickExpand = (value: number) => this.setState(prev => ({ isExpanded: prev.isExpanded ^ value }))
  handleToggleExpandAll = () => this.setState(prev => ({ isExpanded: prev.isExpanded ? 0 : -1 }))
  renderCards = () => {
    const { isExpanded } = this.state
    return data.map((card, idx) => <FaqCard isExpanded={isExpanded} onClickExpand={this.handleClickExpand} id={idx} key={idx} {...card} />)
  }

  handleResize = () => screen.width < 768 ? this.setState({ isExpanded: -1 }) : this.setState({ isExpanded: 0 })

  componentDidMount = () => {
    addEventListener('resize', this.handleResize)
    this.handleResize()
  }

  componentWillUnmount = () => {
    removeEventListener('resize', this.handleResize)
  }

  render = () => {
    const { className } = this.props
    const { isExpanded } = this.state
    return (
      <div className={classNames(styles.faqSection, className)}>
        <div className={styles.head}>
          <h3>FAQ</h3>
          <p data-expanded={!!isExpanded} onClick={this.handleToggleExpandAll}>
            {isExpanded ? 'Collapse all' : 'Expand all'}
            <i className="fas fa-angle-double-down" />
          </p>
        </div>
        <ul>{this.renderCards()}</ul>
      </div>
    )
  }
}
