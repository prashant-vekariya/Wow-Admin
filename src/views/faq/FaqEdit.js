import { useState, useEffect } from 'react'
import { Link, useParams, useHistory, useLocation } from 'react-router-dom'

// ** Store & Actions
import { getFaqQuestionDetails, createFaqQuestion, editFaqQuestion } from './store/action'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card, CardBody, CardText, Media, Form, Label, Input, FormGroup, CustomInput, Button } from 'reactstrap'
import { toast, Slide } from 'react-toastify'


const FaqEdit = () => {

    const [data, setData] = useState(null),
        [question, setQuestion] = useState(''),
        [sno, setSno] = useState(''),
        [answer, setAnswer] = useState('')

    const dispatch = useDispatch(),
        store = useSelector(state => state.faq),
        { id } = useParams(),
        history = useHistory(),
        { search } = useLocation()

    useEffect(() => {
        if (id !== 'createquestion') {
            dispatch(getFaqQuestionDetails(id))
        }
    }, [])

    useEffect(() => {
        if (store.selectedFaqQuestion) {
            console.log(store.selectedFaqQuestion)
            setData(store.selectedFaqQuestion)
            setQuestion(store.selectedFaqQuestion.question)
            setAnswer(store.selectedFaqQuestion.answer)
            setSno(store.selectedFaqQuestion.sno)
        }
    }, [store.selectedFaqQuestion])

    const submit = () => {
        if (id === 'createquestion') {
            const data = {
                category_id: new URLSearchParams(search).get('categoryid'),
                sno,
                answer,
                question
            }
            // console.log(data)
            dispatch(createFaqQuestion(data))
        } else {
            const data = {
                question_id: id,
                answer,
                question
            }
            dispatch(editFaqQuestion(data))
        }
    }

    if (store.redirect) {
        setTimeout(() => {
            history.push(store.redirect)
            toast.success(
                <div className='toastify-header'>
                    <div className='title-wrapper'>
                        <h6 className='toast-title font-weight-bold text-uppercase'>{id === 'createquestion' ? 'Created' : 'Edit'} Successfully.!!</h6>
                    </div>
                </div>,
                { transition: Slide, hideProgressBar: true, autoClose: 3000 }
            )
        }, 300)
    }

    return (
        <div className='blog-edit-wrapper'>
            {/* {data !== null ? ( */}
            <Row>
                <Col sm='12'>
                    <Card>
                        <CardBody>
                            <h2>{id === 'createquestion' ? 'Create' : 'Update'} FAQ Question</h2>
                            <Form className='mt-2'>
                                <Row>
                                    <Col md='12'>
                                        <FormGroup className='mb-2'>
                                            <Label>S No.</Label>
                                            <Input type='number' min="1" value={sno} onChange={e => setSno(e.target.value)} />
                                        </FormGroup>
                                    </Col>
                                    <Col md='12'>
                                        <FormGroup className='mb-2'>
                                            <Label for='edit-question'>Question</Label>
                                            <Input id='edit-question' value={question} onChange={e => setQuestion(e.target.value)} />
                                        </FormGroup>
                                    </Col>
                                    {/* <Col md='12'>
                                            <FormGroup className='mb-2'>
                                                <Label for='blog-edit-status'>Status</Label>
                                                <Input
                                                    type='select'
                                                    id='blog-edit-status'
                                                    value={status}
                                                    onChange={e => setStatus(e.target.value)}
                                                >
                                                    <option value='Published'>Published</option>
                                                    <option value='Pending'>Pending</option>
                                                    <option value='Draft'>Draft</option>
                                                </Input>
                                            </FormGroup>
                                        </Col> */}
                                    <Col sm='12'>
                                        <FormGroup className='mb-2'>
                                            <Label>Answer</Label>
                                            <Input type='textarea' value={answer} onChange={e => setAnswer(e.target.value)} />
                                        </FormGroup>
                                    </Col>
                                    <Col className='mt-50'>
                                        <Button.Ripple color='primary' className='mr-1' onClick={() => submit()}>
                                            {id === 'createquestion' ? 'Create' : 'Save Changes'}
                                        </Button.Ripple>
                                        <Button.Ripple tag={Link}
                                            to={`/faq`} color='secondary' outline>
                                            Cancel
                                        </Button.Ripple>
                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/* ) : null} */}
        </div>
    )
}

export default FaqEdit
