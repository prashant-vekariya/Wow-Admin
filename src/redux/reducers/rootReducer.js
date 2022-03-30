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
import pageInfo from '@src/views/Page-Info/store/reducer'
import faq from './../../views/Faq/store/reducer'
import clips from '@src/views/Clips/store/reducer'
import reported from '@src/views/ReportedContent/store/reducer'
import notification from '@src/views/PushNotification/store/reducer'
import setting from '@src/views/Setting/store/reducer'


const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  dashboard,
  roles,
  category,
  wowusers,
  internalusers,
  pageInfo,
  faq,
  clips,
  reported,
  notification,
  setting
})

export default rootReducer
