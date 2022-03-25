import React, { useState, useEffect } from 'react'
// ** Store & Actions
import { getNotificationList, sendNotification, deleteNotification } from './store/action'
import { useDispatch, useSelector } from 'react-redux'

import { Card, CardHeader, CardTitle, CardBody, CardText, CardFooter, Row, Col, Button } from 'reactstrap'
import moment from 'moment'
import CreateNotification from './CreateNotification'

const PushNotification = () => {

    // ** Store Vars
    const dispatch = useDispatch()
    const store = useSelector(state => state.notification)

    const [data, setData] = useState([])
    const [formModal, setFormModal] = useState(false)

    useEffect(() => {
        dispatch(getNotificationList())
    }, [])

    useEffect(() => {
        if (store.allData) {
            setData(store.allData)
        }
    }, [store.allData.length])

    const notification = (item) => {
        return (
            <Col md='6' lg='4' key={item._id}>
                <Card className='text-center'>
                    <CardBody>
                        <CardTitle tag='h4'> {item.title} </CardTitle>
                        <CardText>{item.message}</CardText>
                        <div>
                            <Button.Ripple color='primary' outline onClick={() => {
                                dispatch(sendNotification({ title: item.title, message: item.message }))
                            }}>
                                Send
                            </Button.Ripple>
                            <Button.Ripple className="ml-1" color='danger' outline onClick={() => {
                                dispatch(deleteNotification(item._id))
                            }}>
                                Delete
                            </Button.Ripple>
                        </div>
                    </CardBody>
                    <CardFooter className='text-muted'>{moment(item.createdAt).format('LL')}</CardFooter>
                </Card>
            </Col>
        )
    }

    return (
        <>
            <CreateNotification formModal={formModal} setFormModal={setFormModal} />
            <Row className='mb-2'>
                <Col className='d-flex justify-content-between'>
                    <h3>Push Notification</h3>
                    <Button.Ripple color='primary' onClick={() => setFormModal(true)}>
                        Add New
                    </Button.Ripple>
                </Col>
            </Row>
            <Row>{data.length > 0 && data.map(item => {
                return notification(item)
            })}
            </Row>
        </>
    )
}

export default PushNotification