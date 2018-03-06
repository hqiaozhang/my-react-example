import { combineReducers } from 'redux'

// 引入 reducer 及 actionCreator
import list, { loadArticles } from '../components/Home/PreviewListRedux'

export default combineReducers({
  list
})

import * as listActions from '../components/Home/PreviewListRedux'

export { listActions }
