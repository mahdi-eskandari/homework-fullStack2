// components/AddDirectoryModal.jsx
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

export default function AddDirectoryModal({ show, handleClose, onSubmit }) {
    const [dirName, setDirName] = useState('');

    const handleAdd = () => {
        if (dirName.trim()) {

            const newDirectory = {
                id: uuidv4(),
                name: dirName.trim()
            };
            console.log(newDirectory);
            onSubmit(newDirectory);
            setDirName('');
            handleClose();
        }
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title as="h3">Create new directory</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Modal.Title as="p" className='mb-1' style={{ fontSize: "14px" }}>Title</Modal.Title>
                <Form.Control
                    type="text"
                    placeholder="Enter directory name"
                    value={dirName}
                    onChange={(e) => setDirName(e.target.value)}
                />
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-start'>
                <Button style={{ width: "80px" }} onClick={handleAdd}>
                    create
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
