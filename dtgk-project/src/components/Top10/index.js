/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-03-05 08:58:34 
 * @Description: top10主文件
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-03-05 17:10:03
 */

 import React, { Component } from 'react'
 import InYuTop10 from './InYuTop10'
 import OutYuTop10 from './OutYuTop10'
 import './index.css'

 export default class Top10 extends Component {

  constructor(props) {
    super(props)
    this.handleOnClickNav = this.handleOnClickNav.bind(this)
    this.handleOnClickNav2 = this.handleOnClickNav2.bind(this)
    this.handleOnClickAll = this.handleOnClickAll.bind(this)
    // 初始化默认值
    this.state = {
      inYu: {
        activeIndex: 0,
        type: 'province', // 默认为省
        znType: '省级'
      },
      outYu: {
        activeIndex: 0,
        type: 'province',  // 默认为省
        znType: '市级'
      }
    }
  }

  /**
   * 点击查看全部
   * @param {any} e 
   */
  handleOnClickAll(state) {
    let type = null
    if(state === 'in') {
      type = this.state.inYu.type
    }else{
      type = this.state.outYu.type
    }
    console.log('请求参数', type, state)
  }
  
  /**
   * 在渝手机排行切换导航
   */
  handleOnClickNav(order, type, znType) {
    this.setState(
      {
        inYu: {
          type: type,
          activeIndex: parseInt(order, 10)
        }
      }
    )
  }

  /**
   * 出渝手机排行切换导航
   * @param {any} order 
   * @param {any} type 
   * @param {any} znType 
   */
  handleOnClickNav2(order, type, znType) {
    this.setState(
      {
        outYu: {
          type: type,
          activeIndex: parseInt(order, 10)
        }
      }
    )
  }
  
  /**
   * 渲染
   * @returns  
   */
  render() {
     let { type } = this.state.inYu
     let outType = this.state.outYu.type
     return (
       <div className='top-right'>
       {/* 在渝手机排行 */}
        <InYuTop10 data={this.props.data[type]} 
          {...this.state.inYu} 
          handleOnClickNav={this.handleOnClickNav} 
          handleOnClickAll={this.handleOnClickAll} />

        {/* 出渝手机排行 */}
        <OutYuTop10 data={this.props.data[outType]} 
          {...this.state.outYu} 
          handleOnClickNav={this.handleOnClickNav2}
          handleOnClickAll={this.handleOnClickAll} />
       </div>
     )
   }
 }
