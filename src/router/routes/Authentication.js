import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const Authentication = [
    {
        path: '/login',
        component: lazy(() => import('../../views/authentication/Login')),
        layout: 'BlankLayout',
        meta: {
            authRoute: true
        }
    },
    {
        path: '/register',
        component: lazy(() => import('../../views/authentication/Register')),
        layout: 'BlankLayout',
        meta: {
            authRoute: true
        }
    },
    {
        path: '/forgot-password',
        component: lazy(() => import('../../views/authentication/ForgotPassword')),
        layout: 'BlankLayout',
        meta: {
            authRoute: true
        }
    },
    {
        path: '/reset-password',
        component: lazy(() => import('../../views/authentication/ResetPassword')),
        layout: 'BlankLayout'
    }
]

export default Authentication
