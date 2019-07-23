import * as React from 'react'

import { Button } from 'components'
import { ISearchActions } from 'features/search'

import { IContextSearchResult } from 'features/search/models'
import styles from './BasicSearchTravel.module.scss'
import configData, { IConfigItem } from './configData'

export interface ISuggestion {
  readonly name: string
  readonly data: string[]
}

export interface ISuggestions {
  readonly activities: IConfigItem[]
  readonly locations: IConfigItem[]
  readonly offers: IContextSearchResult[]
}

export interface IProps {
  readonly contextSearchResult: IContextSearchResult[]
}

export interface IState {
  readonly suggestions: ISuggestions
  readonly showSuggestions: boolean
  readonly focus: boolean
  readonly suggestionIndex: number
  readonly suggestionsLength: number
  readonly inputValue: string
}

export class BasicSearchTravel extends React.Component<Partial<ISearchActions> & IProps, IState> {
  public state: IState = {
    suggestions: {
      activities: [],
      locations: [],
      offers: [],
    },
    showSuggestions: false,
    suggestionIndex: -1,
    focus: false,
    suggestionsLength: 0,
    inputValue: '',
  }

  public componentDidUpdate = ({ contextSearchResult }: IProps) =>
  contextSearchResult !== this.props.contextSearchResult &&
    this.setState(prev => ({
      ...prev,
      suggestions: {
        ...prev.suggestions,
        offers: contextSearchResult,
      },
    }))

  public onInputFocus = () => {
    this.setState({ focus: true })
  }

  public onInputBlur = () => {
    this.setState({ showSuggestions: false, focus: false })
  }

  public handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    try {
      // const { contextSearch } = this.props
      const { categories, countries } = configData
      const suggestions = {
        activities: categories.filter((category: IConfigItem) => category.name.toLowerCase().includes(value!.toLowerCase())),
        locations: [
          ...countries.filter((country: IConfigItem) => country.name.toLowerCase().includes(value!.toLowerCase())),
          ...countries.reduce(
            (prev: IConfigItem[], current: IConfigItem) => [
              ...prev,
              ...current.cities.filter((city: IConfigItem) => city.name.toLowerCase().includes(value!.toLowerCase())),
            ],
            []
          ),
        ],
        offers: [],
      }
      const suggestionsLength = suggestions.activities.length + suggestions.locations.length
      // contextSearch && contextSearch(value)
      this.setState({ suggestions, showSuggestions: suggestionsLength > 0, suggestionIndex: -1, inputValue: value, suggestionsLength })
    } catch (e) {
      console.error(e)
    }
  }

  public getCurrentSuggestion = () => {
    const {
      suggestions: { activities, locations, offers },
      suggestionIndex,
    } = this.state
    return (
      activities[suggestionIndex] ||
      locations[suggestionIndex - activities.length] ||
      offers[suggestionIndex - activities.length - locations.length]
    )
  }

  public onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    try {
      const { suggestionIndex, suggestionsLength } = this.state
      switch (event.which) {
        case 40: {
          // Arrow down
          event.preventDefault()
          if (suggestionIndex < suggestionsLength - 1) {
            const newSuggestionIndex = suggestionIndex + 1
            this.setState({ suggestionIndex: newSuggestionIndex })
          }
          break
        }
        case 38: {
          // Arrow up
          event.preventDefault()
          if (suggestionIndex > 0) {
            const newSuggestionIndex = suggestionIndex - 1
            this.setState({ suggestionIndex: newSuggestionIndex })
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
      const { suggestionsLength } = this.state
      if (suggestionsLength >= index - 1) {
        this.setState({
          suggestionIndex: index,
          showSuggestions: false,
        })
      }
    } catch (e) {
      console.error(e)
    }
  }

  public renderSuggestionsList = () => {
    try {
      let idx = -1
      const { suggestions } = this.state
      const renderCategory = (name: string, items: any[]) => (
        <>
          <li className={styles.suggestionName}>{name}</li>
          {items.map((item: any) => {
            idx += 1
            return (
              <li
                className={styles.suggestion}
                key={idx}
                data-index={idx}
                data-current={idx === this.state.suggestionIndex}
                onMouseDown={this.onSuggestionClick}
              >
                {item.name}
              </li>
            )
          })}
        </>
      )
      return (
        <ul className={styles.suggestions}>
          {suggestions.activities.length > 0 && renderCategory('Activities', suggestions.activities)}
          {suggestions.locations.length > 0 && renderCategory('Locations', suggestions.locations)}
          {suggestions.offers.length > 0 && renderCategory('Offers', suggestions.offers)}
        </ul>
      )
    } catch (e) {
      console.error(e)
      return ''
    }
  }

  public render = () => {
    const { showSuggestions, focus, inputValue, suggestionIndex } = this.state
    console.log(this.props.contextSearchResult)
    return (
      <div className={styles.basicSearchTravel}>
        <div className={styles.field} data-focus={focus || showSuggestions}>
          <input
            value={suggestionIndex >= 0 ? this.getCurrentSuggestion().name : inputValue}
            onChange={this.handleChange}
            onKeyPress={this.onKeyPress}
            onKeyDown={this.onKeyPress}
            onFocus={this.onInputFocus}
            onBlur={this.onInputBlur}
            autoComplete="off"
            placeholder="Search for a destination, activity or tour"
          />
          <Button className={styles.searchBtn} theme="orange" form="rounded" size="lg">
            SEARCH
          </Button>
        </div>
        {showSuggestions && this.renderSuggestionsList()}
      </div>
    )
  }
}
