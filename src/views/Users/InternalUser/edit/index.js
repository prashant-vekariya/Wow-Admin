// ** React Imports
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** User Edit Components
// import SocialTab from './Social'
import AccountTab from './Account'
// import InfoTab from './Information'

// ** Store & Actions
import { getUser, getAllRole } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

// ** Third Party Components
import { User, Info, Share2 } from 'react-feather'
import { Card, CardBody, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Alert } from 'reactstrap'

// ** Styles
import '@styles/react/apps/app-users.scss'

const UserEdit = () => {
  // ** States & Vars
  const [activeTab, setActiveTab] = useState('1'),
    store = useSelector(state => state.internalusers),
    dispatch = useDispatch(),
    { id } = useParams()

  // ** Function to toggle tabs
  const toggle = tab => setActiveTab(tab)

  const [data, setData] = useState(null)

  // ** Function to get user on mount 
  useEffect(() => {
    dispatch(getUser(id))
    // return () => dispatch(getUser(parseInt(0)))
  }, [dispatch, id])


  useEffect(() => {
    if (store.selectedUser) {
      setData(store.selectedUser)
    }
  }, [id, JSON.stringify(store.selectedUser) === JSON.stringify(data)])

  return data !== null && data !== undefined ? (
    <Row className='app-user-edit'>
      <Col sm='12'>
        <Card>
          <CardBody className='pt-2'>
            <AccountTab selectedUser={data} roles={store.roles} />
          </CardBody>
        </Card>
      </Col>
    </Row>
  ) : (
    <Alert color='danger'>
      <h4 className='alert-heading'>User not found</h4>
      <div className='alert-body'>
        User with id: {id} doesn't exist. Check list of all Users: <Link to='/apps/user/list'>Users List</Link>
      </div>
    </Alert>
  )
}
export default UserEdit
