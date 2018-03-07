/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-03-02 17:14:00 
 * @Description: 管控任务统计
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-03-02 17:42:06
 */

import React, { Component } from 'react'
import './index.css'
import Count from './Count'

export default class ControlTask extends Component {
  render() {
    console.log()
    return (
      <div className='control-task-count'>
        <h4>管控任务统计</h4>
        <Count data={this.props.data} />
      </div>  
    )
  }
}
