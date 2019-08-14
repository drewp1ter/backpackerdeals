import { BookingCalendarMonth } from './BookingCalendarMonth'

import { connect } from 'react-redux'
import Types from 'Types'

const mapStateToProps = ({ deal }: Types.RootState) => ({
  nextAviableDate: deal.nextAviableDate,
})

export default connect(mapStateToProps)(BookingCalendarMonth)
