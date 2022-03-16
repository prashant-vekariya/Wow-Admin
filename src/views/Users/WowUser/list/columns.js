// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { getUser, deleteUser } from '../store/action'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledTooltip } from 'reactstrap'
import { Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive, Eye } from 'react-feather'

// ** Renders Client Columns
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.profile_pic_url) {
    return <Avatar className='mr-1' img={row.profile_pic_url} width='32' height='32' />
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={row.display_name || 'John Doe'} initials />
  }
}

export const columns = [
  {
    name: 'User',
    minWidth: '297px',
    selector: 'fullName',
    sortable: true,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        {renderClient(row)}
        <div className='d-flex flex-column'>
          <div
            // to={`/apps/user/view/${row.id}`}
            className='user-name text-truncate mb-0'
          // onClick={() => store.dispatch(getUser(row.id))}
          >
            <span className='font-weight-bold'>{row.display_name}</span>
          </div>
          <small className='text-truncate text-muted mb-0'>@{row.user_name}</small>
        </div>
      </div>
    )
  },
  {
    name: 'Email',
    minWidth: '320px',
    selector: 'email',
    sortable: true,
    cell: row => row.email_id
  },
  {
    name: 'Is Expert',
    minWidth: '138px',
    selector: 'currentPlan',
    sortable: true,
    cell: row => <span className='text-capitalize'>{row.is_expert ? 'yes' : 'no'}</span>
  },
  {
    name: 'Status',
    minWidth: '138px',
    selector: 'status',
    sortable: true,
    cell: row => (
      <Badge className='text-capitalize' color={row.is_active ? 'light-success' : 'light-secondary'} pill>
        {row.is_active ? 'Active' : 'inActive'}
      </Badge>
    )
  },
  {
    name: 'Actions',
    minWidth: '100px',
    cell: row => <span className='text-capitalize'>
      <Link to={`/wowuser/view/${row.id}`} id={`pw-tooltip-${row.id}`}>
        <Eye size={17} className='mx-1' />
      </Link>
      <UncontrolledTooltip placement='top' target={`pw-tooltip-${row.id}`}>
        Details
      </UncontrolledTooltip></span>
  }
]
