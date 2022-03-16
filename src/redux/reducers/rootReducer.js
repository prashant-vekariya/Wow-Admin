// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import dashboard from '@src/views/Dashboard/store/reducer'
import roles from '@src/views/Roles/store/reducer'
import category from '@src/views/Category/store/reducer'
import wowusers from '@src/views/Users/WowUser/store/reducer'
import internalusers from '@src/views/Users/InternalUser/store/reducer'


const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  dashboard,
  roles,
  category,
  wowusers,
  internalusers
})

export default rootReducer
