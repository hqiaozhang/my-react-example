/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-02-24 10:47:01 
 * @Description: 手机统计标题
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-02-24 10:54:14
 */

import React from 'react'
import bgImg from './images/title-bg.png'

const h4Style = {
  lineHeight: '110px',
  fontSize: '46px',
  color: '#fff',
  fontWeight: 'normal',
  width: '1254px',
  height: '110px',
  background: `url(${bgImg}) no-repeat` ,
  float: 'left',
  paddingLeft: '25px'
}

const CountPhoneTitle = (props) => {
  return(
    <h4 style={h4Style}>{props.title}</h4> 
  )
}

export default CountPhoneTitle