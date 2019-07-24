import * as React from 'react'

import classNames from 'classnames'
import { Calendar, ScrollBar } from '..'

import styles from './Select.module.scss'

interface IState {
  isOpen: boolean
}

interface IProps {
  readonly options?: string[]
  readonly children?: React.ReactNode
  readonly className?: string
  readonly theme: 'dark' | 'light'
  readonly selectedOption: any
  readonly disabled?: boolean
  readonly bodyTheme?: 'mobile'
  readonly onChange?: (value: any) => void
  readonly type?: 'calendar' | 'default'
  readonly format?: (value: any) => any
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

  public handleChangeCalendar = (date: Date) => {
    const { onChange } = this.props
    onChange && onChange(date)
    this.setState({ isOpen: false })
  }

  public handleClickOutside = (event: MouseEvent) => {
    if (this.state.isOpen && this.ref.current && !this.isContainNode(event.target as HTMLElement)) {
      this.setState({ isOpen: false })
    }
  }

  public isContainNode(el: Node | null): boolean {
    const { current } = this.ref
    const isCalendarEl = !!el && (el.parentNode as HTMLElement).className.search('react-calendar') > -1
    return !!current && (current === el || current.contains(el) || isCalendarEl)
  }

  public toggleSelect = () => !this.props.disabled && this.setState({ isOpen: !this.state.isOpen })

  render() {
    const { children, className, options, theme, selectedOption, disabled = false, bodyTheme, type = 'default', format } = this.props
    const { isOpen } = this.state
    return (
      <div ref={this.ref} className={styles.searchSelect} data-theme={theme} data-bodytheme={bodyTheme}>
        <div
          className={classNames(styles.select, className)}
          data-opened={isOpen && 'opened'}
          data-disabled={disabled && 'disabled'}
          onClick={this.toggleSelect}
        >
          <i className="fas fa-angle-down" />
          <span>{format ? format(selectedOption) : selectedOption}</span>
        </div>

        {isOpen && (
          <div className={styles.optionBlock}>
            <ScrollBar>
              {options &&
                type === 'default' &&
                options.map((option, index) => (
                  <p key={`option-${index}`} className={styles.option} onClick={this.handleChange} data-index={index}>
                    {option}
                  </p>
                ))}
              {type === 'calendar' && <Calendar date={selectedOption} onChange={this.handleChangeCalendar} />}
              {children}
            </ScrollBar>
          </div>
        )}
      </div>
    )
  }
}
