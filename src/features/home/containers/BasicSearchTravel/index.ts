import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import Types from 'Types'
import { BasicSearchTravel } from './BasicSearchTravel'

import { actions } from 'features/search'

const mapStateToProps = (state: Types.RootState) => {
  const { fetching, error, contextSearch } = state.search
  return { fetching, error, contextSearch }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      contextSearch: actions.contextSearch.request,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicSearchTravel)
