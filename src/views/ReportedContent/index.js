import AvatarGroup from '@components/avatar-group'
import react from '@src/assets/images/icons/react.svg'
import vuejs from '@src/assets/images/icons/vuejs.svg'
import angular from '@src/assets/images/icons/angular.svg'
import bootstrap from '@src/assets/images/icons/bootstrap.svg'
import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import avatar2 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import avatar3 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import img3 from '@src/assets/images/slider/06.jpg'
import { MoreVertical, Edit, Trash } from 'react-feather'
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

const avatarGroupData1 = [
    {
        title: 'Lilian',
        img: avatar1,
        imgHeight: 26,
        imgWidth: 26
    },
    {
        title: 'Alberto',
        img: avatar2,
        imgHeight: 26,
        imgWidth: 26
    },
    {
        title: 'Bruce',
        img: avatar3,
        imgHeight: 26,
        imgWidth: 26
    }
]

const avatarGroupData2 = [
    {
        title: 'Diana',
        img: avatar1,
        imgHeight: 26,
        imgWidth: 26
    },
    {
        title: 'Rey',
        img: avatar2,
        imgHeight: 26,
        imgWidth: 26
    },
    {
        title: 'James',
        img: avatar3,
        imgHeight: 26,
        imgWidth: 26
    }
]

const avatarGroupData3 = [
    {
        title: 'Lee',
        img: avatar1,
        imgHeight: 26,
        imgWidth: 26
    },
    {
        title: 'Mario',
        img: avatar2,
        imgHeight: 26,
        imgWidth: 26
    },
    {
        title: 'Oswald',
        img: avatar3,
        imgHeight: 26,
        imgWidth: 26
    }
]

const avatarGroupData4 = [
    {
        title: 'Christie',
        img: avatar1,
        imgHeight: 26,
        imgWidth: 26
    },
    {
        title: 'Barnes',
        img: avatar2,
        imgHeight: 26,
        imgWidth: 26
    },
    {
        title: 'Arthur',
        img: avatar3,
        imgHeight: 26,
        imgWidth: 26
    }
]

const ReportedContent = () => {
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>Sr No.</th>
                    <th>Message</th>
                    <th>Reported By</th>
                    <th>Clip</th>
                    <th>Posted By</th>
                    <th>Date Time</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <span className='align-middle font-weight-bold'>1</span>
                    </td>
                    <td>Hate Speach</td>
                    <td>A PHP Error is Encounted</td>

                    <td>
                        {/* <AvatarGroup data={avatarGroupData1} /> */}
                        <img className='img-fluid mb-2' src={img3} alt='Card cap' style={{ maxHeight: '200px', maxWidth: '200px' }} />
                    </td>
                    <td>Peter Charles</td>
                    <td>
                        12/02/2022
                    </td>
                    <td>
                        <Badge pill color='light-danger' className='mr-1 cursor-pointer' onClick={e => e.preventDefault()}>
                            Delete
                        </Badge>
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}


export default ReportedContent