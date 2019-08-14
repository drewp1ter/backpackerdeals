import { OrderDetails } from './OrderDetails'

import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { actions as dealActions } from '../..'

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ onClickNextAviable: dealActions.onClickNextAviable }, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(OrderDetails)
