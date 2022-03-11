import { useState } from 'react'
import * as Icon from 'react-feather'
import { ReactSortable } from 'react-sortablejs'
import { MdEdit } from 'react-icons/md'
import AppCollapse from '@components/app-collapse'
import illustration from '@src/assets/images/illustration/faq-illustrations.svg'
import { Nav, NavItem, NavLink, Row, Col, TabContent, TabPane, Label, Input, FormGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'
import EditFaqCategory from './EditFaqCategory'

const Faqs = ({ data }) => {
  const dataToRender = []

  // const [listArr, setListArr] = useState(dataToRender)

  const [activeTab, setActiveTab] = useState('General')
  const [formModal, setFormModal] = useState(false)
  const [addnew, setAddnew] = useState("")


  const toggleTab = tab => setActiveTab(tab)

  Object.entries(data).forEach(([key, val]) => {
    dataToRender.push(val)
  })

  // const modal = () => {
  //   return (
  //     <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
  //       <ModalHeader toggle={() => setFormModal(!formModal)}>Update FAQ Category</ModalHeader>
  //       <ModalBody>
  //         <FormGroup>
  //           <Label>Title</Label>
  //           <Input placeholder={title} />
  //         </FormGroup>
  //         <FormGroup className='mb-2'>
  //           <Label for='blog-edit-status'>Status</Label>
  //           <Input
  //             type='select'
  //             id='blog-edit-status'
  //           // value={status}
  //           // onChange={e => setStatus(e.target.value)}
  //           >
  //             <option value='Published'>Active</option>
  //             <option value='Inactive'>Inactive</option>
  //           </Input>
  //         </FormGroup>
  //       </ModalBody>
  //       <ModalFooter>
  //         <Button color='primary' onClick={() => setFormModal(!formModal)}>
  //           Save
  //         </Button>{' '}
  //       </ModalFooter>
  //     </Modal>
  //   )
  // }

  const renderTabs = () => {
    return dataToRender.map(item => {
      const IconTag = Icon[item.icon]
      return (
        <NavItem key={item.title} tag='li'>
          <NavLink className='d-flex justify-content-between' active={activeTab === item.title} onClick={() => toggleTab(item.title)}>
            <div>
              <IconTag size={18} className='mr-1' />
              <span className='font-weight-bold'>{item.title}</span>
            </div>
            <div>
              <MdEdit size={20} onClick={() => {
                setAddnew('')
                setFormModal(!formModal)
              }} />
              {/* <EditFaqCategory title={item.title} /> */}
            </div>
          </NavLink>
        </NavItem>
      )
    })
  }

  const renderTabContent = () => {
    return dataToRender.map(item => {
      const IconTag = Icon[item.icon]

      return (
        <TabPane key={item.title} tabId={item.title}>
          <div className='d-flex align-items-center'>
            <div className='avatar avatar-tag bg-light-primary mr-1'>
              <IconTag size={20} />
            </div>
            <div>
              <h4 className='mb-0'>{item.title}</h4>
              <span>{item.subtitle}</span>
            </div>
          </div>
          {/* <ReactSortable tag='ul' className='list-group' list={listArr} setList={setListArr} > */}
          <AppCollapse
            className='mt-2'
            type='margin'
            data={item.qandA}
            titleKey='question'
            contentKey='ans'
            accordion
            {...(item.title === 'Payment' ? { active: 1 } : {})}
          />
          {/* </ReactSortable> */}
        </TabPane>
      )
    })
  }

  return (
    <div id='faq-tabs'>
      <Row>
        <Col lg='3' md='4' sm='12'>
          <div className='faq-navigation d-flex justify-content-between flex-column mb-2 mb-md-0'>
            <Nav tag='ul' className='nav-left' pills vertical>
              {renderTabs()}
              <br />
              <Button.Ripple color='primary' outline onClick={() => {
                setAddnew('Add New')
                setFormModal(!formModal)
              }}>
                Add New
              </Button.Ripple>
            </Nav>
            <img
              className='img-fluid d-none d-md-block'
              src={illustration}
              alt='illustration'
              style={{
                transform: 'scaleX(1)'
              }}
            />
          </div>
        </Col>
        <Col lg='9' md='8' sm='12'>
          <TabContent activeTab={activeTab}>{renderTabContent()}</TabContent>
        </Col>
      </Row>

      <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
        <ModalHeader toggle={() => setFormModal(!formModal)}> {addnew ? addnew : 'Update'} FAQ Category</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label>Title</Label>
            <Input placeholder={!addnew && activeTab} />
          </FormGroup>
          <FormGroup className='mb-2'>
            <Label for='blog-edit-status'>Status</Label>
            <Input
              type='select'
              id='blog-edit-status'
            // value={status}
            // onChange={e => setStatus(e.target.value)}
            >
              <option value='Published'>Active</option>
              <option value='Inactive'>Inactive</option>
            </Input>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={() => setFormModal(!formModal)}>
            Save
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default Faqs
