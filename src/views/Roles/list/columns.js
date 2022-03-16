// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { getRoleDetails } from '../store/action'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive } from 'react-feather'

// ** Renders Role Columns
const renderRole = row => {
  return (
    <span className='text-truncate text-capitalize align-middle font-weight-bolder'>
      {/* <Icon size={18} className={`${roleObj[row.name] ? roleObj[row.name].class : ''} mr-50`} /> */}
      {row.name}
    </span>
  )
}

export const columns = [
  {
    name: 'Role',
    minWidth: '172px',
    selector: 'role',
    sortable: true,
    cell: row => renderRole(row)
  },
  {
    name: 'Status',
    minWidth: '138px',
    selector: 'status',
    sortable: true,
    cell: row => (
      <Badge className='text-capitalize' color={row.is_active ? 'light-success' : 'light-secondary'} pill>
        {row.is_active ? 'Active' : 'inctive'}
      </Badge>
    )
  },
  {
    name: 'Actions',
    minWidth: '100px',
    cell: row => (
      <UncontrolledDropdown>
        <DropdownToggle tag='div' className='btn btn-sm'>
          <MoreVertical size={14} className='cursor-pointer' />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem
            tag={Link}
            to={`/roles/permission/${row._id}`}
            className='w-100'
            onClick={() => store.dispatch(getRoleDetails(row._id))}
          >
            <Archive size={14} className='mr-50' />
            <span className='align-middle'>Permissions</span>
          </DropdownItem>
          <DropdownItem className='w-100'
          // onClick={() => store.dispatch(deleteUser(row.id))}
          >
            <Trash2 size={14} className='mr-50' />
            <span className='align-middle'>Delete</span>
          </DropdownItem>
          <DropdownItem
            tag={Link}
            to={`/apps/user/view/${row.id}`}
            className='w-100'
          // onClick={() => store.dispatch(getUser(row.id))}
          >
            <FileText size={14} className='mr-50' />
            <span className='align-middle'>Deactive Now</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
]
