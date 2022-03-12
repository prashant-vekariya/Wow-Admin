import React, { useState } from 'react'
import { MdEdit } from 'react-icons/md'
import { Label, Input, FormGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledPopover, PopoverHeader, PopoverBody, Row } from 'reactstrap'


const CreateNotification = ({ title, formModal, setFormModal }) => {
    return (
        <>
            <div>
                <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
                    <ModalHeader toggle={() => setFormModal(!formModal)}> {title ? 'Update' : 'Create'} Push Notification</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label>Title</Label>
                            <Input placeholder={title} />
                        </FormGroup>
                        <FormGroup className='mb-2'>
                            <Label for='message'>Message</Label>
                            <Input type='textarea' name='text' id='message' rows='3' placeholder='Write a Notification Message' />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='primary' onClick={() => setFormModal(!formModal)}>
                            {title ? 'Update' : 'Create'}
                        </Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        </>
    )
}

export default CreateNotification