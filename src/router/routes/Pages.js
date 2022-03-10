import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const PagesRoutes = [
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
        path: '/category',
        exact: true,
        component: lazy(() => import('../../views/Category'))
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
        path: '/pageinfo',
        exact: true,
        component: lazy(() => import('../../views/Page-Info'))
    },
    {
        path: '/pageinfoedit/:name',
        exact: true,
        component: lazy(() => import('../../views/Page-Info/InfoEdit'))
    },
    {
        path: '/faq',
        exact: true,
        component: lazy(() => import('../../views/faq'))
    },
    {
        path: '/faq/:id',
        exact: true,
        component: lazy(() => import('../../views/faq/FaqEdit'))
    },
    {
        path: '/error',
        component: lazy(() => import('../../views/Error')),
        layout: 'BlankLayout'
    }
]

export default PagesRoutes
