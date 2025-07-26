import React, { useEffect } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';


export default function EditTaskModal({ tasks, onSubmit, show, handleClose }) {

    const dispatch = useDispatch();
    const directories = useSelector(state => state.tasks.directories)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({

    })

    //کمک از هوش مصنوعی👇
    useEffect(() => {
        if (tasks && show) {
            reset({
                title: tasks.title || "",
                deadline: tasks.deadline ? new Date(tasks.deadline).toISOString().split('T')[0] : "",
                description: tasks.description || "",
                directory: tasks.directory || (directories.length ? directories[0] : ""), // مقدار پیش‌فرض
                important: tasks.important || false,
                completed: tasks.completed || false
            });
        }
    }, [tasks, show, reset, directories]);

    const errorMessages = {
        title: {
            required: "Title is required.",
            minLength: "Title must be at least 3 characters.",
            maxLength: "Title must be under 100 characters."
        },
        deadline: {
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


    function onSubmitHandler(data) {
        onSubmit(data)
        reset()
        handleClose()
        console.log(data);
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
                            {...register("deadline", {
                                required: true
                            })}
                        />
                        {errors.date && (
                            <Form.Text className="text-danger">
                                {errorMessages.deadline[errors.deadline.type]}
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
                            {directories.map((dir, index) => (
                                <option key={index} value={dir.name}>
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


    )
}
