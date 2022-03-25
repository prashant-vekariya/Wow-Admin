import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { createNotification } from './store/action'
import { useDispatch, useSelector } from 'react-redux'
import { Label, Input, Form, FormGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledPopover, PopoverHeader, PopoverBody, Row } from 'reactstrap'


const CreateNotification = ({ formModal, setFormModal }) => {

    const dispatch = useDispatch()
    const store = useSelector(state => state.notification)

    const { register, errors, handleSubmit } = useForm()

    const onSubmit = data => {
        setFormModal(!formModal)
        dispatch(createNotification(data))
    }

    return (
        <>
            <div>
                <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
                    <ModalHeader toggle={() => setFormModal(!formModal)}> Create Push Notification</ModalHeader>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <ModalBody>
                            <FormGroup>
                                <Label>Title</Label>
                                <Input type='text' name='title' innerRef={register({ required: true })}
                                    aria-invalid={errors.title ? "true" : "false"} />
                            </FormGroup>
                            <FormGroup className='mb-2'>
                                <Label for='message'>Message</Label>
                                <Input type='textarea' name='message' id='message' rows='3' placeholder='Write a Notification Message'
                                    innerRef={register({ required: true })}
                                    aria-invalid={errors.message ? "true" : "false"} />
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button color='primary' type='submit'>
                                Create
                            </Button>{' '}
                        </ModalFooter>
                    </Form>
                </Modal>
            </div>
        </>
    )
}

export default CreateNotification