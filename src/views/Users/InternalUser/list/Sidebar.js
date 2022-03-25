// ** React Import
import { useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Utils
import { isObjEmpty } from '@utils'

// ** Third Party Components
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { Button, FormGroup, Label, FormText, Form, Input } from 'reactstrap'

// ** Store & Actions
import { addStaff } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'

import InputPasswordToggle from '@components/input-password-toggle'


const SidebarNewUsers = ({ open, toggleSidebar }) => {
  // ** States
  const [role, setRole] = useState(''),
    store = useSelector(state => state.internalusers),
    dispatch = useDispatch()

  const { register, errors, handleSubmit } = useForm()

  const onSubmit = values => {
    if (isObjEmpty(errors)) {
      toggleSidebar()
      dispatch(
        addStaff({
          role_id: role,
          ...values
        })
      )
    }
  }

  return (
    <Sidebar
      size='lg'
      open={open}
      title='New Staff'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for='fullname'>
            Full Name <span className='text-danger'>*</span>
          </Label>
          <Input
            name='fullname'
            id='full-name'
            placeholder='John Doe'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['fullname'] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for='email'>
            Email <span className='text-danger'>*</span>
          </Label>
          <Input
            type='email'
            name='email'
            id='email'
            placeholder='john.doe@example.com'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['email'] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for='user-role'>User Role</Label>
          <Input type='select' id='user-role' name='user-role' value={role} onChange={e => setRole(e.target.value)}>
            {store.roles.map(data => {
              return <option value={data._id} key={data._id}>{data.name}</option>
            })}
          </Input>
        </FormGroup>
        <FormGroup>
          <InputPasswordToggle
            label='Password'
            htmlFor='password'
            name='password'
            innerRef={register({ required: true })}
            className={classnames('input-group-merge', {
              'is-invalid': errors['password']
            })}
          />
        </FormGroup>
        <Button type='submit' className='mr-1' color='primary'>
          Submit
        </Button>
        <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
          Cancel
        </Button>
      </Form>
    </Sidebar>
  )
}

export default SidebarNewUsers
