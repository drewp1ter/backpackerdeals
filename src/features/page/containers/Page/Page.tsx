import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { IAppState } from 'store/root-reducer'
import * as uiActions from 'store/ui/actions'
import { IUiState } from 'store/ui/reducer'
import { Cookies, Footer, Header } from '../../components'

export interface IPropsFromDispatch {
  readonly openMenu: typeof uiActions.openMenu
  readonly closeMenu: typeof uiActions.closeMenu
  readonly openSearch: typeof uiActions.openSearch
  readonly closeSearch: typeof uiActions.closeSearch
  readonly changeSearchType: typeof uiActions.changeSearchType
}

interface IProps {
  readonly children?: React.ReactNode
  readonly headerTheme?: string
  readonly ui: IUiState
}

const Page: React.FC<IProps & IPropsFromDispatch> = ({
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

const mapStateToProps = (state: IAppState) => ({
  ui: state.ui,
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return { ...bindActionCreators(uiActions, dispatch) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
