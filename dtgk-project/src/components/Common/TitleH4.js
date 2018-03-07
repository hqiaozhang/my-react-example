/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-02-20 21:57:08 
 * @Description: 标题 
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-02-24 10:31:32
 */

 import React from 'react'
 const h4Style = {
   lineHeight: '86px',
   fontSize: '46px',
   color: '#fff',
   fontWeight: 'normal'
 }

 const TitleH4 = (props) => {
    return(
      <h4 style={h4Style}>{props.title}</h4> 
    )
 }

 export default TitleH4
