// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Card, CardBody, CardText, Button, Row, Col } from 'reactstrap'
import { DollarSign, TrendingUp, User, Check, Star, Flag, Phone } from 'react-feather'

const UserInfoCard = ({ selectedUser }) => {
  // ** render user img
  const renderUserImg = () => {
    if (selectedUser !== null && selectedUser.avatar.length) {
      return <img src={selectedUser.avatar} alt='user-avatar' className='img-fluid rounded' height='104' width='104' />
    } else {
      const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]
      return (
        <Avatar
          initials
          color={color}
          className='rounded'
          content={selectedUser.fullName}
          contentStyles={{
            borderRadius: 0,
            fontSize: 'calc(36px)',
            width: '100%',
            height: '100%'
          }}
          style={{
            height: '90px',
            width: '90px'
          }}
        />
      )
    }
  }

  return (
    <Card>
      <CardBody>
        <Row>
          <Col xl='6' lg='12' className='d-flex flex-column justify-content-between border-container-lg'>
            <h5 className='mb-75'>About</h5>
            <CardText>Tart I love sugar plum I love oat cake. Sweet ⭐️ roll caramels I love jujubes. Topping cake wafer.</CardText>
            <div className='mt-2'>
              <h5 className='mb-75'>Joined:</h5>
              <CardText>November 15, 2015</CardText>
            </div>
            <div className='mt-2'>
              <h5 className='mb-75'>Lives:</h5>
              <CardText>New York, USA</CardText>
            </div>
            <div className='mt-2'>
              <h5 className='mb-75'>Email:</h5>
              <CardText>{selectedUser.email}</CardText>
            </div>
            <div className='mt-2'>
              <h5 className='mb-75'>Website:</h5>
              <CardText>www.abc.com</CardText>
            </div>
          </Col>
          <Col xl='6' lg='12' className='mt-2 mt-xl-0'>
            <div className='user-info-wrapper'>
              <div className='d-flex flex-wrap align-items-center mt-1'>
                <div className='user-info-title'>
                  <h5 className='mb-75'> <User className='mr-1' size={14} />
                    Username</h5>
                  <CardText tag='span' className='user-info-title ml-3'>
                    {selectedUser !== null ? selectedUser.username : 'eleanor.aguilar'}
                  </CardText>
                </div>
                {/* <CardText className='mb-0'>
                  {selectedUser !== null ? selectedUser.username : 'eleanor.aguilar'}
                </CardText> */}
              </div>
              <div className='d-flex flex-wrap align-items-center my-3'>
                <div className='user-info-title'>
                  <h5 className='mb-75'> <Check className='mr-1' size={14} /> Status </h5>
                  <CardText tag='span' className='user-info-title  mb-0 ml-3'>
                    {selectedUser !== null ? selectedUser.status : 'Active'}
                  </CardText>
                </div>
                {/* <CardText className='text-capitalize mb-0'>
                  {selectedUser !== null ? selectedUser.status : 'Active'}
                </CardText> */}
              </div>
              {/* <div className='d-flex flex-wrap align-items-center my-50'>
                <div className='user-info-title'>
                  <h5 className='mb-75'> <Star className='mr-1' size={14} /> Role </h5>
                  <CardText tag='span' className='user-info-title  mb-0 ml-3'>
                    {selectedUser !== null ? selectedUser.role : 'Admin'}
                  </CardText>
                </div>
                <CardText className='text-capitalize mb-0'>
                  {selectedUser !== null ? selectedUser.role : 'Admin'}
                </CardText>
              </div> */}
              <div className='d-flex flex-wrap align-items-center my-3'>
                <div className='user-info-title'>
                  <h5 className='mb-75'> <Flag className='mr-1' size={14} />Country </h5>
                  <CardText tag='span' className='user-info-title  mb-0 ml-3'>
                    {selectedUser !== null ? selectedUser.country : 'England'}
                  </CardText>
                </div>
              </div>
              <div className='d-flex flex-wrap align-items-center'>
                <div className='user-info-title'>
                  <h5 className='mb-75'> <Phone className='mr-1' size={14} />Contact </h5>
                  <CardText tag='span' className='user-info-title  mb-0 ml-3'>
                    {selectedUser !== null ? selectedUser.contact : '(123) 456-7890'}
                  </CardText>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card >
  )
}

export default UserInfoCard
