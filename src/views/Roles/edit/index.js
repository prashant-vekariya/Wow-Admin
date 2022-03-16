// ** React Imports
import { useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'

// ** Store & Actions
import { getRoleDetails, editRole } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

// ** Third Party Components
import { toast, Slide } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { Lock, Info, Share2 } from 'react-feather'
import { Card, CardBody, Row, Col, CustomInput, Table, Form, Alert, Button } from 'reactstrap'

// ** Styles
import '@styles/react/apps/app-users.scss'

const RoleEdit = () => {
  // ** States & Vars
  const [userData, setUserData] = useState(null)

  const { register, errors, handleSubmit } = useForm()

  const store = useSelector(state => state.roles),
    dispatch = useDispatch(),
    { id } = useParams(),
    history = useHistory()


  // ** Function to get user on mount
  useEffect(() => {
    dispatch(getRoleDetails(id))
  }, [dispatch, id])

  useEffect(() => {
    setUserData(store.selectedRole)
  }, [store.selectedRole, id])

  const onSubmit = data => {
    dispatch(editRole({ role_id: id, ...data }))
  }

  if (store.redirect) {
    history.push(store.redirect)
    toast.success(
      <div className='toastify-header'>
        <div className='title-wrapper'>
          <h6 className='toast-title font-weight-bold text-uppercase'>Role Edited Successfully.!!</h6>
        </div>
      </div>,
      { transition: Slide, hideProgressBar: true, autoClose: 3000 }
    )
  }

  return store.selectedRole !== null && store.selectedRole !== undefined && userData !== null && userData !== undefined ? (
    <Row className='app-user-edit'>
      <Col sm='12'>
        <Card>
          <CardBody className='pt-2'>
            <Row>
              <Col sm='12'>
                <h4 className='text-capitalize'>Set Permissions for <strong>{store.selectedRole.name}</strong> </h4>
              </Col>
              <Col sm='12' className='mt-2'>
                <Form onSubmit={handleSubmit(onSubmit)}>
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
                                <CustomInput type='checkbox' id='1' label='' name='manage_user'
                                  defaultChecked={store.selectedRole.permission.manage_user}
                                  innerRef={register()}
                                  aria-invalid={errors.srno ? "true" : "false"} />
                              </td>
                              <td>
                                <CustomInput type='checkbox' id='2' label='' name='manage_clip'
                                  defaultChecked={store.selectedRole.permission.manage_clip}
                                  innerRef={register()}
                                  aria-invalid={errors.srno ? "true" : "false"} />
                              </td>
                              <td>
                                <CustomInput type='checkbox' id='3' label='' name='can_change_password'
                                  defaultChecked={userData.permission.can_change_password}
                                  innerRef={register()}
                                  aria-invalid={errors.srno ? "true" : "false"} />
                              </td>
                              <td>
                                <CustomInput type='checkbox' id='4' label='' name='manage_reported_content'
                                  defaultChecked={userData.permission.manage_reported_content}
                                  innerRef={register()}
                                  aria-invalid={errors.srno ? "true" : "false"} />
                              </td>
                              <td>
                                <CustomInput type='checkbox' id='5' label='' name='manage_tags'
                                  defaultChecked={userData.permission.manage_tags}
                                  innerRef={register()}
                                  aria-invalid={errors.srno ? "true" : "false"} />
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
            {/* <AccountTab selectedRole={store.selectedRole[0]} /> */}
          </CardBody>
        </Card>
      </Col>
    </Row>
  ) : (
    <Alert color='danger'>
      <h4 className='alert-heading'>Role not found</h4>
      <div className='alert-body'>
        Role with id: {id} doesn't exist. Check list of all Role: <Link to='/roles'>Role List</Link>
      </div>
    </Alert>
  )
}
export default RoleEdit
