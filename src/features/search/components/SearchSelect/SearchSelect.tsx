import * as React from 'react'

import classNames from 'classnames'
import { ScrollBar } from '../../../../components/ScrollBar'

import styles from './SearchSelect.module.scss'

interface IState {
  isOpen: boolean
}

interface IProps {
  readonly options?: string[]
  readonly children?: React.ReactNode
  readonly className?: string
  readonly theme: 'dark' | 'light'
  readonly selectedOption: string
  readonly disabled?: boolean
  readonly bodyTheme?: 'mobile'
  readonly handleSelect: (event: React.MouseEvent<HTMLElement>) => void
}

export class SearchSelect extends React.Component<IProps, IState> {
  state = {
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

  public toggleSelect = () => this.setState({ isOpen: !this.state.isOpen })

  render() {
    const { children, className, options, theme, selectedOption, disabled = false, handleSelect, bodyTheme } = this.props
    const { isOpen } = this.state
    return (
      <div ref={this.ref} className={styles.searchSelect} data-theme={theme} data-bodytheme={bodyTheme}>
        <div
          className={classNames(styles.select, className)}
          data-opened={isOpen && 'opened'}
          data-disabled={disabled && 'disabled'}
          onClick={() => !disabled && this.toggleSelect()}
        >
          <i className="fas fa-angle-down"/>
          <span>{selectedOption}</span>
        </div>

        {isOpen && (

          <div className={styles.optionBlock}>
            <ScrollBar>
              {options &&
              options.map((option, index) => (
                <p key={`option-${index}`} className={styles.option} onClick={handleSelect} data-value={option}>
                  {option}
                </p>
              ))}
              {children}
            </ScrollBar>
          </div>
        )}
      </div>
    )
  }
}
