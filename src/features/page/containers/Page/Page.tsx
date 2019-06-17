import { SearchActions } from 'features/search'
import { ISearchState } from 'features/search'
import * as React from 'react'
import { PageActions } from '../..'
import { Cookies, Footer, Header } from '../../components'
import { IPageState } from '../../reducer'

interface IProps {
  readonly children?: React.ReactNode
  readonly headerTheme?: string
  readonly ui: IPageState & ISearchState
}

const Page: React.FC<IProps & SearchActions & PageActions> = ({
  children,
  headerTheme,
  ui,
  openMenu,
  closeMenu,
  openSearch,
  closeSearch,
  changeSearchType,
}) => {
  const [cookies, setCookies] = React.useState<boolean>(true)

  React.useEffect(() => {
    if (window) {
      if (window.localStorage.getItem('cookies')) {
        setCookies(true)
      }
    }
  })

  const handleCookies = () => {
    window.localStorage.setItem('cookies', 'true')
    setCookies(true)
  }

  return (
    <>
      {!cookies && <Cookies setCookies={handleCookies} />}
      <Header
        openMenu={openMenu}
        closeMenu={closeMenu}
        openSearch={openSearch}
        closeSearch={closeSearch}
        changeSearchType={changeSearchType}
        ui={ui}
        theme={headerTheme}
      />
      {children}
      <Footer />
    </>
  )
}

export default Page
