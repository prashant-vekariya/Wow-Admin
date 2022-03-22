// ** React Imports
import { useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'


import Avatar from '@components/avatar'
import dummyImg from '@src/assets/images/backgrounds/dummy-image.jpg'

import { useForm } from 'react-hook-form'

// ** Store & Actions
import { useSelector, useDispatch } from 'react-redux'
import { getCategoryDetail, editCategory, addCategory } from './store/action'

// ** Third Party Components
import { Star, Edit, Trash2 } from 'react-feather'
import { Card, CardBody, Row, Col, Media, Button, Form, Input, Label, FormGroup, Badge, CustomInput } from 'reactstrap'

// ** Styles
import '@styles/react/apps/app-users.scss'

/* eslint-disable */
const CategoryEdit = () => {

    // ** Store Vars
    const dispatch = useDispatch()
    const store = useSelector(state => state.category)

    const { register, errors, handleSubmit } = useForm()

    const [previewimg, setPreviewImg] = useState(null)
    const [previewicon, setPreviewIcon] = useState(null)
    const [img, setImg] = useState(null)
    const [icon, setIcon] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState(null)

    const params = useParams()
    const history = useHistory()


    useEffect(() => {
        if (params.id !== 'new') {
            dispatch(getCategoryDetail(params.id))
        }
    }, [dispatch, params.id])

    useEffect(() => {
        if (params.id !== 'new') {
            if (store.selectedCategory) {
                setSelectedCategory(store.selectedCategory)
                setPreviewImg(store.selectedCategory.backgroundImage)
                setImg(store.selectedCategory.backgroundImage)
                setPreviewIcon(store.selectedCategory.icon)
                setIcon(store.selectedCategory.icon)
            }
        }
    }, [store.selectedCategory, params.id])


    const onChangeImg = e => {
        const reader = new FileReader(),
            files = e.target.files
        reader.onload = function () {
            setImg(files[0])
            setPreviewImg(reader.result)
        }
        reader.readAsDataURL(files[0])
    }

    const onChangeIcon = e => {
        const reader = new FileReader(),
            files = e.target.files
        reader.onload = function () {
            setIcon(files[0])
            setPreviewIcon(reader.result)
        }
        reader.readAsDataURL(files[0])
    }

    const onSubmit = data => {
        const formData = new FormData()

        formData.append('category_id', params.id)
        formData.append('name', data.name)
        formData.append('description', data.description)
        formData.append('sno', data.sno)
        formData.append('icon', icon)
        formData.append('backgroundImage', img)

        for (var key of formData.entries()) {
            console.log(key[0] + ', ' + key[1])
        }

        if (params.id === 'new') {
            dispatch(addCategory(formData))
        } else {
            dispatch(editCategory(formData))
        }
    }

    if (store.redirect) {
        setTimeout(() => {
            history.push(store.redirect)
        }, 300)
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
                                        src={previewimg ? previewimg : dummyImg}
                                        alt='Cover Image'
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
                                        <input type='file' hidden id='change-img' onChange={onChangeImg} accept='image/*' />
                                    </Button.Ripple>
                                    {/* <Button.Ripple color='secondary' outline>
                                        <span className='d-none d-sm-block'>Remove</span>
                                        <span className='d-block d-sm-none'>
                                            <Trash2 size={14} />
                                        </span>
                                    </Button.Ripple> */}
                                </Row>
                            </Col>
                            <Col lg='6'>
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <Row>
                                        <Col sm='12'>
                                            <FormGroup>
                                                <Label for='sr no'>S No.</Label>
                                                <Input type='number' id='sr no' name='sno'
                                                    defaultValue={selectedCategory !== null ? selectedCategory.sno : ''}
                                                    innerRef={register({ required: true })}
                                                    aria-invalid={errors.srno ? "true" : "false"}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col sm='12'>
                                            <FormGroup>
                                                <Label for='name'>Category Name</Label>
                                                <Input type='text' id='name' name='name'
                                                    defaultValue={selectedCategory !== null ? selectedCategory.name : ''}
                                                    innerRef={register({ required: true })}
                                                    aria-invalid={errors.name ? "true" : "false"}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col sm='12'>
                                            <FormGroup>
                                                <Label for='description'>Description</Label>
                                                <Input type='text' id='description' name='description'
                                                    defaultValue={selectedCategory !== null ? selectedCategory.description : ''}
                                                    innerRef={register({ required: false })}
                                                    aria-invalid={errors.name ? "true" : "false"}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col sm='12'>
                                            <FormGroup>
                                                <Label for='description'>Icon</Label>
                                                <br />
                                                {previewicon ? (<img
                                                    className='user-avatar rounded mr-2 my-25 cursor-pointer'
                                                    src={previewicon}
                                                    alt='user profile avatar'
                                                    height='100%'
                                                    width='100%'
                                                    style={{ maxWidth: '30px', maxHeight: '30px' }}
                                                />) : (<Avatar color='light-info' icon={<Star size={14} />} />)
                                                }
                                                <Badge className="cursor-pointer" id='change-icon' tag={Label} color='light-primary ml-3'>
                                                    <Edit size={25} />
                                                    <input type='file' hidden id='change-icon' name='icon' onChange={onChangeIcon} />
                                                </Badge>
                                            </FormGroup>
                                        </Col>
                                        <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
                                            <Button.Ripple type='submit' className='mb-1 mb-sm-0 mr-0 mr-sm-1' color='primary'>
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