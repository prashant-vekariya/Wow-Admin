import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - WOW Admin'

// ** Default Route
const DefaultRoute = '/dashboard'

// ** Merge Routes
const Routes = [
  {
    path: '/dashboard',
    component: lazy(() => import('../../views/Dashboard/Dashboard'))
  },
  {
    path: '/roles',
    exact: true,
    component: lazy(() => import('../../views/Roles/list'))
  },
  {
    path: '/roles/permission/:id',
    component: lazy(() => import('../../views/Roles/edit'))
  },
  {
    path: '/wowuser/list',
    component: lazy(() => import('../../views/Users/WowUser/list'))
  },
  {
    path: '/internaluser/list',
    component: lazy(() => import('../../views/Users/WowUser/list'))
  },
  // {
  //   path: '/wowuser/edit',
  //   exact: true,
  //   component: () => <Redirect to='/apps/user/edit/1' />
  // },
  {
    path: '/wowuser/edit/:id',
    component: lazy(() => import('../../views/Users/WowUser/edit')),
    meta: {
      navLink: '/apps/user/edit'
    }
  },
  // {
  //   path: '/wowuser/view',
  //   exact: true,
  //   component: () => <Redirect to='/apps/user/view/1' />
  // },
  {
    path: '/wowuser/view/:id',
    component: lazy(() => import('../../views/Users/WowUser/view')),
    meta: {
      navLink: '/apps/user/view'
    }
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
