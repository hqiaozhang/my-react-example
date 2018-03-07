/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-03-05 10:01:57 
 * @Description: Description
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-03-05 18:02:17
 */

 import React, { Component } from 'react'

 export default class List extends Component {
   render() {
     let { data } = this.props
     return (
       <ul className='top-list'>
          <li className='list-title'><a>地区</a><a>数量</a><a>7天平均同比增幅</a></li>
         {
           data.map((d, i) => {
            let icon = null
            switch(d.flag) {
              case -1:
                icon = <i className='down-icon'></i>
                break
              case 0:
                icon = <i className='equal'>-</i> 
                break
              case 1:
                icon = <i className='up-icon'></i> 
                break
              default: 
                break
            }
            return <li key={i}><a>{d.name}</a><a>{d.value}</a>
            <a>{icon}{d.increase}%</a></li>
           })
         }
       </ul>  
     )
   }
 }