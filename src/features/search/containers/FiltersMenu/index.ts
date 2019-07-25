import { FiltersMenu } from './FiltersMenu'

import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import Types from 'Types'
import { actions as searchActions } from '../..'

const mapStateToProps = ({ search }: Types.RootState) => ({
  filtersAreOpened: search.filtersAreOpened,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    { openFilters: searchActions.openFilters, closeFilters: searchActions.closeFilters, openSearch: searchActions.openSearch },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersMenu)
