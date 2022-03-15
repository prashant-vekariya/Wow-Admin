// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import roles from '@src/views/Roles/store/reducer'
import users from '@src/views/Users/WowUser/store/reducer'
import category from '@src/views/Category/store/reducer'


const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  roles,
  category,
  users
})

export default rootReducer
