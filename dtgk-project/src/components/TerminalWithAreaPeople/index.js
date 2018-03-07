/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-02-20 16:57:09 
 * @Description: 全市在网终端
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-02-24 13:07:37
 */

 import React from 'react'
 import './index.css'
 import Count1 from '../Common/Count1'

 export default class TerminalWithAreaPeople extends React.Component {
   render() {
     return (
        <div style={{float: 'left'}}>
          <Count1 className='network-terminal' title='全市在网终端' value='9120' />
          <Count1 className='area-people' title='管控区域人数' value='3120' />
        </div>
     )
   }
 }