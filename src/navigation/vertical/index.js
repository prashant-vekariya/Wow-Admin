import { Mail, Server, User, Circle, Framer, Layers, AlertOctagon, Video, Bell, Settings } from 'react-feather'
import { MdReportProblem } from 'react-icons/md'

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
    id: 'category',
    title: 'Category',
    icon: <Layers size={20} />,
    navLink: '/category'
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
    id: 'pageinfo',
    title: 'Page Info',
    icon: <AlertOctagon size={20} />,
    navLink: '/pageinfo'
  },
  {
    id: 'faq',
    title: 'FAQ',
    icon: <Framer size={20} />,
    navLink: '/faq'
  },
  {
    id: 'clips',
    title: 'Clips',
    icon: <Video size={20} />,
    navLink: '/clips'
  },
  {
    id: 'reportedcontent',
    title: 'Reported Content',
    icon: <MdReportProblem size={20} />,
    navLink: '/reportedcontent'
  },
  {
    id: 'pushnotification',
    title: 'Push Notification',
    icon: <Bell size={20} />,
    navLink: '/pushnotification'
  },
  {
    id: 'setting',
    title: 'Setting',
    icon: <Settings size={20} />,
    navLink: '/setting'
  }
]
