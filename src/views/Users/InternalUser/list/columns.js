// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'
import AvatarBlank from '@src/assets/images/avatars/avatar-blank.png'

// ** Store & Actions
import { getUser, deleteStaff, deactivateStaff } from '../store/action'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledTooltip } from 'reactstrap'
import { Edit, Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive, Eye } from 'react-feather'

// ** Renders Client Columns
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar) {
    return <Avatar className='mr-1' img={row.avatar} width='32' height='32' />
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={row.fullName || 'John Doe'} initials />
  }
}

const statusObj = {
  pending: 'light-warning',
  active: 'light-success',
  inactive: 'light-secondary'
}

export const columns = [
  {
    name: 'Name',
    minWidth: '297px',
    selector: 'fullName',
    sortable: true,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        {/* <Avatar className='mr-1' img={row.avatar ? row.avatar : AvatarBlank} width='32' height='32' /> */}
        <div className='d-flex flex-column'>
          <div className='user-name text-truncate mb-0'  >
            <span className='font-weight-bold text-capitalize'>{row.fullname}</span>
          </div>
          {/* <small className='text-truncate text-muted mb-0'>@{row.username}</small> */}
        </div>
      </div>
    )
  },
  {
    name: 'Email',
    minWidth: '320px',
    selector: 'email',
    sortable: true,
    cell: row => row.email
  },
  {
    name: 'Role',
    minWidth: '172px',
    selector: 'role',
    sortable: true,
    cell: row => (
      <strong className='text-truncate text-capitalize align-middle'>
        {row.roletype}
      </strong>
    )
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
    cell: row => (
      <>
        <Badge className='text-capitalize mr-1' color='light-info' id={`pw-tooltip-edit-${row._id}`} pill tag={Link}
          to={`/internaluser/edit/${row._id}`}
          onClick={() => store.dispatch(getUser(row._id))}
        >
          <Edit size={18} />
          <UncontrolledTooltip placement='top' target={`pw-tooltip-edit-${row._id}`}>
            Edit
          </UncontrolledTooltip>
        </Badge>
        <Badge className='text-capitalize mr-1 cursor-pointer' color='light-danger' id={`pw-tooltip-delete-${row._id}`} pill
          onClick={() => store.dispatch(deleteStaff({ soft_delete: true, staff_id: row._id }))}
        >
          <Trash2 size={18} />
          <UncontrolledTooltip placement='top' target={`pw-tooltip-delete-${row._id}`}>
            Delete
          </UncontrolledTooltip>
        </Badge>
        {row.is_active ? (
          <Badge className='text-capitalize cursor-pointer' color='light-secondary' id={`pw-tooltip-deactive-${row._id}`} pill
            onClick={() => store.dispatch(deactivateStaff({ is_active: false, staff_id: row._id }))}
          >
            <Archive size={24} />
            <UncontrolledTooltip placement='top' target={`pw-tooltip-deactive-${row._id}`}>
              Deactivate Now
            </UncontrolledTooltip>
          </Badge>
        ) : (
          <Badge className='text-capitalize cursor-pointer' color='light-secondary' id={`pw-tooltip-deactive-${row._id}`} pill
            onClick={() => store.dispatch(deactivateStaff({ is_active: true, staff_id: row._id }))}
          >
            <Archive size={24} />
            <UncontrolledTooltip placement='top' target={`pw-tooltip-deactive-${row._id}`}>
              Activate Now
            </UncontrolledTooltip>
          </Badge>)
        }
      </>
    )
  }
]
