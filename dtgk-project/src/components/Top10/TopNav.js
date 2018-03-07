/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-03-05 09:02:25 
 * @Description: 排行分类标题
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-03-05 17:09:32
 */

 import React, { Component } from 'react'
 import classnames from 'classnames'
 
 export default class TopTitle extends Component {
   constructor(props) {
     super(props)
     this.navs = [
       {province: ['省级排行', '省级']}, 
       {city: ['地级市排行', '地级市']}, 
       {abroad: ['国际漫游排行', '国际漫游']}
      ]
   }
  
  /**
   * 获取list
   * @param {any} orders 
   * @returns  
   */
  getTabs(orders) {
    let { activeIndex, handleOnClickNav, znType } = this.props
    let navs = this.navs
    return (
      navs.map((key, index) => {
        let order = orders[index]
        let type = Object.keys(key)[0]
        let value = Object.values(key)[0]
        // 添加active 样式
        let classes = classnames({
          ['active']: order === activeIndex
        })  
        return (
          <li className={classes} 
            type={type} 
            key={index} data-order={order} 
            onClick={() => handleOnClickNav(order, type, znType)}
            data-zn={value[1]}>
              {value[0]}
          </li>
        )
      })
    )
   }

   /**
    * 渲染
    * @returns  
    */
   render() {
    let { handleOnClickAll, subTitle, type, state, activeIndex } = this.props
    // 获取中文的当前类型值
    let znType = Object.values(this.navs[activeIndex])[0][1]
     return (
       <div>
         <ul className='nav'>
           {this.getTabs([0, 1, 2])}
         </ul>
         <div className='sub-title'>{subTitle} 
          <span>({znType})</span>
          <span data-state={state} className='see-all' 
            onClick={() => handleOnClickAll(state)}>
            查看全部+
          </span>
        </div>
       </div>  
     )
   }
 }
