import React, { Fragment } from 'react'
import { Button, Card, CardTitle, CardBody, CardText, CardSubtitle, CardLink, CardImg, Row, Col } from 'reactstrap'
import img3 from '@src/assets/images/slider/06.jpg'


const VideoClips = () => {
    return (
        <Fragment>
            {/* <h6 className='text-muted my-2'>Header and footer</h6> */}
            <Row className='match-height'>
                <Col lg='3' md='6'>
                    <Card>
                        <CardBody>
                            <CardTitle tag='h4'>Dance</CardTitle>
                            <div className='text-center'>
                                <img className='img-fluid mb-2' src={img3} alt='Card cap' style={{ maxHeight: '200px', maxWidth: '200px' }} />
                            </div>
                            <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
                            <hr className='mb-2' />
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Views</h6>
                                    <h3 className='mb-0'>10.3k</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Likes</h6>
                                    <h3 className='mb-0'>156</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Comments</h6>
                                    <h3 className='mb-0'>23</h3>
                                </div>
                            </div>
                            {/* <CardLink href='/' onClick={e => e.preventDefault()}>
                                Card Link
                            </CardLink>
                            <CardLink href='/' onClick={e => e.preventDefault()}>
                                Another Link
                            </CardLink> */}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='3' md='6'>
                    <Card>
                        <CardBody>
                            <CardTitle tag='h4'>Dance</CardTitle>
                            <div className='text-center'>
                                <img className='img-fluid mb-2' src={img3} alt='Card cap' style={{ maxHeight: '200px', maxWidth: '200px' }} />
                            </div>
                            {/* <CardText>Bear claw sesame snaps gummies chocolate.</CardText> */}
                            <hr className='mb-2' />
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Views</h6>
                                    <h3 className='mb-0'>10.3k</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Likes</h6>
                                    <h3 className='mb-0'>156</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Comments</h6>
                                    <h3 className='mb-0'>23</h3>
                                </div>
                            </div>
                            {/* <CardLink href='/' onClick={e => e.preventDefault()}>
                                Card Link
                            </CardLink>
                            <CardLink href='/' onClick={e => e.preventDefault()}>
                                Another Link
                            </CardLink> */}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='3' md='6'>
                    <Card>
                        <CardBody>
                            <CardTitle tag='h4'>Dance</CardTitle>
                            <div className='text-center'>
                                <img className='img-fluid mb-2' src={img3} alt='Card cap' style={{ maxHeight: '200px', maxWidth: '200px' }} />
                            </div>
                            <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
                            <hr className='mb-2' />
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Views</h6>
                                    <h3 className='mb-0'>10.3k</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Likes</h6>
                                    <h3 className='mb-0'>156</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Comments</h6>
                                    <h3 className='mb-0'>23</h3>
                                </div>
                            </div>
                            {/* <CardLink href='/' onClick={e => e.preventDefault()}>
                                Card Link
                            </CardLink>
                            <CardLink href='/' onClick={e => e.preventDefault()}>
                                Another Link
                            </CardLink> */}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='3' md='6'>
                    <Card>
                        <CardBody>
                            <CardTitle tag='h4'>Dance</CardTitle>
                            <div className='text-center'>
                                <img className='img-fluid mb-2' src={img3} alt='Card cap' style={{ maxHeight: '200px', maxWidth: '200px' }} />
                            </div>
                            <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
                            <hr className='mb-2' />
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Views</h6>
                                    <h3 className='mb-0'>10.3k</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Likes</h6>
                                    <h3 className='mb-0'>156</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Comments</h6>
                                    <h3 className='mb-0'>23</h3>
                                </div>
                            </div>
                            {/* <CardLink href='/' onClick={e => e.preventDefault()}>
                                Card Link
                            </CardLink>
                            <CardLink href='/' onClick={e => e.preventDefault()}>
                                Another Link
                            </CardLink> */}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='3' md='6'>
                    <Card>
                        <CardBody>
                            <CardTitle tag='h4'>Dance</CardTitle>
                            <div className='text-center'>
                                <img className='img-fluid mb-2' src={img3} alt='Card cap' style={{ maxHeight: '200px', maxWidth: '200px' }} />
                            </div>
                            <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
                            <hr className='mb-2' />
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Views</h6>
                                    <h3 className='mb-0'>10.3k</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Likes</h6>
                                    <h3 className='mb-0'>156</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Comments</h6>
                                    <h3 className='mb-0'>23</h3>
                                </div>
                            </div>
                            {/* <CardLink href='/' onClick={e => e.preventDefault()}>
                                Card Link
                            </CardLink>
                            <CardLink href='/' onClick={e => e.preventDefault()}>
                                Another Link
                            </CardLink> */}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='3' md='6'>
                    <Card>
                        <CardBody>
                            <CardTitle tag='h4'>Dance</CardTitle>
                            <div className='text-center'>
                                <img className='img-fluid mb-2' src={img3} alt='Card cap' style={{ maxHeight: '200px', maxWidth: '200px' }} />
                            </div>
                            <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
                            <hr className='mb-2' />
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Views</h6>
                                    <h3 className='mb-0'>10.3k</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Likes</h6>
                                    <h3 className='mb-0'>156</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Comments</h6>
                                    <h3 className='mb-0'>23</h3>
                                </div>
                            </div>
                            {/* <CardLink href='/' onClick={e => e.preventDefault()}>
                                Card Link
                            </CardLink>
                            <CardLink href='/' onClick={e => e.preventDefault()}>
                                Another Link
                            </CardLink> */}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='3' md='6'>
                    <Card>
                        <CardBody>
                            <CardTitle tag='h4'>Dance</CardTitle>
                            <div className='text-center'>
                                <img className='img-fluid mb-2' src={img3} alt='Card cap' style={{ maxHeight: '200px', maxWidth: '200px' }} />
                            </div>
                            <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
                            <hr className='mb-2' />
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Views</h6>
                                    <h3 className='mb-0'>10.3k</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Likes</h6>
                                    <h3 className='mb-0'>156</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Comments</h6>
                                    <h3 className='mb-0'>23</h3>
                                </div>
                            </div>
                            {/* <CardLink href='/' onClick={e => e.preventDefault()}>
                                Card Link
                            </CardLink>
                            <CardLink href='/' onClick={e => e.preventDefault()}>
                                Another Link
                            </CardLink> */}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='3' md='6'>
                    <Card>
                        <CardBody>
                            <CardTitle tag='h4'>Dance</CardTitle>
                            <div className='text-center'>
                                <img className='img-fluid mb-2' src={img3} alt='Card cap' style={{ maxHeight: '200px', maxWidth: '200px' }} />
                            </div>
                            <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
                            <hr className='mb-2' />
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Views</h6>
                                    <h3 className='mb-0'>10.3k</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Likes</h6>
                                    <h3 className='mb-0'>156</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Comments</h6>
                                    <h3 className='mb-0'>23</h3>
                                </div>
                            </div>
                            {/* <CardLink href='/' onClick={e => e.preventDefault()}>
                                Card Link
                            </CardLink>
                            <CardLink href='/' onClick={e => e.preventDefault()}>
                                Another Link
                            </CardLink> */}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='3' md='6'>
                    <Card>
                        <CardBody>
                            <CardTitle tag='h4'>Dance</CardTitle>
                            <div className='text-center'>
                                <img className='img-fluid mb-2' src={img3} alt='Card cap' style={{ maxHeight: '200px', maxWidth: '200px' }} />
                            </div>
                            <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
                            <hr className='mb-2' />
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Views</h6>
                                    <h3 className='mb-0'>10.3k</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Likes</h6>
                                    <h3 className='mb-0'>156</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Comments</h6>
                                    <h3 className='mb-0'>23</h3>
                                </div>
                            </div>
                            {/* <CardLink href='/' onClick={e => e.preventDefault()}>
                                Card Link
                            </CardLink>
                            <CardLink href='/' onClick={e => e.preventDefault()}>
                                Another Link
                            </CardLink> */}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='3' md='6'>
                    <Card>
                        <CardBody>
                            <CardTitle tag='h4'>Dance</CardTitle>
                            <div className='text-center'>
                                <img className='img-fluid mb-2' src={img3} alt='Card cap' style={{ maxHeight: '200px', maxWidth: '200px' }} />
                            </div>
                            <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
                            <hr className='mb-2' />
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Views</h6>
                                    <h3 className='mb-0'>10.3k</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Likes</h6>
                                    <h3 className='mb-0'>156</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Comments</h6>
                                    <h3 className='mb-0'>23</h3>
                                </div>
                            </div>
                            {/* <CardLink href='/' onClick={e => e.preventDefault()}>
                                Card Link
                            </CardLink>
                            <CardLink href='/' onClick={e => e.preventDefault()}>
                                Another Link
                            </CardLink> */}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='3' md='6'>
                    <Card>
                        <CardBody>
                            <CardTitle tag='h4'>Dance</CardTitle>
                            <div className='text-center'>
                                <img className='img-fluid mb-2' src={img3} alt='Card cap' style={{ maxHeight: '200px', maxWidth: '200px' }} />
                            </div>
                            <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
                            <hr className='mb-2' />
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Views</h6>
                                    <h3 className='mb-0'>10.3k</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Likes</h6>
                                    <h3 className='mb-0'>156</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Comments</h6>
                                    <h3 className='mb-0'>23</h3>
                                </div>
                            </div>
                            {/* <CardLink href='/' onClick={e => e.preventDefault()}>
                                Card Link
                            </CardLink>
                            <CardLink href='/' onClick={e => e.preventDefault()}>
                                Another Link
                            </CardLink> */}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='3' md='6'>
                    <Card>
                        <CardBody>
                            <CardTitle tag='h4'>Dance</CardTitle>
                            <div className='text-center'>
                                <img className='img-fluid mb-2' src={img3} alt='Card cap' style={{ maxHeight: '200px', maxWidth: '200px' }} />
                            </div>
                            <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
                            <hr className='mb-2' />
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Views</h6>
                                    <h3 className='mb-0'>10.3k</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Likes</h6>
                                    <h3 className='mb-0'>156</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Comments</h6>
                                    <h3 className='mb-0'>23</h3>
                                </div>
                            </div>
                            {/* <CardLink href='/' onClick={e => e.preventDefault()}>
                                Card Link
                            </CardLink>
                            <CardLink href='/' onClick={e => e.preventDefault()}>
                                Another Link
                            </CardLink> */}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='3' md='6'>
                    <Card>
                        <CardBody>
                            <CardTitle tag='h4'>Dance</CardTitle>
                            <div className='text-center'>
                                <img className='img-fluid mb-2' src={img3} alt='Card cap' style={{ maxHeight: '200px', maxWidth: '200px' }} />
                            </div>
                            <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
                            <hr className='mb-2' />
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Views</h6>
                                    <h3 className='mb-0'>10.3k</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Likes</h6>
                                    <h3 className='mb-0'>156</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Comments</h6>
                                    <h3 className='mb-0'>23</h3>
                                </div>
                            </div>
                            {/* <CardLink href='/' onClick={e => e.preventDefault()}>
                                Card Link
                            </CardLink>
                            <CardLink href='/' onClick={e => e.preventDefault()}>
                                Another Link
                            </CardLink> */}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='3' md='6'>
                    <Card>
                        <CardBody>
                            <CardTitle tag='h4'>Dance</CardTitle>
                            <div className='text-center'>
                                <img className='img-fluid mb-2' src={img3} alt='Card cap' style={{ maxHeight: '200px', maxWidth: '200px' }} />
                            </div>
                            <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
                            <hr className='mb-2' />
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Views</h6>
                                    <h3 className='mb-0'>10.3k</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Likes</h6>
                                    <h3 className='mb-0'>156</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Comments</h6>
                                    <h3 className='mb-0'>23</h3>
                                </div>
                            </div>
                            {/* <CardLink href='/' onClick={e => e.preventDefault()}>
                                Card Link
                            </CardLink>
                            <CardLink href='/' onClick={e => e.preventDefault()}>
                                Another Link
                            </CardLink> */}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='3' md='6'>
                    <Card>
                        <CardBody>
                            <CardTitle tag='h4'>Dance</CardTitle>
                            <div className='text-center'>
                                <img className='img-fluid mb-2' src={img3} alt='Card cap' style={{ maxHeight: '200px', maxWidth: '200px' }} />
                            </div>
                            <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
                            <hr className='mb-2' />
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Views</h6>
                                    <h3 className='mb-0'>10.3k</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Likes</h6>
                                    <h3 className='mb-0'>156</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Comments</h6>
                                    <h3 className='mb-0'>23</h3>
                                </div>
                            </div>
                            {/* <CardLink href='/' onClick={e => e.preventDefault()}>
                                Card Link
                            </CardLink>
                            <CardLink href='/' onClick={e => e.preventDefault()}>
                                Another Link
                            </CardLink> */}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='3' md='6'>
                    <Card>
                        <CardBody>
                            <CardTitle tag='h4'>Dance</CardTitle>
                            <div className='text-center'>
                                <img className='img-fluid mb-2' src={img3} alt='Card cap' style={{ maxHeight: '200px', maxWidth: '200px' }} />
                            </div>
                            <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
                            <hr className='mb-2' />
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Views</h6>
                                    <h3 className='mb-0'>10.3k</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Likes</h6>
                                    <h3 className='mb-0'>156</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Comments</h6>
                                    <h3 className='mb-0'>23</h3>
                                </div>
                            </div>
                            {/* <CardLink href='/' onClick={e => e.preventDefault()}>
                                Card Link
                            </CardLink>
                            <CardLink href='/' onClick={e => e.preventDefault()}>
                                Another Link
                            </CardLink> */}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='3' md='6'>
                    <Card>
                        <CardBody>
                            <CardTitle tag='h4'>Dance</CardTitle>
                            <div className='text-center'>
                                <img className='img-fluid mb-2' src={img3} alt='Card cap' style={{ maxHeight: '200px', maxWidth: '200px' }} />
                            </div>
                            <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
                            <hr className='mb-2' />
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Views</h6>
                                    <h3 className='mb-0'>10.3k</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Likes</h6>
                                    <h3 className='mb-0'>156</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Comments</h6>
                                    <h3 className='mb-0'>23</h3>
                                </div>
                            </div>
                            {/* <CardLink href='/' onClick={e => e.preventDefault()}>
                                Card Link
                            </CardLink>
                            <CardLink href='/' onClick={e => e.preventDefault()}>
                                Another Link
                            </CardLink> */}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='3' md='6'>
                    <Card>
                        <CardBody>
                            <CardTitle tag='h4'>Dance</CardTitle>
                            <div className='text-center'>
                                <img className='img-fluid mb-2' src={img3} alt='Card cap' style={{ maxHeight: '200px', maxWidth: '200px' }} />
                            </div>
                            <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
                            <hr className='mb-2' />
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Views</h6>
                                    <h3 className='mb-0'>10.3k</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Likes</h6>
                                    <h3 className='mb-0'>156</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Comments</h6>
                                    <h3 className='mb-0'>23</h3>
                                </div>
                            </div>
                            {/* <CardLink href='/' onClick={e => e.preventDefault()}>
                                Card Link
                            </CardLink>
                            <CardLink href='/' onClick={e => e.preventDefault()}>
                                Another Link
                            </CardLink> */}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='3' md='6'>
                    <Card>
                        <CardBody>
                            <CardTitle tag='h4'>Dance</CardTitle>
                            <div className='text-center'>
                                <img className='img-fluid mb-2' src={img3} alt='Card cap' style={{ maxHeight: '200px', maxWidth: '200px' }} />
                            </div>
                            <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
                            <hr className='mb-2' />
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Views</h6>
                                    <h3 className='mb-0'>10.3k</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Likes</h6>
                                    <h3 className='mb-0'>156</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Comments</h6>
                                    <h3 className='mb-0'>23</h3>
                                </div>
                            </div>
                            {/* <CardLink href='/' onClick={e => e.preventDefault()}>
                                Card Link
                            </CardLink>
                            <CardLink href='/' onClick={e => e.preventDefault()}>
                                Another Link
                            </CardLink> */}
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='3' md='6'>
                    <Card>
                        <CardBody>
                            <CardTitle tag='h4'>Dance</CardTitle>
                            <div className='text-center'>
                                <img className='img-fluid mb-2' src={img3} alt='Card cap' style={{ maxHeight: '200px', maxWidth: '200px' }} />
                            </div>
                            <CardText>Bear claw sesame snaps gummies chocolate.</CardText>
                            <hr className='mb-2' />
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Views</h6>
                                    <h3 className='mb-0'>10.3k</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Likes</h6>
                                    <h3 className='mb-0'>156</h3>
                                </div>
                                <div>
                                    <h6 className='text-muted font-weight-bolder'>Comments</h6>
                                    <h3 className='mb-0'>23</h3>
                                </div>
                            </div>
                            {/* <CardLink href='/' onClick={e => e.preventDefault()}>
                                Card Link
                            </CardLink>
                            <CardLink href='/' onClick={e => e.preventDefault()}>
                                Another Link
                            </CardLink> */}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default VideoClips