 
import { combineReducers } from 'redux';

// 引入 reducer 及 actionCreator
import inNetwork, { loadData }  from '../reducers/inNetwork'

export default combineReducers({
  inNetwork,
});

export { loadData }
