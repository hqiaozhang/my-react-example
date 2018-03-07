/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-02-24 13:10:32 
 * @Description: 在网终端
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-03-05 15:07:01
 */

import React from 'react'
 
const InNetworkList = (props) => {
  console.log('props', props)
  return(
    <ul className='in-network-list' style={{display: props.show ? 'block': 'none'}}>
      <li>电信：
        <p>90</p>
      </li>
    </ul>
  )
} 

export default InNetworkList
