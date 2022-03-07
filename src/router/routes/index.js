import { lazy } from 'react'
import Authentication from './Authentication'
import PagesRoutes from './Pages'

// ** Document title
const TemplateTitle = '%s - WOW Admin'

// ** Default Route
const DefaultRoute = '/dashboard'

// ** Merge Routes

const Routes = [
  ...Authentication,
  ...PagesRoutes
]

export { DefaultRoute, TemplateTitle, Routes }
