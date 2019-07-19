import classNames from 'classnames'
import * as React from 'react'

import styles from './Autocomplete.module.scss'

enum Themes {
  default = 'default',
  roundedTransparent = 'roundedTransparent',
}

export interface IProps {
  readonly suggestions: string[]
  readonly className?: string
  readonly inputClassName?: string
  readonly name?: string
  readonly label?: string
  readonly value?: string
  readonly theme?: keyof typeof Themes
  readonly onChange?: (value: string, name?: string, onSelect?: boolean) => void
  readonly placeholder?: string
  readonly labelId?: string
  readonly children?: JSX.Element
  readonly size?: 'lg' | 'ulg'
}

export interface IState {
  readonly suggestions: string[]
  readonly showSuggestions: boolean
  readonly focus: boolean
  readonly suggestionIndex: number
}

export class Autocomplete extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    theme: Themes.default,
    inputClassName: '',
    className: '',
    placeholder: '',
    size: 'lg',
  }

  public state = {
    suggestions: this.props.suggestions,
    showSuggestions: false,
    suggestionIndex: -1,
    focus: false,
  }

  public componentDidUpdate = ({ suggestions }: IProps) => suggestions !== this.props.suggestions && this.setState({ suggestions })

  public onInputFocus = () => {
    this.setState({ focus: true })
  }

  public onInputBlur = () => {
    this.setState({ showSuggestions: false, focus: false })
  }

  public toggleShowSuggestions = () => this.setState(prev => ({ ...prev, showSuggestions: !prev.showSuggestions }))

  public handleChange = ({ target: { value, name = '' } }: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const { onChange } = this.props
      const suggestions: string[] = this.props.suggestions.filter((suggestion: string) =>
        suggestion.toLowerCase().includes(value!.toLowerCase())
      )
      this.setState({ suggestions, showSuggestions: suggestions.length > 0, suggestionIndex: -1 })
      onChange && onChange(value, name)
    } catch (e) {
      console.error(e)
    }
  }

  public onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    try {
      const { suggestionIndex, suggestions } = this.state
      const { onChange, name } = this.props
      switch (event.which) {
        case 40: {
          // Arrow down
          event.preventDefault()
          if (suggestionIndex < suggestions.length - 1) {
            const newSuggestionIndex = suggestionIndex + 1
            this.setState({ suggestionIndex: newSuggestionIndex })
            onChange && onChange(suggestions[newSuggestionIndex], name)
          }
          break
        }
        case 38: {
          // Arrow up
          event.preventDefault()
          if (suggestionIndex > 0) {
            const newSuggestionIndex = suggestionIndex - 1
            this.setState({ suggestionIndex: newSuggestionIndex })
            onChange && onChange(suggestions[newSuggestionIndex], name)
          }
          break
        }
        case 13: {
          // Enter
          event.preventDefault()
          suggestionIndex >= 0 && this.selectSuggestion(suggestionIndex)
          break
        }
        default:
      }
    } catch (e) {
      console.error(e)
    }
  }

  public onSuggestionClick = (event: React.MouseEvent<HTMLElement>) => {
    try {
      const index = event.currentTarget.dataset.index || -1
      this.selectSuggestion(+index)
      event.stopPropagation()
    } catch (e) {
      console.error(e)
    }
  }

  public selectSuggestion = (index: number) => {
    try {
      const { onChange, name = '' } = this.props
      const { suggestions } = this.state
      if (suggestions.length >= index - 1) {
        this.setState({
          suggestionIndex: index,
          showSuggestions: false,
        })
        onChange && onChange(suggestions[index], name, true)
      }
    } catch (e) {
      console.error(e)
    }
  }

  public suggestionsList = (): JSX.Element[] => {
    try {
      return this.state.suggestions.map((suggestion, index) => {
        const suggestionClass = classNames(styles.suggestion, { [styles.suggestionCurrent]: index === this.state.suggestionIndex })
        return (
          <div className={suggestionClass} key={index} data-index={index} onMouseDown={this.onSuggestionClick}>
            {suggestion}
          </div>
        )
      })
    } catch (e) {
      console.error(e)
      return []
    }
  }

  public render = () => {
    const { showSuggestions, focus } = this.state
    const { className, name, theme, value, placeholder, inputClassName, label, children, size } = this.props
    let { labelId } = this.props
    const wrpClass = classNames(styles.autocomplete, className)
    if (label && !labelId) {
      labelId = Math.random().toString()
    }
    return (
      <div className={wrpClass}>
        {label && <label htmlFor={labelId}>{label}</label>}
        <div className={styles.field} data-size={size} data-theme={theme} data-focus={focus || showSuggestions}>
          {theme === Themes.default && (
            <i
              onClick={this.toggleShowSuggestions}
              tabIndex={0}
              onBlur={this.onInputBlur}
              className="fas fa-angle-down"
              data-suggestions={showSuggestions}
            />
          )}
          <input
            id={labelId}
            value={value}
            name={name}
            className={inputClassName}
            data-theme={theme}
            onChange={this.handleChange}
            onKeyPress={this.onKeyPress}
            onKeyDown={this.onKeyPress}
            onFocus={this.onInputFocus}
            onBlur={this.onInputBlur}
            autoComplete="off"
            placeholder={placeholder}
            data-size={size}
          />
          {children}
        </div>
        {showSuggestions && (
          <div className={styles.suggestions}>
            {this.suggestionsList()}
          </div>
        )}
      </div>
    )
  }
}
