import React, { Fragment } from 'react'
import { Badge, Card, CardTitle, CardBody, CardText, CardSubtitle, CardLink, CardImg, Row, Col } from 'reactstrap'
import moment from 'moment'
import img3 from '@src/assets/images/slider/06.jpg'


const Clip = ({ data, deleter }) => {
    const handleOnError = (e) => {
        e.target.src = img3
    }
    return (
        <Col lg='3' md='6'>
            <Card>
                <CardBody className="d-flex justify-content-between flex-column">
                    <CardTitle tag='h4'>{data.display_name} <h6 className='text-muted'>@{data.user_name}</h6></CardTitle>
                    <div className='text-center'>
                        <img className='img-fluid mb-2' src={data.video.thumbUrl ? data.video.thumbUrl : img3} onError={handleOnError} alt=' ' style={{ maxHeight: '200px', maxWidth: '200px' }} />
                    </div>
                    <div>
                        <h5 className='m-0'>Posted By: {data.video.display_name}</h5>
                        <h4><small className='text-muted'>@{data.video.user_name}</small></h4>
                        <CardText>{data.message}</CardText>
                    </div>
                    <div>
                        <hr width='100%' />
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='mb-0'>{moment(data.created_At).format('LL, h:mm:ss a')}</h6>
                            <Badge pill color='light-danger' className='mr-1 cursor-pointer' onClick={() => deleter({ is_delete: 'true', report_id: data._id })}>
                                Delete
                            </Badge>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Clip