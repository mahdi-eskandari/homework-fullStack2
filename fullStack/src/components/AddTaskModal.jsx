
// components/AddTaskModal.jsx
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from 'react-redux';

export default function AddTaskModal({ show, handleClose, onSubmit }) {
    // const [dirName, setDirName] = useState('');
    const dispatch = useDispatch();
    const directories = useSelector((state) => state.tasks.directories);

    // const handleAdd = () => {
    //     if (dirName.trim()) {
    //         onSubmit(dirName);
    //         setDirName('');
    //         handleClose();
    //     }
    // };


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            title: '',
            date: '',
            description: '',
            directory: 'Main'
        }
    })


    const errorMessages = {
        title: {
            required: "Title is required.",
            minLength: "Title must be at least 3 characters.",
            maxLength: "Title must be under 100 characters."
        },
        date: {
            required: "Deadline date is required.",
            invalid: "Please select a valid date.",
        },
        description: {
            maxLength: "Description must be under 100 characters.",
        },
        directory: {
            required: "Please select a directory.",
        }
    };

    const onSubmitHandler = (data) => {
        // console.log(data);

        onSubmit(data)
        reset()
        handleClose()

        ///////
    }

    return (


        <Modal show={show} onHide={() => { handleClose(); reset(); }} centered>
            <Modal.Header closeButton>
                <Modal.Title>Add a task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmitHandler)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="e.g. study for the test"
                            {...register("title", {
                                required: true,
                                minLength: 3,
                                maxLength: 100
                            })}
                        />
                        {errors.title && (
                            <Form.Text className="text-danger">
                                {errorMessages.title[errors.title.type]}
                            </Form.Text>
                        )}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            type="date"
                            {...register("date", {
                                required: true
                            })}
                        />
                        {errors.date && (
                            <Form.Text className="text-danger">
                                {errorMessages.date[errors.date.type]}
                            </Form.Text>
                        )}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description (optional)</Form.Label>
                        <Form.Control
                            // as="textarea"
                            rows={2}
                            placeholder="e.g. study for the test"
                            {...register("description", {
                                maxLength: 100
                            })}
                        />
                        {errors.description && (
                            <Form.Text className="text-danger">
                                {errorMessages.description[errors.description.type]}
                            </Form.Text>
                        )}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Select a directory</Form.Label>
                        <Form.Select
                            {...register("directory", {
                                required: true
                            })}
                        >
                            {directories.map((dir) => (
                                <option key={dir.id} value={dir.name}>
                                    {dir.name}
                                </option>
                            ))}
                        </Form.Select>
                        {errors.directory && (
                            <Form.Text className="text-danger">
                                {errorMessages.directory[errors.directory.type]}
                            </Form.Text>
                        )}

                    </Form.Group>

                    <Form.Check
                        type="checkbox"
                        id="important-checkbox"
                        label="Mark as important"
                        // checked={important}
                        // onChange={(e) => setImportant(e.target.checked)}
                        className="mb-2"
                        {...register("important")}
                    />

                    <Form.Check
                        type="checkbox"
                        id="completed-checkbox"
                        label="Mark as completed"
                        // checked={completed}
                        // onChange={(e) => setCompleted(e.target.checked)}
                        className="mb-2"
                        {...register("completed")}
                    />



                    <Button
                        type='submit'
                        style={{ backgroundColor: "#7e3af2", border: "none" }}
                    >
                        Add a task
                    </Button>


                </Form>
            </Modal.Body>
        </Modal>
    );
}

