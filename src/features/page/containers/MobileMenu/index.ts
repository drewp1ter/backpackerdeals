import { MobileMenu } from './MobileMenu'

import { actions as searchActions } from 'features/search'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import Types from 'Types'
import * as pageActions from '../../actions'

const mapStateToProps = ({ page, search }: Types.RootState) => ({
  page,
  search,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ ...pageActions, ...searchActions }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileMenu)
