import { Mail, Server, User, Circle, Framer } from 'react-feather'
import { BsGraphUp } from 'react-icons/bs'
import { CgPerformance } from 'react-icons/cg'
import { GiMoneyStack } from 'react-icons/gi'
import { FiDownload } from 'react-icons/fi'
import { HiOutlineDatabase } from 'react-icons/hi'
import { BiCategoryAlt } from 'react-icons/bi'
import { MdPostAdd } from 'react-icons/md'
import { SiPostmates } from 'react-icons/si'
import { GrSettingsOption } from 'react-icons/gr'
import { RiSettings5Line } from 'react-icons/ri'
import { IoLogOutOutline } from 'react-icons/io5'

export default [
  {
    id: 'overview',
    title: 'Overview',
    icon: <BsGraphUp size={20} />,
    navLink: '/dashboard'
  },
  {
    id: 'appperformance',
    title: 'App Performance',
    icon: <CgPerformance size={24} />,
    navLink: '/roles'
  },
  {
    id: 'earnings',
    title: 'Earnings',
    icon: <GiMoneyStack size={24} />,
    navLink: '/#'
  },
  {
    id: 'appinstalls',
    title: 'App Installs',
    icon: <FiDownload size={24} />,
    navLink: '/#'
  },
  {
    id: 'database',
    title: 'Database',
    icon: <HiOutlineDatabase size={24} />,
    navLink: '/#'
  },
  {
    id: 'topcategory',
    title: 'Top Category',
    icon: <BiCategoryAlt size={24} />,
    navLink: '/#'
  },
  {
    id: 'topposts',
    title: 'Top Posts',
    icon: <MdPostAdd size={24} />,
    navLink: '/#'
  },
  {
    id: 'topcreators',
    title: 'Top Creators',
    icon: <SiPostmates size={24} />,
    navLink: '/#'
  },
  {
    id: 'engagementmetrics',
    title: 'Engagement Metrics',
    icon: <GrSettingsOption size={24} />,
    navLink: '/#'
  },
  {
    id: 'faq',
    title: 'FAQ',
    icon: <Framer size={20} />,
    navLink: '/faq'
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: <RiSettings5Line size={24} />,
    navLink: '/#'
  },
  {
    id: 'logout',
    title: 'Logout',
    icon: <IoLogOutOutline size={24} />,
    navLink: '/login'
  }

  // {
  //   id: 'users',
  //   title: 'User',
  //   icon: <User size={20} />,
  //   children: [
  //     {
  //       id: 'wowuser',
  //       title: 'WOW Users',
  //       icon: <Circle size={12} />,
  //       navLink: '/wowuser/list'
  //     },
  //     {
  //       id: 'internaluser',
  //       title: 'Internal User',
  //       icon: <Circle size={12} />,
  //       navLink: '/internaluser/list'
  //     }
  //   ]
  // },
]
