import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
    Navbar,
    Container,
    Form,
    FormControl,
    Button,
    Offcanvas,
    Nav,
    Dropdown,
} from "react-bootstrap";
import AddDirectoryModal from "../components/AddDirectoryModal";
import { useDispatch } from "react-redux";
import { addDirectories, addTask, deleteDirectory } from "../store/taskSlice";
import { useSelector } from "react-redux";
import AddTaskModal from "../components/AddTaskModal";
import { v4 as uuidv4 } from 'uuid';
import EditDirectoryModal from "../components/ٍEditDirectoryModal";
import { editDirectory } from "../store/taskSlice";

function Auth() {
    const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 768);
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const uuid = uuidv4()


    const StyleActive = ({ isActive }) => {
        return isActive
            ? {
                backgroundColor: "rgba(236, 230, 230, 0.89)", // بک‌گراند قرمز کم‌رنگ
                color: "rgba(233, 65, 65, 0.89)",
            }
            : undefined;
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setShowSidebar(true);
            } else {
                setShowSidebar(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleNavClick = (path) => {
        navigate(path);
        if (window.innerWidth < 768) setShowSidebar(false);
    };

    const isActive = (path) =>
        location.pathname === path
            ? {
                backgroundColor: "rgba(233, 65, 65, 0.1)",
                color: "rgba(233, 65, 65, 0.89)",
            }
            : undefined;






    const [showD, setShowD] = useState(false);
    const [showT, setShowT] = useState(false);

    // const [editDir, setEditDir] = useState(null);
    // const [showEdit, setShowEdit] = useState(false);

    const data = useSelector(state => state.tasks)

    const handleAddDirectory = (newDirectory) => {
        dispatch(addDirectories(newDirectory))

    };




    const [showEdit, setShowEdit] = useState(false);
    const [selectedDir, setSelectedDir] = useState(null);

    const handleEditDirectory = (dir) => {
        setSelectedDir(dir);
        setShowEdit(true);
    };

    const handleSubmitEdit = (updatedDir) => {
        const fullData = {
            ...updatedDir,
            oldName: selectedDir.name // مقدار قبلی قبل از تغییر
        };

        dispatch(editDirectory(fullData));
    };



    const [showDeleteDir, setShowDeleteDir] = useState(false);

    function handleDeleteDir(item) {
        setShowDeleteDir(true)
        dispatch(deleteDirectory({ id: item.id, dirName: item.name }))
    }








    const handleAddTask = (data) => {
        const newTask = {
            _id: uuid,
            title: data.title,
            description: data.description,
            directory: data.directory,
            completed: data.completed,
            important: data.important,
            deadline: new Date(data.date).toISOString(),
        }
        dispatch(addTask(newTask));
    };


    // function handleEditDirectory(data) {
    //     dispatch(editDirectory(data))
    // }





    const [filter, setFilter] = useState('sort-by')


    const [searchTerm, setSearchTem] = useState('')




    return (
        <>
            {/* ✅ Navbar موبایل */}
            <Navbar className="d-md-none px-3 py-2" fixed="top">
                <Container fluid className="d-flex align-items-center justify-content-between">
                    {/* همبرگر */}
                    <img
                        src="/assets/menu.svg"
                        alt="menu"
                        style={{ width: "24px", cursor: "pointer" }}
                        onClick={() => setShowSidebar(true)}
                    />

                    {/* جستجو */}
                    <div className="title-none">
                        <p className=" h5-none">TO-DO-LIST</p>
                        <p className="p-none">2024, Oct 18</p>
                    </div>
                    <Form className="flex-grow-1 mx-3">
                        <FormControl
                            type="search"
                            placeholder="Search task"
                            aria-label="Search"
                            className="search-form"
                            onChange={(e) => setSearchTem(e.target.value)}
                            value={searchTerm}
                        />
                    </Form>

                    {/* دکمه */}
                    <Button onClick={() => setShowT(true)} className="button-add" style={{ width: "100px" }}>Add Task</Button>
                </Container>
            </Navbar>


            {/* ✅ Navbar دسکتاپ */}
            <Navbar

                className="d-none d-md-flex px-4 py-2"
                fixed="top"
                style={{ left: "250px", zIndex: 1030 }}
            >
                <div className="d-flex justify-content-between align-items-center con-card nav-desk">
                    <div>

                        <Form className="d-flex align-items-center w-100 gap-3 con-searchBox">
                            <FormControl
                                type="search"
                                placeholder="Search task"
                                className="searchBox"
                                style={{ maxWidth: "450px" }}
                                onChange={(e) => setSearchTem(e.target.value)}
                                value={searchTerm}
                            />
                        </Form>
                    </div>
                    <div>
                        <p style={{ fontSize: "13px", color: "gray" }} className="m-0">2024, Oct 18</p>
                    </div>
                    <div>
                        <Button onClick={() => setShowT(true)} className="btn-nav">Add New Task</Button>
                    </div>
                </div>
            </Navbar>


            {/* ✅ Sidebar دسکتاپ */}
            <div
                className="d-none d-md-flex flex-column"
                style={{
                    width: "250px",
                    height: "100vh",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    backgroundColor: "#f8f9fa",
                    // paddingTop: "56px",
                    borderRight: "1px solid #ddd",
                    zIndex: 1020,
                }}
            >
                <div className="w-100 d-flex flex-column align-items-center">
                    <h5 className="mt-5">TO-DO LIST</h5>
                    <Button type="button" onClick={() => setShowT(true)} className="btn mt-4">Add new task</Button>
                </div>

                <div className="mt-4 d-flex flex-column gap-1 sidebar">
                    <NavLink
                        to="all-tasks"
                        style={StyleActive}
                        className="nav-link ps-3 p-2 navlink"
                    >
                        All tasks
                    </NavLink>
                    <NavLink
                        to="important-tasks"
                        style={StyleActive}
                        className="nav-link ps-3 p-2 navlink"
                    >
                        Important tasks
                    </NavLink>
                    <NavLink
                        to="completed-tasks"
                        style={StyleActive}
                        className="nav-link ps-3 p-2 navlink"
                    >
                        Completed tasks
                    </NavLink>
                    <NavLink
                        to="uncompleted-tasks"
                        style={StyleActive}
                        className="nav-link ps-3 p-2 navlink"
                    >
                        Uncompleted tasks
                    </NavLink>

                    {/* 🔄 Dropdown با استایل فعال مشابه */}
                    <Dropdown className="drop-directory">
                        <Dropdown.Toggle
                            className="custom-dropdown-toggle ms-1 d-flex justify-content-between align-items-center"
                            variant="primary"
                            id="dropdown-basic"
                        >
                            Directories
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ border: "none", boxShadow: "none" }} className="w-100">


                            {data.directories.map((item, index) => {
                                // console.log(item)
                                return <Dropdown.Item
                                    key={index}
                                    className="navlink dropdown-item"
                                    onClick={(e) => {
                                        navigate(`/auth/directory/${item.name}`);
                                        e.preventDefault();
                                        e.stopPropagation();
                                    }
                                    }


                                >
                                    {item.name}

                                    {item.name !== 'Main' && (
                                        <span className="dropdown-actions">

                                            <i
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleEditDirectory(item);
                                                }}
                                                className="bi bi-pencil"></i>


                                            <i
                                                onClick={() => handleDeleteDir(item)}
                                                className="bi bi-trash trash-img"></i>

                                        </span>
                                    )}

                                </Dropdown.Item>
                            })}




                            <button type="button" onClick={() => setShowD(true)} className="ms-3 mt-2" style={{ border: "1px dashed gray", borderRadius: "5px", fontSize: "13px", padding: "5px 15px" }}>+ New</button>
                        </Dropdown.Menu>
                    </Dropdown>
                    <AddDirectoryModal
                        show={showD}
                        handleClose={() => setShowD(false)}
                        onSubmit={handleAddDirectory}
                    />
                    <AddTaskModal
                        show={showT}
                        handleClose={() => setShowT(false)}
                        onSubmit={handleAddTask}
                    />
                    <EditDirectoryModal
                        show={showEdit}
                        handleClose={() => setShowEdit(false)}
                        onSubmit={handleSubmitEdit}
                        defaultValue={selectedDir}
                    />
                </div>


            </div>

            {/* ✅ Sidebar موبایل (Offcanvas) */}
            <Offcanvas
                show={showSidebar && window.innerWidth < 768}
                onHide={() => setShowSidebar(false)}
                placement="start"
                style={{ width: "70vw", maxWidth: "250px" }}
            >
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Button onClick={() => setShowT(true)} className="btn">Add new task</Button>
                    <Nav className="mt-4 d-flex flex-column gap-1 sidebar">
                        <NavLink
                            to="all-tasks"
                            style={StyleActive}
                            className="ps-3 p-2 navlink"
                        >
                            All tasks
                        </NavLink>
                        <NavLink
                            to="important-tasks"
                            style={StyleActive}
                            className="ps-3 p-2 navlink"
                        >
                            Important tasks
                        </NavLink>
                        <NavLink
                            to="completed-tasks"
                            style={StyleActive}
                            className="ps-3 p-2 navlink"
                        >
                            Completed tasks
                        </NavLink>
                        <NavLink
                            to="uncompleted-tasks"
                            style={StyleActive}
                            className="ps-3 p-2 navlink"
                        >
                            Uncompleted tasks
                        </NavLink>
                    </Nav>


                    <Dropdown>
                        <Dropdown.Toggle
                            // className="custom-dropdown-toggle ms-1"
                            className="custom-dropdown-toggle ms-1 d-flex justify-content-between align-items-center"
                            variant="primary"
                            id="dropdown-basic"
                        >
                            Directories
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ border: "none", boxShadow: "none" }} className="w-100">


                            {data.directories.map((item, index) => {
                                return <Dropdown.Item
                                    key={index}
                                    className="navlink dropdown-item"
                                    onClick={(e) => {
                                        navigate(`/auth/directory/${item.name}`);
                                        e.preventDefault();
                                        e.stopPropagation();
                                    }
                                    }


                                >
                                    {item.name}

                                    {item.name !== 'Main' && (
                                        <span className="dropdown-actions">

                                            <i
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleEditDirectory(item);
                                                }}
                                                className="bi bi-pencil"></i>
                                            <i className="bi bi-trash trash-img"></i>

                                        </span>
                                    )}

                                </Dropdown.Item>
                            })}




                            <button onClick={() => setShowD(true)} className="ms-3 mt-2" style={{ border: "1px dashed gray", borderRadius: "5px", fontSize: "13px", padding: "5px 15px" }}>+ New</button>
                        </Dropdown.Menu>
                    </Dropdown>
                    <AddDirectoryModal
                        show={showD}
                        handleClose={() => setShowD(false)}
                        onSubmit={handleAddDirectory}
                    />
                </Offcanvas.Body>
            </Offcanvas>

            {/* ✅ محتوا */}


            <div
                style={{
                    marginTop: "56px",
                    marginLeft: window.innerWidth >= 768 ? "250px" : "0",
                    padding: "1rem",
                }}
            >
                <div className="con-info d-flex flex-column p-2 ">
                    <h5 style={{ fontWeight: "600" }}>Important tasks (2 tasks)</h5>

                    <div className="d-flex justify-content-between con-card mt-4">
                        <div>
                            <img className="svg" src="/assets/view-1.svg" alt="view 1" />
                            <img className="svg" src="/assets/view-2.svg" alt="view 2" />
                        </div>

                        <select

                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="mySelect p-2"
                        >
                            <option value="sort-by">Sort by</option>
                            <option value="order-added">Order added</option>
                            <option value="earlier-first">Earlier first</option>
                            <option value="later-first">Later first</option>
                            <option value="completed-first">Completed first</option>
                            <option value="uncompleted-first">Uncompleted first</option>
                        </select>
                    </div>

                    <Outlet context={{ filter, searchTerm }} />
                </div>
            </div>


        </>
    );
}

export default Auth;

