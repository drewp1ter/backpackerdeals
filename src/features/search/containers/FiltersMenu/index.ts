import { FiltersMenu } from './FiltersMenu'

import { actions as searchActions } from 'features/search'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import Types from 'Types'

const mapStateToProps = ({ search }: Types.RootState) => ({
  filtersAreOpened: search.filtersAreOpened,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ openFilters: searchActions.openFilters, closeFilters: searchActions.closeFilters }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersMenu)
