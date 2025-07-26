// // import { Button, Dropdown, Nav, NavDropdown } from "react-bootstrap"
// // import { NavLink, useLocation } from "react-router-dom"


// // function Sidebar() {

// //     const StyleActive = ({ isActive }) => {
// //         return isActive
// //             ? {
// //                 color: "red",
// //                 backgroundColor: "rgba(236, 230, 230, 0.89)",
// //                 color: "rgba(233, 65, 65, 0.89)"
// //             }
// //             : undefined
// //     }



// //     const handleItemClick = (e) => {
// //         e.preventDefault();
// //         e.stopPropagation();
// //     };


// //     const location = useLocation();

// //     // تابع بررسی فعال بودن مسیر
// //     const isActivePath = (path) => location.pathname === path;



// //     return (
// //         <section style={{ width: "250px" }}>
// //             <div className="w-100 d-flex flex-column align-items-center">
// //                 <h5 className="mt-5">
// //                     TO-DO LIST
// //                 </h5>
// //                 <Button className="btn mt-4">Add new task</Button>
// //             </div>

// //             {/* <Dropdown >
// //                     <Dropdown.Toggle className="custom-dropdown-toggle ms-1">
// //                         Dropdown Button
// //                     </Dropdown.Toggle>

// //                     <Dropdown.Menu style={{ border: "none", boxShadow: "none" }}>
// //                         <Dropdown.Item className="navlink" href="#/action-1" active>
// //                             Action
// //                         </Dropdown.Item>
// //                         <Dropdown.Item className="navlink" href="#/action-2">Another action</Dropdown.Item>
// //                         <Dropdown.Item className="navlink" href="#/action-3">Something else</Dropdown.Item>
// //                     </Dropdown.Menu>
// //                 </Dropdown> */}

// //             <div className="mt-4 d-flex flex-column gap-1 sidebar">
// //                 {/* 🔄 تغییر: مسیرها absolute شده */}
// //                 <NavLink
// //                     to="all-tasks"
// //                     style={StyleActive}
// //                     className="nav-link ps-3 p-2 navlink"
// //                 >
// //                     All tasks
// //                 </NavLink>
// //                 <NavLink
// //                     to="important-tasks"
// //                     style={StyleActive}
// //                     className="nav-link ps-3 p-2 navlink"
// //                 >
// //                     Important tasks
// //                 </NavLink>
// //                 <NavLink
// //                     to="completed-tasks"
// //                     style={StyleActive}
// //                     className="nav-link ps-3 p-2 navlink"
// //                 >
// //                     Completed tasks
// //                 </NavLink>
// //                 <NavLink
// //                     to="uncompleted-tasks"
// //                     style={StyleActive}
// //                     className="nav-link ps-3 p-2 navlink"
// //                 >
// //                     Uncompleted tasks
// //                 </NavLink>

// //                 {/* 🔄 Dropdown اصلاح‌شده */}
// //                 <Dropdown>
// //                     <Dropdown.Toggle
// //                         className="custom-dropdown-toggle ms-1"
// //                         variant="primary"
// //                         id="dropdown-basic"
// //                     >
// //                         Directories
// //                     </Dropdown.Toggle>

// //                     <Dropdown.Menu style={{ border: "none", boxShadow: "none" }}>
// //                         {/* 🔄 حذف preventDefault و استفاده از navigate */}
// //                         <Dropdown.Item
// //                             className="navlink"
// //                             style={
// //                                 location.pathname === "/completed-tasks"
// //                                     ? StyleActive({ isActive: true })
// //                                     : undefined
// //                             }
// //                             onClick={() => navigate("/completed-tasks")}
// //                         >
// //                             Completed Tasks
// //                         </Dropdown.Item>

// //                         <Dropdown.Item
// //                             className="navlink"
// //                             style={
// //                                 location.pathname === "/uncompleted-tasks"
// //                                     ? StyleActive({ isActive: true })
// //                                     : undefined
// //                             }
// //                             onClick={() => navigate("/uncompleted-tasks")}
// //                         >
// //                             Uncompleted Tasks
// //                         </Dropdown.Item>
// //                     </Dropdown.Menu>
// //                 </Dropdown>






// //             </div>

// //         </section >

// //     )
// // }

// // export default Sidebar
















// import { Button, Dropdown } from "react-bootstrap";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";

// function Sidebar() {
//     const navigate = useNavigate();
//     const location = useLocation();

//     const StyleActive = ({ isActive }) => {
//         return isActive
//             ? {
//                 backgroundColor: "rgba(236, 230, 230, 0.89)", // بک‌گراند قرمز کم‌رنگ
//                 color: "rgba(233, 65, 65, 0.89)",
//             }
//             : undefined;
//     };


//     const handleItemClick = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//     };

//     return (
//         <section style={{ width: "250px" }}>
//             <div className="w-100 d-flex flex-column align-items-center">
//                 <h5 className="mt-5">TO-DO LIST</h5>
//                 <Button className="btn mt-4">Add new task</Button>
//             </div>

//             <div className="mt-4 d-flex flex-column gap-1 sidebar">
//                 <NavLink
//                     to="all-tasks"
//                     style={StyleActive}
//                     className="nav-link ps-3 p-2 navlink"
//                 >
//                     All tasks
//                 </NavLink>
//                 <NavLink
//                     to="important-tasks"
//                     style={StyleActive}
//                     className="nav-link ps-3 p-2 navlink"
//                 >
//                     Important tasks
//                 </NavLink>
//                 <NavLink
//                     to="completed-tasks"
//                     style={StyleActive}
//                     className="nav-link ps-3 p-2 navlink"
//                 >
//                     Completed tasks
//                 </NavLink>
//                 <NavLink
//                     to="uncompleted-tasks"
//                     style={StyleActive}
//                     className="nav-link ps-3 p-2 navlink"
//                 >
//                     Uncompleted tasks
//                 </NavLink>

//                 {/* 🔄 Dropdown با استایل فعال مشابه */}
//                 <Dropdown>
//                     <Dropdown.Toggle
//                         className="custom-dropdown-toggle ms-1"
//                         variant="primary"
//                         id="dropdown-basic"
//                     >
//                         Directories
//                     </Dropdown.Toggle>

//                     <Dropdown.Menu style={{ border: "none", boxShadow: "none" }}>
//                         <Dropdown.Item
//                             className="navlink"
//                             style={StyleActive({
//                                 isActive: location.pathname === "/completed-tasks",
//                             })}
//                             onClick={() => {
//                                 navigate("completed-tasks")
//                                 e.preventDefault();
//                                 e.stopPropagation();
//                             }
//                             }


//                         >
//                             Completed Tasks
//                         </Dropdown.Item>

//                         <Dropdown.Item
//                             className="navlink"
//                             style={StyleActive({
//                                 isActive: location.pathname === "/uncompleted-tasks",
//                             })}
//                             onClick={() => {
//                                 navigate("uncompleted-tasks")
//                                 e.preventDefault();
//                                 e.stopPropagation();

//                             }}
//                         >
//                             Uncompleted Tasks
//                         </Dropdown.Item>
//                     </Dropdown.Menu>
//                 </Dropdown>
//             </div>
//         </section>
//     );
// }

// export default Sidebar;
