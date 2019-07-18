import { SearchTravelSection } from './SearchTravelSection'

import { actions as searchActions } from 'features/find'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import Types from 'Types'

const mapStateToProps = ({ search }: Types.RootState) => ({
  searchType: search.searchType,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      openSearch: searchActions.openSearch,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchTravelSection)
