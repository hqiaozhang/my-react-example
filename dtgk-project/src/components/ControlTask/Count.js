/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-03-02 17:29:10 
 * @Description: 单个统计数量
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-03-02 18:00:23
 */

 import React, { Component } from 'react'

 export default class Count extends Component {
   render() {
     const { data } = this.props
     return (
      <ul className='count-list'>
        <li className='total-person'>
        <p>管控总人数</p>
        <p className='value'>{data.totalPerson}</p>
            <div className='value'>
              <div id='num-roll' className='num-roll'></div>
            </div>
          </li>
        <li>
          <p>管控群体</p>
          <p className='value'>{data.group}</p>
        </li>
        <li>
          <p>管控区域</p>
          <p className='value'>{data.area}</p>
        </li>
        <li>
          <p>任务数量</p>
          <p className='value'>{data.taskNumber}</p>
        </li>
        <li>
          <p>预警规则</p>
          <p className='value'>{data.warningRules}</p>
        </li>
        <li className='warning-number'>
          <p>预警次数</p>
          <p className='value'>{data.warningNumber}</p>
          <div className='value'>
            <div id='num-roll' className='num-roll'></div>
          </div>
        </li> 
        </ul> 
     )
   }
 }
