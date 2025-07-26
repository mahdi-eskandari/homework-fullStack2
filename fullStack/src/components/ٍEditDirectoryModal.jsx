// components/EditDirectoryModal.js
import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function EditDirectoryModal({ show, handleClose, onSubmit, defaultValue }) {
    const [name, setName] = useState("");

    // وقتی defaultValue تغییر کرد، مقدار input به‌روزرسانی بشه
    useEffect(() => {
        if (defaultValue?.name) {
            setName(defaultValue.name);
        } else {
            setName("");
        }
    }, [defaultValue]);

    const handleSave = () => {
        if (!name.trim()) return; // جلوگیری از ارسال نام خالی
        onSubmit({ ...defaultValue, name });
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title as="h5">Edit directory name</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label className='mb-1' style={{ fontSize: "14px" }}>
                    Title
                </Form.Label>
                <Form.Control
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Directory name"
                />
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-start'>
                <Button variant="primary" style={{ width: "80px" }} onClick={handleSave}>
                    Edit
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditDirectoryModal;
