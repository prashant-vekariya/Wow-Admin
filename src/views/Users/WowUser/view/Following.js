
// ** Reactstrap
import { Card, CardHeader, CardBody, Badge, Table, Button } from 'reactstrap'

const Following = ({ selectedUser }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Thumbnail</th>
          <th>Display Name</th>
          <th>User Name</th>
          <th>Email</th>
          <th>is Expert</th>
          <th>is Active</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span className='align-middle font-weight-bold'>IMG</span>
          </td>
          <td>Godfather</td>
          <td>Iver</td>

          <td>
            Abc@text.com
            {/* <AvatarGroup data={avatarGroupData1} /> */}
            {/* <img className='img-fluid mb-2' src={img3} alt='Card cap' style={{ maxHeight: '200px', maxWidth: '200px' }} /> */}
          </td>
          <td></td>
          <td></td>
          <td>
            <Badge pill color='light-info' className='mr-1 cursor-pointer' onClick={e => e.preventDefault()}>
              Details
            </Badge>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default Following
