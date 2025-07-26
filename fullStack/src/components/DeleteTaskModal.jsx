import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

export default function DeleteTaskModal({ show, handleClose, onConfirm }) {
    return (

        <Modal show={show} onHide={handleClose} centered>


            <Modal.Body>
                <Modal.Title as="h4">Are you sure?</Modal.Title>
                <Modal.Title as="p" className='mt-2 mb-2' style={{ fontSize: "14px" }}>This task will be deleted permanently</Modal.Title>

                <div className='d-flex justify-content-end gap-2'>
                    <Button className='bg-light' style={{ width: "80px", color: "black" }} onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button style={{ width: "80px" }} onClick={onConfirm}>
                        Confirm
                    </Button>
                </div>
            </Modal.Body>

        </Modal>
    )
}
