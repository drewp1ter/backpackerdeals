import * as React from 'react'
import { Actions } from '../..'
import { Cookies, Footer, Header } from '../../components'
import { IPageState } from '../../reducer'

interface IProps {
  readonly children?: React.ReactNode
  readonly headerTheme?: string
  readonly ui: IPageState
}

const Page: React.FC<IProps & Actions> = ({
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
