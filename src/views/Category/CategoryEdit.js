// ** React Imports
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** User Edit Components
// import SocialTab from './Social'
import Avatar from '@components/avatar'
// import InfoTab from './Information'

// ** Store & Actions
import { useSelector, useDispatch } from 'react-redux'

// ** Third Party Components
import { User, Info, Share2, Star, Edit, Trash2 } from 'react-feather'
import { Card, CardBody, Row, Col, Media, Button, Form, Input, Label, FormGroup, Badge, CustomInput } from 'reactstrap'

// ** Styles
import '@styles/react/apps/app-users.scss'

const CategoryEdit = () => {

    const params = useParams()

    const onChange = e => {
        const reader = new FileReader(),
            files = e.target.files
        reader.onload = function () {
            // setImg(reader.result)
            console.log(reader.result)
        }
        reader.readAsDataURL(files[0])
    }

    return (
        <Row className='app-user-edit'>
            <Col sm='12'>
                <Card>
                    <CardBody className='pt-2'>
                        <Row>
                            <Col lg='6' className='d-flex flex-column align-items-center'>
                                <Row>
                                    <img
                                        className='user-avatar rounded mr-2 my-25 cursor-pointer'
                                        src={require('@src/assets/images/illustration/dance.jpg').default}
                                        alt='user profile avatar'
                                        height='100%'
                                        width='100%'
                                        style={{ maxWidth: '480px', maxHeight: '350px' }}
                                    />
                                </Row>
                                <Row className='mt-1'>
                                    <Button.Ripple id='change-img' tag={Label} className='mr-75 mb-0' color='primary'>
                                        <span className='d-none d-sm-block'>Change</span>
                                        <span className='d-block d-sm-none'>
                                            <Edit size={14} />
                                        </span>
                                        <input type='file' hidden id='change-img' onChange={onChange} accept='image/*' />
                                    </Button.Ripple>
                                    <Button.Ripple color='secondary' outline>
                                        <span className='d-none d-sm-block'>Remove</span>
                                        <span className='d-block d-sm-none'>
                                            <Trash2 size={14} />
                                        </span>
                                    </Button.Ripple>
                                </Row>
                            </Col>
                            <Col lg='6'>
                                <Form onSubmit={e => e.preventDefault()}>
                                    <Row>
                                        <Col sm='12'>
                                            <FormGroup>
                                                <Label for='sr no'>Sr No.</Label>
                                                <Input type='number' id='sr no' placeholder='0' />
                                            </FormGroup>
                                        </Col>
                                        <Col sm='12'>
                                            <FormGroup>
                                                <Label for='username'>Category Name</Label>
                                                <Input type='text' id='username' placeholder={params.name} />
                                            </FormGroup>
                                        </Col>
                                        <Col sm='12'>
                                            <FormGroup>
                                                <Label for='description'>Description</Label>
                                                <Input type='text' id='description' placeholder='description' />
                                            </FormGroup>
                                        </Col>
                                        <Col sm='12'>
                                            <FormGroup>
                                                <Label for='description'>Icon</Label>
                                                <br />
                                                <Avatar color='light-info' icon={<Star size={14} />} />
                                                <Badge className="cursor-pointer" id='change-icon' tag={Label} color='light-primary ml-3'>
                                                    <Edit size={25} />
                                                    <input type='file' hidden id='change-icon' onChange={onChange} accept='image/*' />
                                                </Badge>
                                                {/* <Input type='text' id='description' placeholder='description' /> */}
                                            </FormGroup>
                                        </Col>
                                        <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
                                            <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
                                                Save Changes
                                            </Button.Ripple>
                                            <Button.Ripple tag={Link}
                                                to={`/category`} color='secondary' outline>
                                                Cancel
                                            </Button.Ripple>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default CategoryEdit