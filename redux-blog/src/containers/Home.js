import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PreviewList from '../components/Home/PreviewList'
import { listActions } from './HomeRedux'
import { push } from 'react-router-redux'


class Home extends Component {
  render() {
    const { list, listActions, push } = this.props
    return (
      <div>
        <h1>Home</h1>
        <PreviewList  
          {...list}
          {...listActions} push = {push} />
          
      </div>  
    )
  }
}
// 
const mapStateToProps = (state) => ({
  list: state.home.list
})

const mapDispathToProps = (dispatch) => ({
  listActions: bindActionCreators(listActions, dispatch),
  push: bindActionCreators(push, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Home)
 // 

