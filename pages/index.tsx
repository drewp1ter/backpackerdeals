import React from 'react'
import { Helmet } from 'react-helmet'

import { Dispatch, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { IAppState } from 'store/root-reducer'
import { openSearch } from 'store/ui/actions'

import { HomeLayout } from 'features/home/components'
import { IProps } from 'features/home/components/HomeLayout/HomeLayout'
import { Page } from 'features/page/containers'

class Index extends React.Component<IProps> {
  render = () => (
    <Page>
      <Helmet>
        <title>Backpackerdeals</title>
      </Helmet>
      <HomeLayout searchType={this.props.searchType} openSearch={this.props.openSearch} />
    </Page>
  )
}

const mapStateToProps = ({ ui }: IAppState) => ({
  searchType: ui.searchType,
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => bindActionCreators({ openSearch }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
