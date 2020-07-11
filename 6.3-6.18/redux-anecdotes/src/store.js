import { createStore, combineReducers,applyMiddleware } from 'redux'
import {anecdotesReducer,notificationReducer,filterReducer,restartReducer} from './reducers/anecdoteReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const reducer = combineReducers({
  anecdotes: anecdotesReducer,
  notification: notificationReducer,
  filter:filterReducer,
  restart:restartReducer
})

const store = createStore(reducer,
  composeWithDevTools(applyMiddleware(thunk)))/**/
export default store