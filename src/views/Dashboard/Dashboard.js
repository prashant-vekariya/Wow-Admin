import { useContext } from 'react'
import { Row, Col, Card, CardBody, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Progress } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import Earnings from '@src/views/ui-elements/cards/analytics/Earnings'
import CardMedal from '@src/views/ui-elements/cards/advance/CardMedal'
import CardMeetup from '@src/views/ui-elements/cards/advance/CardMeetup'
import StatsCard from '@src/views/ui-elements/cards/statistics/StatsCard'
import GoalOverview from '@src/views/ui-elements/cards/analytics/GoalOverview'
import RevenueReport from '@src/views/ui-elements/cards/analytics/RevenueReport'
import OrdersBarChart from '@src/views/ui-elements/cards/statistics/OrdersBarChart'
import ProfitLineChart from '@src/views/ui-elements/cards/statistics/ProfitLineChart'
import CardTransactions from '@src/views/ui-elements/cards/advance/CardTransactions'
import CardBrowserStates from '@src/views/ui-elements/cards/advance/CardBrowserState'

import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'

const EcommerceDashboard = () => {
    const { colors } = useContext(ThemeColors),
        trackBgColor = '#e9ecef'

    return (
        <div id='dashboard-ecommerce'>
            <Row className='match-height'>
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
                    <Row className='match-height'>
                        <Col sm={3}>
                            <Card className="lightgrey-bgcolor shadow-none py-0">
                                <CardBody>
                                    <h3 className="text-orange">15 Mins</h3>
                                    <p className="text-dark p-0 m-0">Average TOP</p>
                                    <small className='font-small-1'>Total TOP = 27 hrs</small>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card className="lightgrey-bgcolor shadow-none">
                                <CardBody>
                                    <h3 className="text-orange">60</h3>
                                    <p className="text-dark p-0 m-0">Average Views per session</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card className="lightgrey-bgcolor shadow-none">
                                <CardBody>
                                    <h3 className="text-orange">9 Mins</h3>
                                    <p className="text-dark p-0 m-0">Avg. Video Time Per User</p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='match-height'>
                        <Col sm={3}>
                            <Card className="lightgrey-bgcolor shadow-none py-0">
                                <CardBody>
                                    <h3 className="text-orange">504 Videos</h3>
                                    <p className="text-dark p-0 m-0">Total Videos Uploaded</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card className="lightgrey-bgcolor shadow-none py-0 pr-0">
                                <CardBody>
                                    <h3 className="text-orange">126 Secs</h3>
                                    <p className="text-dark p-0 m-0">Avg. Video Length</p>
                                    <small className='font-small-1'>Total Video Length = 17.6 hrs</small>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {/* <UserChart /> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className="text-orange">Category Performance</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {/* <CategoryvsUploadChart /> */}
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} lg={4}>
                    <Card className="border bg-transparent shadow-none">
                        <CardBody>
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 className="text-orange">Installs v/s Sign-ups</h3>
                                <div className="br-20 mb-1">
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
                </Col>
            </Row>
        </div>
    )
}

export default EcommerceDashboard
