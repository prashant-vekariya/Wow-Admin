import { Fragment, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
// ** Store & Actions
import { getAllData, deleteInfo, getInfoDetails } from './store/action'
import { useDispatch, useSelector } from 'react-redux'

import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Row,
  Col,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

const CardNavigation = () => {
  const [activePill, setPillActive] = useState(0)
  const [activeTab, setTabActive] = useState(0)

  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.pageInfo)

  const [data, setData] = useState([])

  // ** Get data on mount
  useEffect(() => {
    dispatch(getAllData())
  }, [])

  useEffect(() => {
    setData(store.allData)
  }, [JSON.stringify(store.allData) !== JSON.stringify(data), store.allData.length])

  const togglePills = tab => {
    if (activePill !== tab) {
      setPillActive(tab)
    }
  }


  return (
    <Fragment>
      <div className='d-flex justify-content-between mb-2'>
        <h3 className=''>WOW Page Info</h3>
        <Button.Ripple color='primary' outline tag={Link} to='/pageinfoedit/createpageinfo'>
          Add New
        </Button.Ripple>
      </div>
      <Row>
        <Col md='12'>
          <Card className='text-center'>
            <CardHeader>
              <Nav pills>
                {data.map((item, i) => {
                  return (
                    <NavItem key={i}>
                      <NavLink
                        active={activePill === i}
                        onClick={() => {
                          togglePills(i)
                        }}
                      >
                        {item.name}
                      </NavLink>
                    </NavItem>
                  )
                })}
              </Nav>
            </CardHeader>
            <CardBody>
              <TabContent activeTab={activePill}>
                {data.map((item, i) => {
                  return (
                    <TabPane className='text-left' tabId={i} key={i}>
                      <div dangerouslySetInnerHTML={{
                        __html: item.description
                      }}></div>
                      <Button.Ripple className='mr-1' color='primary' outline tag={Link} to={`/pageinfoedit/${item._id}`}
                        onClick={() => dispatch(getInfoDetails(item._id))}
                      >
                        Edit
                      </Button.Ripple>
                      <Button.Ripple color='danger' outline onClick={() => {
                        dispatch(deleteInfo({ soft_delete: 'true', page_id: item._id }))
                        setPillActive(0)
                      }}>
                        Delete
                      </Button.Ripple>
                    </TabPane>
                  )
                })}
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default CardNavigation
