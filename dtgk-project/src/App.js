import React, { Component } from 'react'

// 组件 
import TerminalWithAreaPeople from './components/TerminalWithAreaPeople'
import InYuPhoneCount from './components/InYuPhoneCount'
import OutYuPhoneCount from './components/OutYuPhoneCount'
import ControlTask from './components/ControlTask'
import Top10 from './components/Top10'
import AreaList from './components/AreaList'

import './App.css';
import './util/zoom'
// 数据
import controlTaskData from './mockData/controlTaskCout'
import inYuTop10Data from './mockData/inYuTop10'
import areaListData from './mockData/areaList'
 
let data = [
  {
    'name': '本地手机',
    'value': 5231
  },{
    'name': '外地手机',
    'value': 1234
  },{
    'name': '国外手机',
    'value': 234
  }
]

let outPhone = [1315998, 2581]
 
class App extends Component {
  render() {
    return (
      <div>
        <header>
          <AreaList data={areaListData.result.areaList} />
        </header>
        <div className='container'>
          <div className='page-left'>
            <TerminalWithAreaPeople /> 
            <InYuPhoneCount data={data} />
            <OutYuPhoneCount data={outPhone} />
          </div>
          <Top10 data={inYuTop10Data.result.inYuTop10} /> 
          <ControlTask data={controlTaskData.result.controlTaskCout} />
        </div>
      </div>  
    )
  }
}

export default App
