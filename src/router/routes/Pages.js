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
        path: '/category/:id',
        exact: true,
        component: lazy(() => import('../../views/Category/CategoryEdit'))
    },
    {
        path: '/wowuser/list',
        component: lazy(() => import('../../views/Users/WowUser/list'))
    },
    {
        path: '/internaluser/list',
        component: lazy(() => import('../../views/Users/InternalUser/list'))
    },
    {
        path: '/internaluser/edit/:id',
        component: lazy(() => import('../../views/Users/InternalUser/edit')),
        meta: {
            navLink: '/apps/user/edit'
        }
    },
    {
        path: '/wowuser/view/:id',
        exact: true,
        component: lazy(() => import('../../views/Users/WowUser/view')),
        meta: {
            navLink: '/apps/user/view'
        }
    },
    {
        path: '/wowuser/view/:id/following',
        exact: true,
        component: lazy(() => import('../../views/Users/WowUser/view/FollowingList/index'))
    },
    {
        path: '/wowuser/view/:id/followers',
        exact: true,
        component: lazy(() => import('../../views/Users/WowUser/view/FollowersList'))
    },
    {
        path: '/pageinfo',
        exact: true,
        component: lazy(() => import('../../views/Page-Info'))
    },
    {
        path: '/pageinfoedit/:id',
        exact: true,
        component: lazy(() => import('../../views/Page-Info/InfoEdit'))
    },
    {
        path: '/faq',
        exact: true,
        component: lazy(() => import('../../views/Faqs'))
    },
    {
        path: '/faq/:id',
        exact: true,
        component: lazy(() => import('../../views/Faqs/FaqEdit'))
    },
    {
        path: '/clips',
        exact: true,
        component: lazy(() => import('../../views/Clips'))
    },
    {
        path: '/reportedcontent',
        exact: true,
        component: lazy(() => import('../../views/ReportedContent'))
    },
    {
        path: '/pushnotification',
        exact: true,
        component: lazy(() => import('../../views/PushNotification'))
    },
    {
        path: '/setting',
        exact: true,
        component: lazy(() => import('../../views/Setting'))
    },
    {
        path: '/error',
        component: lazy(() => import('../../views/Error')),
        layout: 'BlankLayout'
    }
]

export default PagesRoutes
