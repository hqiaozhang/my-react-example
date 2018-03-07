/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-03-05 17:11:41 
 * @Description: 地区列表
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-03-06 16:12:22
 */

 import React, { Component } from 'react'
 import './index.css'
  
 export default class AreaList extends Component {
  constructor(props) {
    super(props)
    this.handleOnClickAarea = this.handleOnClickAarea.bind(this)
  }

  handleOnClickAarea(e) {
    e.preventDefault()
    let areaId = e.target.getAttribute('data-oldid')
    console.log('传给后端的areaId', areaId)
  }

   render() {
     return(
      <div className='all-area'>
        <div className='area-name'>
          <input type='text' value='重庆市' />
        </div>
        <ul className='area-list'>
          <li areaid="500000" key='500000' 
           className="main-list">重庆市</li>
          {
            this.props.data.map((d, i) => (
              <li key={d.id} 
              data-areaid={d.id} 
              data-oldid={d.oldId}
              onClick={this.handleOnClickAarea}>{d.name}</li>   
            ))
          }
        </ul>  
      </div> 
     ) 
   }
 }