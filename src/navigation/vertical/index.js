import { Mail, Server, User, Circle, Framer, Layers, AlertOctagon, Video, Bell, Settings, AlertTriangle, UserPlus } from 'react-feather'
import { MdReportProblem } from 'react-icons/md'

export default [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: <Server size={20} />,
    navLink: '/dashboard'
  },
  {
    id: 'internal',
    title: 'Internal',
    icon: <UserPlus size={20} />,
    children: [
      {
        id: 'role',
        title: 'Role',
        icon: <Circle size={12} />,
        navLink: '/roles'
      },
      {
        id: 'staff',
        title: 'Staff',
        icon: <Circle size={12} />,
        navLink: '/internaluser/list'
      }
    ]
  },
  {
    id: 'category',
    title: 'Category',
    icon: <Layers size={20} />,
    navLink: '/category'
  },
  {
    id: 'wowuser',
    title: 'WOW Users',
    icon: <User size={20} />,
    navLink: '/wowuser/list'
  },
  {
    id: 'pageinfo',
    title: 'Info Page',
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
    icon: <AlertTriangle size={20} />,
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
  // {
  //   id: 'logout',
  //   title: 'Logout',
  //   icon: <Settings size={20} />,
  //   navLink: '/setting'
  // }
]
