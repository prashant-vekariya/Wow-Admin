// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'
import AvatarBlank from '@src/assets/images/avatars/avatar-blank.png'

// ** Store & Actions
import { getUser, deleteUser } from '../../store/action'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledTooltip } from 'reactstrap'
import { Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive, Eye } from 'react-feather'

const handleOnError = (e) => {
  e.target.src = AvatarBlank
}

export const columns = [
  {
    name: 'User',
    minWidth: '297px',
    selector: 'fullName',
    sortable: true,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        <Avatar className='mr-1' img={row.profile_pic_url ? row.profile_pic_url : AvatarBlank} onError={handleOnError} width='32' height='32' />
        <div className='d-flex flex-column'>
          <div className='user-name text-truncate mb-0' >
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
      <Link to={`/wowuser/view/${row.user_id}`} id={`pw-tooltip-${row.user_id}`} onClick={() => store.dispatch(getUser(row.user_id))}>
        <Eye size={17} className='mx-1' />
      </Link>
      <UncontrolledTooltip placement='top' target={`pw-tooltip-${row.user_id}`}>
        Details
      </UncontrolledTooltip></span>
  }
]
