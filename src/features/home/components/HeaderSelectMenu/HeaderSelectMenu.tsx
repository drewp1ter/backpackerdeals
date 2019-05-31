import * as React from 'react'

import classNames from 'classnames'

import styles from './HeaderSelectMenu.module.scss'

interface IProps {
  readonly children: React.ReactNode
  readonly title: string
  readonly opener: React.ReactNode
}

interface IState {
  readonly isOpen: boolean
}

export class HeaderSelectMenu extends React.Component<IProps, IState> {
  public state = {
    isOpen: false,
  }

  private ref = React.createRef<HTMLDivElement>()

  componentDidMount() {
    window.addEventListener('click', this.handleClickOutside)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClickOutside)
  }

  public handleClickOutside = (event: MouseEvent) => {
    if (this.state.isOpen && this.ref.current && !this.ref.current.contains(event.target as Node)) {
      this.setState({ isOpen: false })
    }
  }

  public handleOpen = () => this.setState({ isOpen: !this.state.isOpen })

  render() {
    const { title, opener, children } = this.props
    const { isOpen } = this.state
    return (
      <div ref={this.ref} className={styles.headerSelectMenu}>
        <div className={classNames(styles.opener, isOpen && styles.opened)} onClick={this.handleOpen}>
          <span>{opener}</span>
          <i className="fas fa-chevron-down" />
        </div>

        {isOpen && (
          <div className={styles.menu}>
            <div className={styles.title}>
              <h6>{title}</h6>
              <i className="fas fa-times" onClick={this.handleOpen} />
            </div>
            {children}
          </div>
        )}
      </div>
    )
  }
}
