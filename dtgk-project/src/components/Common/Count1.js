/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-02-20 22:10:09 
 * @Description: 总数统计
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-02-24 14:26:35
 */

 import React from 'react'
 import TitleH4 from './TitleH4'
 import bgImg from './images/inNetwork-bg.png'
 import InNetworkList from '../InNetworkList'
  
//  样式
const style = {
  background: `url(${bgImg}) no-repeat center / 100% 100%`,
  width: 610,
  height: 231
}
const valueStyle = {
  fontSize: '92px',
  color: '#00ffff',
  textShadow: '3px 3px 22px #00a9ab'
}
export default class Count1 extends React.Component {
  constructor(props) {
    super(props)
    this.setState  = {
      show: false
    }
  }
  render() {
    return(
      <div className={this.props.className} style={style}>
        <TitleH4 title={this.props.title} />
        <div className='value' style={valueStyle} onClick={e => {
          e.preventDefault()
          this.setState.show = !this.setState.show
          console.log(this.setState.show)
          return <InNetworkList />
        }}>{this.props.value}</div>
      </div>
    )
  }
  
}
 

