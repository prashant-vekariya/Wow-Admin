// ** React Imports
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** Store & Actions
import { getUser } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

// ** Reactstrap
import Avatar from '@components/avatar'
import coverImg from '@src/assets/images/banner/banner-12.jpg'
import { Row, Col, Card, CardBody, CardImg, Badge, Alert } from 'reactstrap'
import profileImg from '@src/assets/images/portrait/small/avatar-s-9.jpg'

// ** User View Components
import PlanCard from './PlanCard'
import UserInfoCard from './UserInfoCard'
import UserTimeline from './UserTimeline'
// import InvoiceList from '../../../invoice/list'
import PermissionsTable from './PermissionsTable'

// ** Styles
import '@styles/react/apps/app-users.scss'

const UserView = props => {
  // ** Vars
  const store = useSelector(state => state.users),
    dispatch = useDispatch(),
    { id } = useParams()

  // ** Get suer on mount
  useEffect(() => {
    dispatch(getUser(parseInt(id)))
  }, [dispatch])

  return store.selectedUser !== null && store.selectedUser !== undefined ? (
    <div className='app-user-view'>
      <Row className='match-height'>
        <Col lg='4' md='4'>
          <Card className='card-profile'>
            <CardImg className='img-fluid' src={coverImg} top />
            <CardBody>
              <div className='profile-image-wrapper'>
                <div className='profile-image'>
                  <Avatar img={store.selectedUser.avatar} />
                </div>
              </div>
              <h3>Curtis Stone</h3>
              <h6 className='text-muted'>Malaysia</h6>
              <Badge className='profile-badge' color='light-primary'>
                Pro Level
              </Badge>
              <hr className='mb-2' />
              <div className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6 className='text-muted font-weight-bolder'>Followers</h6>
                  <h3 className='mb-0'>10.3k</h3>
                </div>
                <div>
                  <h6 className='text-muted font-weight-bolder'>Following</h6>
                  <h3 className='mb-0'>156</h3>
                </div>
                <div>
                  <h6 className='text-muted font-weight-bolder'>Videos</h6>
                  <h3 className='mb-0'>23</h3>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md='8'>
          <UserInfoCard selectedUser={store.selectedUser} />
        </Col>
      </Row>
      <Row>
        <Col md='12'>
          <UserTimeline />
        </Col>
      </Row>
      {/* <div className='app-user-view'>
        <Row>
          <Col xl='9' lg='8' md='7'>
            <UserInfoCard selectedUser={store.selectedUser} />
          </Col>
          <Col xl='3' lg='4' md='5'>
            <PlanCard selectedUser={store.selectedUser} />
          </Col>
        </Row>
        <Row>
          <Col md='6'>
            <UserTimeline />
          </Col>
          <Col md='6'>
            <PermissionsTable />
          </Col>
        </Row>
        <Row>
          <Col sm='12'>
            <InvoiceList />
          </Col>
        </Row> */}
    </div>
  ) : (
    <Alert color='danger'>
      <h4 className='alert-heading'>User not found</h4>
      <div className='alert-body'>
        User with id: {id} doesn't exist. Check list of all Users: <Link to='/apps/user/list'>Users List</Link>
      </div>
    </Alert>
  )
}
export default UserView
