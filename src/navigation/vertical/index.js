import { Mail, Server, User, Circle, Framer } from 'react-feather'

export default [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: <Server size={20} />,
    navLink: '/dashboard'
  },
  {
    id: 'role',
    title: 'Role',
    icon: <Mail size={20} />,
    navLink: '/roles'
  },
  {
    id: 'users',
    title: 'User',
    icon: <User size={20} />,
    children: [
      {
        id: 'wowuser',
        title: 'WOW Users',
        icon: <Circle size={12} />,
        navLink: '/wowuser/list'
      },
      {
        id: 'internaluser',
        title: 'Internal User',
        icon: <Circle size={12} />,
        navLink: '/internaluser/list'
      }
    ]
  },
  {
    id: 'faq',
    title: 'FAQ',
    icon: <Framer size={20} />,
    navLink: '/faq'
  }
]
