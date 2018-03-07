/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-03-05 09:18:08 
 * @Description: 在渝手机排行
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-03-05 16:58:57
 */

 import React, { Component } from 'react'
 import TopNav from './TopNav'
 import List from './List'

 export default class OutYuTop10 extends Component {

   render() {
     return (
       <div className='out-yu-phone-top10 phone-top10'>
        <TopNav subTitle='出渝手机排行TOP10' {...this.props} state='out' />
        <List data={this.props.data} />
       </div>  
     )
   }
 }
