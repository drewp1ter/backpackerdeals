import * as React from 'react'

import classNames from 'classnames'

import './HeaderSelectMenu.scss'

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

  componentDidMount() {
    window.addEventListener('click', this.handleClickOutside)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClickOutside)
  }

  public handleClickOutside = (event: React.MouseEvent<EventTarget>) => {
    if (this.state.isOpen && this.ref.current && !this.ref.current.contains(event.target)) {
      this.setState({ isOpen: false })
    }
  }

  private ref = React.createRef<HTMLDivElement>()

  public handleOpen = () => this.setState({ isOpen: !this.state.isOpen })

  render() {
    const { title, opener, children } = this.props
    const { isOpen } = this.state
    return (
      <div ref={this.ref} className="header-select-menu">
        <div className={classNames('opener', isOpen && 'opened')} onClick={this.handleOpen}>
          <span>{opener}</span>
          <i className="fas fa-chevron-down" />
        </div>

        {isOpen && (
          <div className="menu">
            <div className="title">
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
