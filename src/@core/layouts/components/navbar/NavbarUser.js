// ** Dropdowns Imports
import { Fragment } from 'react'

import UserDropdown from './UserDropdown'

// ** Third Party Components
import { Bell, Sun, Moon, Menu } from 'react-feather'
import { NavItem, NavLink, Badge } from 'reactstrap'
import themeConfig from '@configs/themeConfig'
import NotificationDropdown from './NotificationDropdown'


const NavbarUser = props => {
  // ** Props
  const { skin, setSkin, setMenuVisibility } = props

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === 'dark') {
      return <Sun className='ficon' onClick={() => setSkin('light')} />
    } else {
      return <Moon className='ficon' onClick={() => setSkin('dark')} />
    }
  }

  return (
    <Fragment>
      <ul className='navbar-nav d-xl-none d-flex align-items-center'>
        <NavItem className='mobile-menu mr-auto'>
          <NavLink className='nav-menu-main menu-toggle hidden-xs is-active' onClick={() => setMenuVisibility(true)}>
            <Menu className='ficon' />
          </NavLink>
        </NavItem>
      </ul>
      {/* <div className='bookmark-wrapper d-flex align-items-center'>
        <NavItem className='d-none d-lg-block'>
          <NavLink className='nav-link-style'>
            <ThemeToggler />
          </NavLink>
        </NavItem>
      </div> */}
      <img src={themeConfig.app.appLogoImage} alt='logo' className='ml-1 ml-lg-0' />
      {/* <div className='navbar-header'>
        <ul className='nav navbar-nav flex-row'>
          <li className='nav-item mr-auto'>
            <NavLink to='/' className='navbar-brand'>
              <span className='brand-logo'>
              </span>
              <h2 className='brand-text mb-0'>{themeConfig.app.appName}</h2>
            </NavLink>
          </li>
        </ul>
      </div> */}
      <ul className='nav navbar-nav align-items-center ml-auto'>
        <NotificationDropdown />
        <UserDropdown />
      </ul>
    </Fragment>
  )
}
export default NavbarUser
