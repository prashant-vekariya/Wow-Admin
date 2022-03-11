import React, { useState } from 'react'
import { MdEdit } from 'react-icons/md'
import { Label, Input, FormGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledPopover, PopoverHeader, PopoverBody, Row } from 'reactstrap'


const EditFaqCategory = ({ title }) => {
    const [formModal, setFormModal] = useState(false)
    return (
        <>
            <div>
                <MdEdit size={20} onClick={() => setFormModal(!formModal)} />
                <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
                    <ModalHeader toggle={() => setFormModal(!formModal)}>Update FAQ Category</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label>Title</Label>
                            <Input placeholder={title} />
                        </FormGroup>
                        <FormGroup className='mb-2'>
                            <Label for='blog-edit-status'>Status</Label>
                            <Input
                                type='select'
                                id='blog-edit-status'
                            // value={status}
                            // onChange={e => setStatus(e.target.value)}
                            >
                                <option value='Published'>Active</option>
                                <option value='Inactive'>Inactive</option>
                            </Input>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='primary' onClick={() => setFormModal(!formModal)}>
                            Save
                        </Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        </>
    )
}

export default EditFaqCategory