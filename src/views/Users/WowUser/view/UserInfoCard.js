// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Card, CardBody, CardText, Button, Row, Col } from 'reactstrap'
import { DollarSign, TrendingUp, User, Check, Star, Flag, Phone, Clock, Globe, Gift, Smile, UserPlus, Eye, AtSign } from 'react-feather'
import moment from 'moment'


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
          <Col sm='6' className='d-flex flex-column justify-content-between border-container-lg'>
            <h5 className='mb-75'><Star className='mr-1' size={18} /> About</h5>
            <CardText className='user-info-title ml-3'>{selectedUser.user_bio}</CardText>
            <div className='mt-2'>
              <h5 className='mb-75'><UserPlus className='mr-1' size={18} /> Joined</h5>
              <CardText className='user-info-title ml-3'>{moment(selectedUser.created_At).format('LL')}</CardText>
            </div>
            <div className='mt-2'>
              <h5 className='mb-75'><AtSign className='mr-1' size={18} /> Email</h5>
              <CardText className='user-info-title ml-3'>{selectedUser.email_id}</CardText>
            </div>
            <div className='mt-2'>
              <h5 className='mb-75'><Eye className='mr-1' size={18} /> Accpunt type</h5>
              <CardText className='user-info-title ml-3'>{selectedUser.is_private ? 'Private' : 'Public'}</CardText>
            </div>
            <div className='mt-2'>
              <h5 className='mb-75'> <Smile className='mr-1' size={18} />Gender</h5>
              <CardText className='user-info-title ml-3'>{selectedUser.gender}</CardText>
            </div>
          </Col>
          <Col sm='6' className='d-flex flex-column justify-content-between border-container-lg'>
            <div className='mt-2 mt-sm-0'>
              <h5 className='mb-75'><Check className='mr-1' size={18} /> Status</h5>
              <CardText className='user-info-title ml-3'>{selectedUser.is_active ? 'Active' : 'inActive'}</CardText>
            </div>
            <div className='mt-2'>
              <h5 className='mb-75'><Clock className='mr-1' size={18} /> Lat Updated</h5>
              <CardText className='user-info-title ml-3'>{moment(selectedUser.updated_At).format('LL')}</CardText>
            </div>
            <div className='mt-2'>
              <h5 className='mb-75'><Gift className='mr-1' size={18} /> Date of Birth</h5>
              <CardText className='user-info-title ml-3'>{moment(selectedUser.user_dob).format('LL')}</CardText>
            </div>
            <div className='mt-2'>
              <h5 className='mb-75'><Flag className='mr-1' size={18} /> Country</h5>
              <CardText className='user-info-title ml-3'>{selectedUser.country}</CardText>
            </div>
            <div className='mt-2'>
              <h5 className='mb-75'><Phone className='mr-1' size={18} />Contact</h5>
              <CardText className='user-info-title ml-3'>{selectedUser.mobile_no}</CardText>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card >
  )
}

export default UserInfoCard
