// ** React Imports
import { useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'


import Avatar from '@components/avatar'

import { useForm } from 'react-hook-form'

// ** Store & Actions
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory, getCategoryDetail, editCategory, addCategory } from './store/action'

// ** Third Party Components
import { Star, Edit, Trash2 } from 'react-feather'
import { Card, CardBody, Row, Col, Media, Button, Form, Input, Label, FormGroup, Badge, CustomInput } from 'reactstrap'

// ** Styles
import '@styles/react/apps/app-users.scss'

const CategoryEdit = () => {

    // ** Store Vars
    const dispatch = useDispatch()
    const store = useSelector(state => state.category)

    const { register, errors, handleSubmit } = useForm()

    const [img, setImg] = useState(null)
    const [icon, setIcon] = useState(null)
    // const [img, setImg] = useState(null)
    const [prewicon, setPrewIcon] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState([])

    const params = useParams()
    const history = useHistory()


    useEffect(() => {
        dispatch(getAllCategory()).then((result) => {
            dispatch(getCategoryDetail(params.id))
            if (store.selectedCategory.length > 0) {
                setSelectedCategory(store.selectedCategory)
                setIcon(store.selectedCategory[0].icon)
            }
        })
    }, [dispatch, store.selectedCategory.length])

    const onChangeImg = e => {
        const reader = new FileReader(),
            files = e.target.files
        reader.onload = function () {
            setImg(reader.result)
            // console.log(reader.result)
        }
        reader.readAsDataURL(files[0])
    }

    const onChangeIcon = e => {
        setPrewIcon(e.target.files[0])
        const reader = new FileReader(),
            files = e.target.files
        reader.onload = function () {
            setIcon(reader.result)
            console.log(reader.result)
        }
        reader.readAsDataURL(files[0])
    }

    const onSubmit = data => {
        // const fd = new FormData()

        // fd.append('category_id', params.id)
        // fd.append('icon', prewicon, prewicon.name)
        // fd.append('sno', data.sno)
        // fd.append('name', data.name)
        // fd.append('description', data.description)

        // const config = {
        //     headers: { 'content-type': 'multipart/form-data' }
        // }

        if (params.id === 'new') {
            dispatch(addCategory({ ...data, icon: prewicon })).then(response => {
                history.push('/category')
            })
        } else {
            const datas = { category_id: params.id, ...data, icon }
            console.log('00000', fd)
            dispatch(editCategory(datas)).then(() => {
                dispatch(getAllCategory())
                setTimeout(() => {
                    history.push('/category')
                }, 200)
            })
        }
    }

    // console.log(store.selectedCategory)

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
                                        src={img}
                                        // src={require('@src/assets/images/illustration/dance.jpg').default}
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
                                        <input type='file' hidden id='change-img' onChange={onChangeImg} accept='image/*' />
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
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <Row>
                                        <Col sm='12'>
                                            <FormGroup>
                                                <Label for='sr no'>S No.</Label>
                                                <Input type='number' id='sr no' name='sno'
                                                    defaultValue={selectedCategory.length > 0 ? selectedCategory[0].sno : ''}
                                                    innerRef={register({ required: true })}
                                                    aria-invalid={errors.srno ? "true" : "false"}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col sm='12'>
                                            <FormGroup>
                                                <Label for='name'>Category Name</Label>
                                                <Input type='text' id='name' name='name'
                                                    defaultValue={selectedCategory.length > 0 ? selectedCategory[0].name : ''}
                                                    innerRef={register({ required: true })}
                                                    aria-invalid={errors.name ? "true" : "false"}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col sm='12'>
                                            <FormGroup>
                                                <Label for='description'>Description</Label>
                                                <Input type='text' id='description' name='description' placeholder='description'
                                                    innerRef={register({ required: true })}
                                                    aria-invalid={errors.name ? "true" : "false"}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col sm='12'>
                                            <FormGroup>
                                                <Label for='description'>Icon</Label>
                                                <br />
                                                {icon ? (<img
                                                    className='user-avatar rounded mr-2 my-25 cursor-pointer'
                                                    src={icon}
                                                    alt='user profile avatar'
                                                    height='100%'
                                                    width='100%'
                                                    style={{ maxWidth: '30px', maxHeight: '30px' }}
                                                />) : (<Avatar color='light-info' icon={<Star size={14} />} />)
                                                }
                                                <Badge className="cursor-pointer" id='change-icon' tag={Label} color='light-primary ml-3'>
                                                    <Edit size={25} />
                                                    <input type='file' hidden id='change-icon' name='icon' onChange={onChangeIcon} accept='image/*' />
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