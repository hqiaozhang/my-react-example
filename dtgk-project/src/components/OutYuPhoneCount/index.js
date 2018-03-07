/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-03-02 16:35:31 
 * @Description: 出渝手机量统计
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-03-02 17:07:39
 */

import React, { Component } from 'react'
import './index.css'

import CountPhoneTitle from '../Common/CountPhoneTitle'

export default class OutYuPhoneCount extends Component {
  constructor(props) {
    super(props)
    this.title = ['渝手机出渝数量', '渝手机出国数量']
  }
  render() {
    const { data } = this.props
    
    return (
      <div className='out-phone-count'>
         <CountPhoneTitle title='出渝手机数量统计' />
         <ul className='phone-count-list'>
          {
            data.map((list, i) => 
            <li key={i}>
               <p>{this.title[i]}</p> 
               <p className='value'>{list}</p>
            </li>)
          }
         </ul>
      </div>  
    )
  }
}

