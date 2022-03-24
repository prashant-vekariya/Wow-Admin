import { useState, useEffect } from 'react'
import * as Icon from 'react-feather'
import { ReactSortable } from 'react-sortablejs'
import { MdEdit } from 'react-icons/md'
import AppCollapse from '@components/app-collapse'
import illustration from '@src/assets/images/illustration/faq-illustrations.svg'
import { Nav, NavItem, NavLink, Row, Col, TabContent, TabPane, Label, Input, FormGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'
// ** Store & Actions
import { getFaqCategoryDetails, createFaqCategory, editFaqCategory, deleteFaqCategory, deleteFaqQuestion } from './store/action'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Faqs = ({ data }) => {
  // console.log(data)

  const [listArr, setListArr] = useState(data)

  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.faq)

  const [activeTab, setActiveTab] = useState(listArr[0].category)
  const [formModal, setFormModal] = useState(false)
  const [addnew, setAddnew] = useState("")

  const [faqCategoryTitle, setfaqCategoryTitle] = useState(''),
    [datas, setDatas] = useState(null),
    [sno, setSno] = useState('')


  const toggleTab = tab => setActiveTab(tab)


  // Object.entries(data).forEach(([key, val]) => {
  //   dataToRender.push(val)
  // })
  useEffect(() => {
    if (store.selectedFaqCategory) {
      setDatas(store.selectedFaqCategory)
      setSno(store.selectedFaqCategory.sno)
    }
  }, [JSON.stringify(store.selectedFaqCategory) === JSON.stringify(datas)])


  const renderTabs = () => {
    return listArr.map(item => {
      // const IconTag = Icon[item.icon]
      return (
        <NavItem key={item.category} tag='li'>
          <NavLink className='d-flex justify-content-between px-0' active={activeTab === item.category} onClick={() => toggleTab(item.category)}>
            <div>
              {/* <IconTag size={18} className='mr-1' /> */}
              <span className='font-weight-bold pl-1'>{item.category}</span>
            </div>
            <div>
              <MdEdit size={18} onClick={() => {
                setAddnew('')
                dispatch(getFaqCategoryDetails(item._id))
                setFormModal(!formModal)
              }} />
              <Icon.Trash2 size={18} onClick={() => {
                dispatch(deleteFaqCategory(item._id))
              }
              } />
            </div>
          </NavLink>
        </NavItem>
      )
    })
  }

  const renderTabContent = () => {
    return listArr.map(item => {
      return (
        <TabPane key={item.category} tabId={item.category}>
          <div className='d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center'>
              <div className='avatar avatar-tag bg-light-primary mr-1'>
                <Icon.LifeBuoy size={25} />
              </div>
              <div>
                <h4 className='mb-0'>{item.category}</h4>
                <small>Created at: {moment(item.created_At).format('LL')} </small>
              </div>
            </div>
            <Button.Ripple color='primary' outline tag={Link} to={{ pathname: '/faq/createquestion', search: `?categoryid=${item._id}` }}>
              Create Question
            </Button.Ripple>
          </div>
          <AppCollapse
            className='mt-2'
            type='margin'
            data={item.question}
            deleteq={id => dispatch(deleteFaqQuestion(id))}
            titleKey='question'
            contentKey='answer'
            accordion
          // {...(item.title === 'Payment' ? { active: 1 } : {})}
          />
        </TabPane>
      )
    })
  }

  const editAddFaqCetegory = () => {
    if (addnew) {
      const data = {
        category: faqCategoryTitle,
        sno
      }
      dispatch(createFaqCategory(data))
    } else {
      const data = {
        category_id: store.selectedFaqCategory._id,
        category: faqCategoryTitle,
        sno
      }
      dispatch(editFaqCategory(data))
    }
  }

  return (
    <div id='faq-tabs'>
      <Row>
        <Col lg='3' md='4' sm='12'>
          <div className='faq-navigation d-flex justify-content-between flex-column mb-2 mb-md-0'>
            <Nav tag='ul' className='nav-left' pills vertical>
              <ReactSortable className='list-group' list={listArr} setList={setListArr} >
                {renderTabs()}
              </ReactSortable>
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
            <FormGroup className='mb-2'>
              <Label>S No.</Label>
              <Input type='number' min="1" value={sno} onChange={e => setSno(e.target.value)} />
            </FormGroup>
            <Label>Title</Label>
            <Input defaultValue={addnew ? "" : activeTab} placeholder='' onChange={e => setfaqCategoryTitle(e.target.value)} required />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={() => {
            editAddFaqCetegory()
            setFormModal(!formModal)
          }}>
            Save
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default Faqs
