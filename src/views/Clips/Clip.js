import React, { Fragment } from 'react'
import { Button, Card, CardTitle, CardBody, CardText, CardSubtitle, CardLink, CardImg, Row, Col } from 'reactstrap'
import img3 from '@src/assets/images/slider/06.jpg'


const Clip = ({ data }) => {
    // console.log(data.thumbUrl)
    const handleOnError = (e) => {
        e.target.src = img3
    }
    return (
        <Col lg='3' md='6'>
            <Card>
                <CardBody className="d-flex justify-content-between flex-column">
                    <CardTitle tag='h4'>{data.display_name}</CardTitle>

                    <div className='text-center'>
                        <img className='img-fluid mb-2' src={data.thumbUrl ? data.thumbUrl : img3} onError={handleOnError} alt=' ' style={{ maxHeight: '200px', maxWidth: '200px' }} />
                    </div>
                    <CardText>{data.video_description}</CardText>
                    <div>
                        <hr width='100%' />
                        <div className='d-flex justify-content-between align-items-center'>
                            <div>
                                <h6 className='text-muted font-weight-bolder'>Views</h6>
                                <h3 className='mb-0'>{data.views_count}</h3>
                            </div>
                            <div>
                                <h6 className='text-muted font-weight-bolder'>Likes</h6>
                                <h3 className='mb-0'>{data.likes_count}</h3>
                            </div>
                            <div>
                                <h6 className='text-muted font-weight-bolder'>Comments</h6>
                                <h3 className='mb-0'>{data.comments_count}</h3>
                            </div>
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
    )
}

export default Clip