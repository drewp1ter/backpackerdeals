import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import Types from 'Types'
import * as actions from '../../actions'
import Page from './Page'

const mapStateToProps = (state: Types.RootState) => ({
  ui: state.ui,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ ...actions }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
