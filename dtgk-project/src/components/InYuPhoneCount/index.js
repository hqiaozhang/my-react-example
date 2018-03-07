/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-02-24 10:33:30 
 * @Description: 在渝手机数据统计
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-02-24 13:03:56
 */

 import React from 'react'
 import CountPhoneTitle from '../Common/CountPhoneTitle'
 import './index.css'

const InYuPhoneCount = (props)=> {
  return (
    <div className='inyu-phone-count'>
      <CountPhoneTitle title='在渝手机数量统计' />
      <ul className='phone-count-list'>
        {
          props.data.map((d, i) => {
            return(
              <li key={i}>
                <p>{d.name}</p>
                <div className='value'>{d.value}</div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
 }

 export default InYuPhoneCount