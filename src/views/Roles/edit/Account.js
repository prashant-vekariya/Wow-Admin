// ** React Imports
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { getRoleDetails } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

// ** Third Party Components
import { Lock, Edit, Trash2 } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput } from 'reactstrap'

const UserAccountTab = ({ selectedRole }) => {
  // ** States
  const [userData, setUserData] = useState(null)
  const store = useSelector(state => state.roles),
    dispatch = useDispatch(),
    { id } = useParams()

  // ** Function to get user on mount
  // useEffect(() => {
  //   dispatch(getRoleDetails(id))
  // }, [dispatch, id])

  useEffect(() => {
    setUserData(store.selectedRole[0])
    // if (selectedRole !== null || (selectedRole !== null && userData !== null && selectedRole._id !== userData._id)) {
    //   setUserData(selectedRole)
    // }
  }, [store.selectedRole])


  if (userData === null || userData === undefined) {
    return null
  } else {
    console.log(userData.permission.manage_user)
    return (
      <Row>
        <Col sm='12'>
          <h4 className='text-capitalize'>Set Permissions for <strong>{userData.name}</strong> </h4>
        </Col>
        <Col sm='12' className='mt-2'>
          <Form onSubmit={e => e.preventDefault()}>
            <Row>
              <Col sm='12'>
                <div className='permissions border mt-1'>
                  <h6 className='py-1 mx-1 mb-0 font-medium-2'>
                    <Lock size={18} className='mr-25' />
                    <span className='align-middle'>Permissions</span>
                  </h6>
                  <Table borderless striped responsive>
                    <thead className='thead-light'>
                      <tr>
                        <th>Manage User</th>
                        <th>Manage Clips</th>
                        <th>Change Password</th>
                        <th>Manage Reported Contents</th>
                        <th>Manage Tages</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <CustomInput type='checkbox' id='admin-1' label='' defaultChecked={userData.permission.manage_user} />
                        </td>
                        <td>
                          <CustomInput type='checkbox' id='admin-1.1' label='' defaultChecked={userData.permission.manage_clip} />
                        </td>
                        <td>
                          <CustomInput type='checkbox' id='admin-2' label='' defaultChecked={userData.permission.can_change_password} />
                        </td>
                        <td>
                          <CustomInput type='checkbox' id='admin-3' label='' defaultChecked={userData.permission.manage_reported_content} />
                        </td>
                        <td>
                          <CustomInput type='checkbox' id='admin-4' label='' defaultChecked={userData.permission.manage_tags} />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
              <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
                <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
                  Save Changes
                </Button.Ripple>
                <Button.Ripple tag={Link}
                  to={`/roles`} color='secondary' outline>
                  Cancel
                </Button.Ripple>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    )
  }
}
export default UserAccountTab
