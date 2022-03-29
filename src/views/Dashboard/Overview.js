import React from 'react'
import { Row, Col, Card, CardBody } from 'reactstrap'


const Overview = ({ data }) => {
    return (
        <>
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
                            <h3 className="text-orange">{data.videos} Videos</h3>
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
        </>
    )
}

export default Overview