// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'
import AvatarBlank from '@src/assets/images/avatars/avatar-blank.png'

// ** Store & Actions
import { getUser, deleteUser } from './store/action'
import { store } from '@store/storeConfig/store'
import img3 from '@src/assets/images/slider/06.jpg'

// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledTooltip } from 'reactstrap'
import { Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive, Eye } from 'react-feather'
import moment from 'moment'

export const columns = [
  // {
  //   name: 'Sr No.',
  //   // minWidth: '297px',
  //   selector: 'sno',
  //   sortable: true,
  //   cell: row => (
  //     <span className='align-middle font-weight-bold'>{row.}</span>
  //   )
  // },
  {
    name: 'Message',
    selector: 'Message',
    cell: row => row.message
  },
  {
    name: 'Reported By',
    selector: 'Reported By',
    cell: row => <div className='d-flex justify-content-left align-items-center'>
      <Avatar className='mr-1' img={row.profile_pic_url ? row.profile_pic_url : AvatarBlank} width='32' height='32' />
      <div className='d-flex flex-column'>
        <div className='user-name text-truncate mb-0' >
          <span className='font-weight-bold'>{row.display_name}</span>
        </div>
        <small className='text-truncate text-muted mb-0'>@{row.user_name}</small>
      </div>
    </div>
  },
  {
    name: 'Clip',
    minWidth: '80px',
    selector: 'Clip',
    cell: row => (
      <img className='img-fluid' src={row.video.thumbUrl ? row.video.thumbUrl : img3} alt=' ' />
    )
  },
  {
    name: 'Posted By',
    cell: row => <div className='d-flex justify-content-left align-items-center'>
      <Avatar className='mr-1' img={row.video.profile_pic_url ? row.video.profile_pic_url : AvatarBlank} width='32' height='32' />
      <div className='d-flex flex-column'>
        <div className='user-name text-truncate mb-0' >
          <span className='font-weight-bold'>{row.video.display_name}</span>
        </div>
        <small className='text-truncate text-muted mb-0'>@{row.video.user_name}</small>
      </div>
    </div>
  },
  {
    name: 'Date Time',
    cell: row => moment(row.created_At).format('LL, h:mm:ss a')
  },
  {
    name: 'Action',
    cell: row => (
      <Badge pill color='light-danger' className='mr-1 cursor-pointer' onClick={e => e.preventDefault()}>
        Delete
      </Badge>
    )
  }
]
