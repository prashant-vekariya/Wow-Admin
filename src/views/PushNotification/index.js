import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardBody, CardText, CardFooter, Row, Col, Button } from 'reactstrap'
import CreateNotification from './CreateNotification'

const PushNotification = () => {
    const [formModal, setFormModal] = useState(false)
    const [title, settitle] = useState('')

    return (
        <>
            <CreateNotification title={title} formModal={formModal} setFormModal={setFormModal} />
            <Row className='mb-2'>
                <Col className='d-flex justify-content-between'>
                    <h3>Push Notification</h3>
                    <Button.Ripple color='primary' onClick={() => setFormModal(true)}>
                        Add New
                    </Button.Ripple>
                </Col>
            </Row>
            <Row>
                <Col md='6' lg='4'>
                    <Card className='text-center'>
                        <CardBody>
                            <CardTitle tag='h4'> Title </CardTitle>
                            <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quae!</CardText>
                            <Button.Ripple color='primary' outline onClick={() => {
                                settitle('Title')
                                setFormModal(true)
                            }}>
                                Action
                            </Button.Ripple>
                        </CardBody>
                        <CardFooter className='text-muted'>12/02/2022</CardFooter>
                    </Card>
                </Col>
                <Col md='6' lg='4'>
                    <Card className='text-center'>
                        <CardBody>
                            <CardTitle tag='h4'> Title </CardTitle>
                            <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quae!</CardText>
                            <Button.Ripple color='primary' outline onClick={() => {
                                settitle('Title')
                                setFormModal(true)
                            }}>
                                Action
                            </Button.Ripple>
                        </CardBody>
                        <CardFooter className='text-muted'>12/02/2022</CardFooter>
                    </Card>
                </Col>
                <Col md='6' lg='4'>
                    <Card className='text-center'>
                        <CardBody>
                            <CardTitle tag='h4'> Title </CardTitle>
                            <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quae!</CardText>
                            <Button.Ripple color='primary' outline onClick={() => {
                                settitle('Title')
                                setFormModal(true)
                            }}>
                                Action
                            </Button.Ripple>
                        </CardBody>
                        <CardFooter className='text-muted'>12/02/2022</CardFooter>
                    </Card>
                </Col>
                <Col md='6' lg='4'>
                    <Card className='text-center'>
                        <CardBody>
                            <CardTitle tag='h4'> Title </CardTitle>
                            <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quae!</CardText>
                            <Button.Ripple color='primary' outline onClick={() => {
                                settitle('Title')
                                setFormModal(true)
                            }}>
                                Action
                            </Button.Ripple>
                        </CardBody>
                        <CardFooter className='text-muted'>12/02/2022</CardFooter>
                    </Card>
                </Col>
                <Col md='6' lg='4'>
                    <Card className='text-center'>
                        <CardBody>
                            <CardTitle tag='h4'> Title </CardTitle>
                            <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quae!</CardText>
                            <Button.Ripple color='primary' outline onClick={() => {
                                settitle('Title')
                                setFormModal(true)
                            }}>
                                Action
                            </Button.Ripple>
                        </CardBody>
                        <CardFooter className='text-muted'>12/02/2022</CardFooter>
                    </Card>
                </Col>
                <Col md='6' lg='4'>
                    <Card className='text-center'>
                        <CardBody>
                            <CardTitle tag='h4'> Title </CardTitle>
                            <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quae!</CardText>
                            <Button.Ripple color='primary' outline onClick={() => {
                                settitle('Title')
                                setFormModal(true)
                            }}>
                                Action
                            </Button.Ripple>
                        </CardBody>
                        <CardFooter className='text-muted'>12/02/2022</CardFooter>
                    </Card>
                </Col>
                <Col md='6' lg='4'>
                    <Card className='text-center'>
                        <CardBody>
                            <CardTitle tag='h4'> Title </CardTitle>
                            <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quae!</CardText>
                            <Button.Ripple color='primary' outline onClick={() => {
                                settitle('Title')
                                setFormModal(true)
                            }}>
                                Action
                            </Button.Ripple>
                        </CardBody>
                        <CardFooter className='text-muted'>12/02/2022</CardFooter>
                    </Card>
                </Col>
                <Col md='6' lg='4'>
                    <Card className='text-center'>
                        <CardBody>
                            <CardTitle tag='h4'> Title </CardTitle>
                            <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quae!</CardText>
                            <Button.Ripple color='primary' outline onClick={() => {
                                settitle('Title')
                                setFormModal(true)
                            }}>
                                Action
                            </Button.Ripple>
                        </CardBody>
                        <CardFooter className='text-muted'>12/02/2022</CardFooter>
                    </Card>
                </Col>
                <Col md='6' lg='4'>
                    <Card className='text-center'>
                        <CardBody>
                            <CardTitle tag='h4'> Title </CardTitle>
                            <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quae!</CardText>
                            <Button.Ripple color='primary' outline onClick={() => {
                                settitle('Title')
                                setFormModal(true)
                            }}>
                                Action
                            </Button.Ripple>
                        </CardBody>
                        <CardFooter className='text-muted'>12/02/2022</CardFooter>
                    </Card>
                </Col>
                <Col md='6' lg='4'>
                    <Card className='text-center'>
                        <CardBody>
                            <CardTitle tag='h4'> Title </CardTitle>
                            <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quae!</CardText>
                            <Button.Ripple color='primary' outline onClick={() => {
                                settitle('Title')
                                setFormModal(true)
                            }}>
                                Action
                            </Button.Ripple>
                        </CardBody>
                        <CardFooter className='text-muted'>12/02/2022</CardFooter>
                    </Card>
                </Col>
                <Col md='6' lg='4'>
                    <Card className='text-center'>
                        <CardBody>
                            <CardTitle tag='h4'> Title </CardTitle>
                            <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quae!</CardText>
                            <Button.Ripple color='primary' outline onClick={() => {
                                settitle('Title')
                                setFormModal(true)
                            }}>
                                Action
                            </Button.Ripple>
                        </CardBody>
                        <CardFooter className='text-muted'>12/02/2022</CardFooter>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default PushNotification