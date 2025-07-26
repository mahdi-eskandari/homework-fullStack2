// import { Button, Col, Form, Row } from "react-bootstrap"

// function Navber() {
//     const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 768);


//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth >= 768) {
//                 setShowSidebar(true);
//             } else {
//                 setShowSidebar(false);
//             }
//         };
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     const handleNavClick = (path) => {
//         navigate(path);
//         if (window.innerWidth < 768) setShowSidebar(false);
//     };

//     return (
//         <>
//             {/* ✅ Navbar موبایل */}
//             <Navbar bg="light" className="d-md-none px-3 py-2" fixed="top">
//                 <Container fluid className="d-flex align-items-center justify-content-between">
//                     {/* همبرگر */}
//                     <img
//                         src="/assets/menu.svg"
//                         alt="menu"
//                         style={{ width: "24px", cursor: "pointer" }}
//                         onClick={() => setShowSidebar(true)}
//                     />

//                     {/* جستجو */}
//                     <Form className="flex-grow-1 mx-3">
//                         <FormControl
//                             type="search"
//                             placeholder="Search task"
//                             aria-label="Search"
//                         />
//                     </Form>

//                     {/* دکمه */}
//                     <Button size="sm">Add Task</Button>
//                 </Container>
//                 <p className="ms-3 mt-2 mb-0 text-muted">2024, Oct 18</p>
//             </Navbar>

//             {/* ✅ Navbar دسکتاپ */}
//             <Navbar
//                 bg="light"
//                 className="d-none d-md-flex px-4 py-2"
//                 fixed="top"
//                 style={{ left: "250px", zIndex: 1030 }}
//             >
//                 <Container fluid className="d-flex justify-content-between align-items-center">
//                     <Form className="d-flex align-items-center w-100 gap-3">
//                         <FormControl
//                             type="search"
//                             placeholder="Search task"
//                             className="searchBox"
//                             style={{ maxWidth: "400px" }}
//                         />
//                         <p className="m-0">2024, Oct 18</p>
//                         <Button>Add New Task</Button>
//                     </Form>
//                 </Container>
//             </Navbar>
//         </>
//     );
// }

// export default Navber;