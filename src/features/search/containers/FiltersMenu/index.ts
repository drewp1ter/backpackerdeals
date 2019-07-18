import { FiltersMenu } from './FiltersMenu'

import { actions as searchActions } from 'features/search'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import Types from 'Types'
import * as pageActions from '../../actions'

const mapStateToProps = ({ filters }: Types.RootState) => ({
  filtersAreOpened: filters.filtersAreOpened,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ ...pageActions, ...searchActions }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersMenu)
