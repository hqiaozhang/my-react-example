/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-03-05 09:18:08 
 * @Description: 在渝手机排行
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-03-05 16:54:21
 */

import React, { Component } from 'react'
import TopNav from './TopNav'
import List from './List'

export default class InYuTop10 extends Component { 
  render() {
    return (
      <div className='in-yu-phone-top10 phone-top10'>
       <TopNav subTitle='在渝手机排行TOP10' {...this.props} state='in' />
       <List data={this.props.data} />
      </div>  
    )
  }
}
