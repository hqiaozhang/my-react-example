import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
// 引入请求middleware的工厂方法
import createFetchMiddleware from 'redux-composable-fetch'
import { hasHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from './reducers'

// 创建一个请求middleware的示例
const FetchMiddleware = createFetchMiddleware()

// compose(...functions) 从右到左来组合多个函数
const finalCreateStore = compose(
  applyMiddleware(
    thunk, 
    // FetchMiddleware,
    routerMiddleware(hasHistory)
  )
)(createStore)

const reducer = combineReducers(Object.assign({}, rootReducer, {
  routing: routerReducer,
}))

export default function configureStore(initalState) {
  const store = finalCreateStore(reducer, initalState)
  return store
}