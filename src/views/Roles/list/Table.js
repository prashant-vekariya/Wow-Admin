// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Columns
import { columns } from './columns'

// ** Store & Actions
import { getAllRoleData, addRole } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'

// ** Third Party Components
import DataTable from 'react-data-table-component'
import { Card, CardHeader, CardTitle, CardBody, Input, Row, Col, Label, FormGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** Table Header
const CustomHeader = ({ toggle }) => {
  return (
    <div className='invoice-list-table-header w-100 mr-1 ml-50 my-75'>
      <Row>
        <Col
          xl='12'
          className='d-flex align-items-sm-center justify-content-between flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1'
        >
          <div>
            <h3 className='m-0 p-0'>WoW Roles</h3>
          </div>
          <Button.Ripple color='primary' onClick={toggle}>
            Add New
          </Button.Ripple>
        </Col>
      </Row>
    </div>
  )
}

const UsersList = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.roles)

  // ** States
  const [formModal, setFormModal] = useState(false)
  const [name, setname] = useState('')

  // ** Function to toggle Model
  const toggle = () => setFormModal(!formModal)

  // ** Get data on mount
  useEffect(() => {
    dispatch(getAllRoleData())
  }, [dispatch])

  const addNewRole = () => {
    dispatch(addRole({
      name
    }))
    setFormModal(!formModal)
  }

  return (
    <Fragment>
      <Card>
        <DataTable
          noHeader
          subHeader
          responsive
          columns={columns}
          className='react-dataTable'
          data={store.allRoleData}
          subHeaderComponent={
            <CustomHeader
              toggle={toggle}
            />
          }
        />
      </Card>

      <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
        <ModalHeader toggle={() => setFormModal(!formModal)}> Add New Role</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label>Role Name</Label>
            <Input type='text' onChange={e => setname(e.target.value)} />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={addNewRole}>
            Save
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </Fragment>
  )
}

export default UsersList
