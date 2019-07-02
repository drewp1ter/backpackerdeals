import * as React from 'react'

import classNames from 'classnames'
import { ScrollBar } from '..'

import styles from './Select.module.scss'

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
  readonly onChange?: (value: any) => void
}

export class Select extends React.Component<IProps, IState> {
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

  public handleChange = (event: React.MouseEvent<HTMLElement>) => {
    const index = event.currentTarget.dataset.index || 0
    const { onChange, options } = this.props
    options && onChange && onChange(options[+index])
    this.setState({ isOpen: false })
  }

  public handleClickOutside = (event: MouseEvent) => {
    if (this.state.isOpen && this.ref.current && !this.ref.current.contains(event.target as Node)) {
      this.setState({ isOpen: false })
    }
  }

  public toggleSelect = () => this.setState({ isOpen: !this.state.isOpen })

  render() {
    const { children, className, options, theme, selectedOption, disabled = false, bodyTheme } = this.props
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
                <p key={`option-${index}`} className={styles.option} onClick={this.handleChange} data-index={index}>
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
