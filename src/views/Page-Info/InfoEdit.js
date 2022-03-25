import { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
// ** Store & Actions
import { editPageInfo, addPageInfo, getInfoDetails } from './store/action'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import Avatar from '@components/avatar'
import htmlToDraft from 'html-to-draftjs'
import draftToHtml from 'draftjs-to-html'
import { selectThemeColors } from '@utils'
import { Editor } from 'react-draft-wysiwyg'
import BreadCrumbs from '@components/breadcrumbs'
import { EditorState, ContentState, convertToRaw } from 'draft-js'
import {
    Row,
    Col,
    Card,
    CardBody,
    CardText,
    Media,
    Form,
    Label,
    Input,
    FormGroup,
    CustomInput,
    Button
} from 'reactstrap'

import '@styles/react/libs/editor/editor.scss'
import '@styles/base/plugins/forms/form-quill-editor.scss'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/base/pages/page-blog.scss'

const InfoEdit = () => {
    // ** Store Vars
    const dispatch = useDispatch()
    const store = useSelector(state => state.pageInfo)

    const [data, setData] = useState(null),
        [title, setTitle] = useState(''),
        [status, setStatus] = useState('')

    const params = useParams(),
        history = useHistory()

    useEffect(() => {
        if (params.id !== 'createpageinfo') {
            dispatch(getInfoDetails(params.id))
        }
    }, [params.id])

    const [content, setContent] = useState(null)

    useEffect(() => {
        if (params.id !== 'createpageinfo') {
            if (store.selectedInfo) {
                setData(store.selectedInfo)
                setTitle(store.selectedInfo.name)
                const contentBlock = htmlToDraft(store.selectedInfo.description)
                const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
                const editorState = EditorState.createWithContent(contentState)
                setContent(editorState)
            }
        }
    }, [store.selectedInfo])

    const submit = () => {
        const blocks = convertToRaw(content.getCurrentContent())
        const markup = draftToHtml(blocks)
        if (params.id !== 'createpageinfo') {
            // const value = blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n')
            const data = { description: markup, name: title, page_id: params.id }
            dispatch(editPageInfo(data))
        } else {
            const data = { description: markup, name: title }
            dispatch(addPageInfo(data))
        }
    }

    if (store.redirect) {
        setTimeout(() => {
            history.push(store.redirect)
        }, 300)
    }


    return (
        <div className='blog-edit-wrapper'>
            <BreadCrumbs breadCrumbTitle='Page Info' breadCrumbParent={data ? data.name : ''} breadCrumbActive={data ? `Edit ${data.name}` : 'Create Page Info'} />
            <Row>
                <Col sm='12'>
                    <Card>
                        <CardBody>
                            <h2>{data ? `Update ${data.name}` : 'Create New'}</h2>
                            <Form className='mt-2' onSubmit={e => e.preventDefault()}>
                                <Row>
                                    <Col md='6'>
                                        <FormGroup className='mb-2'>
                                            <Label for='blog-edit-title'>Title</Label>
                                            <Input id='blog-edit-title' value={title} onChange={e => setTitle(e.target.value)} />
                                        </FormGroup>
                                    </Col>
                                    {/* <Col md='6'>
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
                                            <Label>Content</Label>
                                            <Editor editorState={content} onEditorStateChange={data => setContent(data)} />
                                        </FormGroup>
                                    </Col>
                                    <Col className='mt-50'>
                                        <Button.Ripple color='primary' className='mr-1' onClick={() => submit()}>
                                            Save Changes
                                        </Button.Ripple>
                                        <Button.Ripple tag={Link}
                                            to={`/pageinfo`} color='secondary' outline>
                                            Cancel
                                        </Button.Ripple>
                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default InfoEdit
