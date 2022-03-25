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
import AvatarBlank from '@src/assets/images/avatars/avatar-blank.png'
import BreadCrumbs from '@components/breadcrumbs'

// ** User View Components
import UserInfoCard from './UserInfoCard'
import UserTimeline from './UserTimeline'

// ** Styles
import '@styles/react/apps/app-users.scss'

const UserView = props => {
  // ** Vars
  const store = useSelector(state => state.wowusers),
    dispatch = useDispatch(),
    { id } = useParams()

  // ** Get suer on mount
  useEffect(() => {
    dispatch(getUser(id))
  }, [dispatch])

  const renderUserImg = () => {
    if (store.selectedUser.profile_pic_url !== null || store.selectedUser.profile_pic_url !== ' ' || store.selectedUser.profile_pic_url !== undefined) {
      console.log(store.selectedUser.profile_pic_url)
      return <Avatar img={store.selectedUser.profile_pic_url} alt='' />
    } else {
      console.log('dgnd')
      const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]
      return (
        <Avatar
          initials
          color={color}
          className='rounded'
          content={store.selectedUser.display_name}
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

  console.log(store.selectedUser)

  return store.selectedUser !== null && store.selectedUser !== undefined ? (
    <div className='app-user-view'>
      <BreadCrumbs breadCrumbTitle='Wow Users' breadCrumbParent='User List' breadCrumbActive='User Details' />
      <Row className='match-height'>
        <Col lg='4' md='4'>
          <Card className='card-profile'>
            <CardImg className='img-fluid' src={coverImg} alt='' top />
            <CardBody>
              <div className='profile-image-wrapper'>
                <div className='profile-image'>
                  <Avatar img={store.selectedUser.profile_pic_url ? store.selectedUser.profile_pic_url : AvatarBlank} alt='' />
                </div>
              </div>
              <h3>{store.selectedUser.display_name}</h3>
              <h6 className='text-muted'>@{store.selectedUser.user_name}</h6>
              <Badge className='profile-badge' color='light-primary'>
                Pro Level
              </Badge>
              <hr className='mb-2' />
              <div className='d-flex justify-content-between align-items-center'>
                <div>
                  <h6 className='text-muted font-weight-bolder'>Followers</h6>
                  <h3 className='mb-0'>{store.selectedUser.follower_count}</h3>
                </div>
                <Link to={`/wowuser/view/${id}/following`}>
                  <h6 className='text-muted font-weight-bolder'>Following</h6>
                  <h3 className='mb-0'>{store.selectedUser.following_count}</h3>
                </Link>
                <div>
                  <h6 className='text-muted font-weight-bolder'>Videos</h6>
                  <h3 className='mb-0'>{store.selectedUser.uploaded_video_count}</h3>
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
