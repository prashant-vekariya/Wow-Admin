import { useState, useEffect, useContext } from 'react'
import { Row, Col, Card, CardBody, Table, Badge, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Progress } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import StatsCard from './StatsCard'
// ** Store & Actions
import { getStatistics, addRole } from './store/action'
import { useDispatch, useSelector } from 'react-redux'

import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import BarChart from './BarChart'
import Overview from './Overview'
import UserChart from './UserChart'
import HorizontalBarChart from './HorizontalBarChart'

const Dashboard = () => {
    const { colors } = useContext(ThemeColors),
        trackBgColor = '#e9ecef'

    // ** Store Vars
    const dispatch = useDispatch()
    const store = useSelector(state => state.dashboard)

    const [data, setData] = useState([])

    // ** Get data on mount
    useEffect(() => {
        dispatch(getStatistics())
        setData(store.data)
    }, [dispatch, store.data.length])

    return (
        <>
            {data && (
                <div id='dashboard-ecommerce'>
                    <Row className='match-height'>
                        <Col>
                            <div className='d-flex justify-content-between'>
                                <h3>Statistics</h3>
                                <div>
                                    <UncontrolledButtonDropdown>
                                        <DropdownToggle className='grey-bgcolor br-20 text-dark' color='flat-secondary' caret>
                                            Today
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem href='/' tag='a'>Option 1</DropdownItem>
                                            <DropdownItem href='/' tag='a'>Option 2</DropdownItem>
                                            <DropdownItem href='/' tag='a'>Option 3</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledButtonDropdown>
                                </div>
                            </div>
                        </Col>
                        <Col xs='12'>
                            <StatsCard cols={{ xl: '3', sm: '6' }} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className="text-orange">Overview</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} lg={8}>
                            <Overview data={data} />
                            <Row>
                                <Col>
                                    <UserChart />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h3 className="text-orange">Category Performance</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <BarChart title='Category vs Upload' />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <BarChart title='Category vs Views' />
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={12} lg={4}>
                            <Card className="border bg-transparent shadow-none">
                                <CardBody>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h3 className="text-orange">Installs v/s Sign-ups</h3>
                                        <div className="br-20">
                                            <UncontrolledButtonDropdown>
                                                <DropdownToggle className='grey-bgcolor br-20 text-dark' color='flat-secondary' caret>
                                                    Today
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem href='/' tag='a'>Option 1</DropdownItem>
                                                    <DropdownItem href='/' tag='a'>Option 2</DropdownItem>
                                                    <DropdownItem href='/' tag='a'>Option 3</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledButtonDropdown>
                                        </div>
                                    </div>
                                    <div>
                                        <Progress className="installvssignup my-1" value={50} />
                                    </div>
                                    <div className="d-flex justify-content-around mt-2 mb-3">
                                        <div>
                                            <h3>270K</h3>
                                            <small>Total Installs</small>
                                        </div>
                                        <div>
                                            <h3>180.9K</h3>
                                            <small>Total Sign ups</small>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card className="border bg-transparent shadow-none">
                                <CardBody>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h3 className="text-orange">MAUs by device</h3>
                                        <div className="br-20">
                                            <UncontrolledButtonDropdown>
                                                <DropdownToggle className='grey-bgcolor br-20 text-dark' color='flat-secondary' caret>
                                                    Today
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem href='/' tag='a'>Option 1</DropdownItem>
                                                    <DropdownItem href='/' tag='a'>Option 2</DropdownItem>
                                                    <DropdownItem href='/' tag='a'>Option 3</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledButtonDropdown>
                                        </div>
                                    </div>
                                    <div>
                                        <HorizontalBarChart />
                                    </div>
                                </CardBody>
                            </Card>

                            <Card className="border bg-transparent shadow-none">
                                <CardBody>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h3 className="text-orange">User Acquisition</h3>
                                        <div className="br-20">
                                            <UncontrolledButtonDropdown>
                                                <DropdownToggle className='grey-bgcolor br-20 text-dark' color='flat-secondary' caret>
                                                    Today
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem href='/' tag='a'>Option 1</DropdownItem>
                                                    <DropdownItem href='/' tag='a'>Option 2</DropdownItem>
                                                    <DropdownItem href='/' tag='a'>Option 3</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledButtonDropdown>
                                        </div>
                                    </div>
                                    <div>
                                        Ads (58%) <Progress className=" my-1" value={50} />
                                        Referal (60%) <Progress className=" my-1" value={60} />
                                        Organic (40%) <Progress className=" my-1" value={40} />
                                    </div>
                                    <div className="d-flex justify-content-around text-center mt-3">
                                        <div className='px-1'>
                                            <h4>27,785</h4>
                                            <small>Total New Users</small>
                                        </div>
                                        <div className='px-1'>
                                            <h4>27.5 %</h4>
                                            <small>of All Users are New</small>
                                        </div>
                                        <div className='px-1'>
                                            <h4>$71,766.42</h4>
                                            <small>New User Revenue</small>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>

                            <Table responsive>
                                <thead className='text-center'>
                                    <tr>
                                        <th>City</th>
                                        <th>MAU</th>
                                        <th>% of Total user</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    <tr>
                                        <td>Mumbai</td>
                                        <td>63k</td>
                                        <td>9%</td>
                                    </tr>
                                    <tr >
                                        <td>Delhi</td>
                                        <td>99k</td>
                                        <td>15%</td>
                                    </tr>
                                    <tr>
                                        <td>Chennai</td>
                                        <td>40k</td>
                                        <td>6%</td>
                                    </tr>
                                    <tr >
                                        <td>Delhi</td>
                                        <td>99k</td>
                                        <td>15%</td>
                                    </tr>
                                    <tr>
                                        <td>Mumbai</td>
                                        <td>63k</td>
                                        <td>9%</td>
                                    </tr>
                                    <tr>
                                        <td>Chennai</td>
                                        <td>40k</td>
                                        <td>6%</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </div>
            )
            }
        </>
    )
}

export default Dashboard
