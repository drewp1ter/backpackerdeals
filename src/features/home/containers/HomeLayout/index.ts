import { openSearch } from 'features/page/actions'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import Types from 'Types'
import { HomeLayout } from './HomeLayout'

const mapStateToProps = ({ ui }: Types.RootState) => ({
  searchType: ui.searchType,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ openSearch }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeLayout)