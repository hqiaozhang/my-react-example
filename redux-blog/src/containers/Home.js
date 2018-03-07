/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-03-06 16:46:04 
 * @Description: 主页
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-03-06 16:52:41
 */

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
 

