// ** React Imports
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

// ** Utils
import { isObjEmpty } from '@utils'

// ** Custom Components
import InputPasswordToggle from '@components/input-password-toggle'


// ** Store & Actions
import { editStaff, getAllRole } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'

// ** Third Party Components
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput } from 'reactstrap'
import moment from 'moment'

const UserAccountTab = ({ selectedUser, roles }) => {

  const { register, errors, handleSubmit } = useForm()

  // ** States
  const [img, setImg] = useState(null),
    [userData, setUserData] = useState(null),
    [role, setRole] = useState(''),
    [roleList, setRoleList] = useState(roles),
    store = useSelector(state => state.internalusers),
    dispatch = useDispatch(),
    history = useHistory()

  useEffect(() => {
    dispatch(getAllRole())
  }, [])

  // ** Update user on mount or change
  useEffect(() => {
    if (selectedUser !== null || (selectedUser !== null && userData !== null && selectedUser._id !== userData._id)) {
      setUserData(selectedUser)
      setRole(selectedUser.role_id)
    }
  }, [selectedUser])

  useEffect(() => {
    setRoleList(store.roles)
  }, [JSON.stringify(store.roles) !== JSON.stringify(roleList)])

  const onSubmit = values => {
    let data
    if (isObjEmpty(errors)) {
      if (values.password) {
        data = {
          role_id: role,
          fullname: values['fullname'],
          email: values.email,
          password: values.password,
          staff_id: userData._id
        }
      } else {
        data = {
          role_id: role,
          fullname: values['fullname'],
          email: values.email,
          staff_id: userData._id
        }
      }
    }
    dispatch(editStaff(data))
  }

  if (store.redirect) {
    setTimeout(() => {
      history.push(store.redirect)
    }, 300)
  }

  if (userData === null || userData === undefined || roleList === null) {
    return null
  } else {
    return (
      <Row>
        <Col sm='12'>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='username'>Created At</Label>
                  <Input type='text' id='username' placeholder='Username' defaultValue={moment(userData.created_At).format('LL')} disabled />
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='name'>Name</Label>
                  <Input type='text' id='fullname' placeholder='Name' name='fullname'
                    defaultValue={userData.fullname}
                    innerRef={register({ required: true })}
                    className={classnames({ 'is-invalid': errors['fullname'] })} />
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='email'>Email</Label>
                  <Input type='email' id='email' placeholder='Email' name='email'
                    defaultValue={userData.email}
                    innerRef={register({ required: true })}
                    className={classnames({ 'is-invalid': errors['email'] })} />
                </FormGroup>
              </Col>
              <Col md='6' sm='12'>
                <FormGroup>
                  <Label for='role'>Role</Label>
                  <Input type='select' name='role_id' id='role'
                    onChange={e => setRole(e.target.value)}>
                    {roleList.map(data => {
                      return <option value={data._id} key={data._id} selected={data._id === userData.role_id}>{data.name}</option>
                    })}
                  </Input>
                </FormGroup>
              </Col>
              <Col md='6' sm='12'>
                <FormGroup>
                  <InputPasswordToggle
                    label='Password'
                    htmlFor='password'
                    name='password'
                    innerRef={register()}
                    className={classnames('input-group-merge', {
                      'is-invalid': errors['password']
                    })}
                  />
                </FormGroup>
              </Col>
              <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
                <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
                  Save Changes
                </Button.Ripple>
                <Button.Ripple tag={Link}
                  to={`/internaluser/list`} color='secondary' outline >
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
