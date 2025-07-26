// import { useState } from "react"
// import { useDispatch } from "react-redux"
// import toggleCompleted, { toggleImportant } from "../store/taskSlice"


// export default function Card({ data, date, id }) {
//     const dispatch = useDispatch()

//     const [isFavorite, setIsFavorite] = useState(false)
//     const [isCompleted, setIsCompleted] = useState(data.completed)


//     function handleImportant() {
//         dispatch(toggleImportant(data._id))
//     }
//     function handleComplete() {
//         dispatch(toggleCompleted(data._id))
//     }



//     return (
//         <div className="card">
//             <h5 className="title-card">{data.title}</h5>
//             <p className="description-card">{data.description}</p>

//             <div className="d-flex align-items-center gap-2">
//                 <img className="dateSvg" src="/assets/date.svg" alt="date" />
//                 <p className="m-0 p-date-card">{date.toLocaleDateString('en-GB')}</p>
//             </div>

//             <div className="border-card mt-2 mb-3"></div>

//             <div className="d-flex justify-content-between">

//                 {/* {data.completed ? <span className="complete" style={{ backgroundColor: "rgba(96, 221, 159, 0.75)" }}>completed</span> : <span className="complete" style={{ backgroundColor: "rgba(230, 157, 48, 0.75)" }}>uncompleted</span>} */}
//                 <span
//                     className="complete"
//                     style={{
//                         backgroundColor: isCompleted
//                             ? "rgba(96, 221, 159, 0.75)"
//                             : "rgba(230, 157, 48, 0.75)",
//                         cursor: "pointer",
//                     }}
//                     onClick={handleComplete}
//                 >
//                     {isCompleted ? "completed" : "uncompleted"}
//                 </span>

//                 <div className="d-flex gap-1 align-items-center">

//                     {/* <img className="star-img" src="/assets/star-line.svg" alt="star" /> */}

//                     <i onClick={handleImportant} className={`bi star-icon ${isFavorite ? 'bi-star-fill' : 'bi-star'}`} ></i>

//                     <img className="trash-img" src="/assets/trash.svg" alt="trash" />
//                     <img className="options-img" src="/assets/options.svg" alt="options" />
//                 </div>

//             </div>


//         </div >

//     )
// }

















import { useDispatch, useSelector } from "react-redux"
import { toggleImportant, toggleCompleted, deleteTask, editTask } from "../store/taskSlice"
import DeleteTaskModal from "./DeleteTaskModal"
import EditTaskModal from "./EditTaskModal"

import { useState } from "react"

export default function Card({ data, date, id, isFirst }) {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks.tasks)


    function handleImportant() {
        dispatch(toggleImportant(data._id))
    }
    function handleComplete() {
        dispatch(toggleCompleted(data._id))
    }


    const [showDeleteModal, setShowDeleteModal] = useState(false)
    function handleDeleteTask() {
        dispatch(deleteTask(id))
        setShowDeleteModal(false)
    }


    const [showEditModal, setShowEditModal] = useState(false)
    function handleEditTask(updateData) {
        console.log({ id, ...updateData });

        dispatch(editTask({ id, ...updateData }))
        setShowEditModal(false)
    }


    return (
        <div className={`card ${isFirst ? 'first' : ''}`}>
            <h5 className="title-card">{data.title}</h5>
            <p className="description-card">{data.description}</p>

            <div className="d-flex align-items-center gap-2">
                <img className="dateSvg" src="/assets/date.svg" alt="date" />
                <p className="m-0 p-date-card">{date.toLocaleDateString('en-GB')}</p>
            </div>

            <div className="border-card mt-2 mb-3"></div>

            <div className="d-flex justify-content-between">

                <span
                    className="complete"
                    style={{
                        backgroundColor: data.completed
                            ? "rgba(96, 221, 159, 0.75)"
                            : "rgba(240, 158, 36, 0.67)",
                        color: data.completed
                            ? "rgba(15, 88, 52, 0.75)"
                            : "rgba(105, 69, 15, 1)",

                        cursor: "pointer"
                    }}
                    onClick={handleComplete}
                >
                    {data.completed ? "completed" : "uncompleted"}
                </span>

                <div className="d-flex gap-1 align-items-center">
                    <i
                        onClick={handleImportant}
                        // className={`bi star-icon ${data.important ? 'bi-star-fill' : 'bi-star'}`}
                        className={`bi star-icon ${data.important ? "bi bi-star-fill text-danger" : 'bi-star'}`}
                        style={{ cursor: "pointer" }}
                    // bi bi-star-fill text-warning
                    ></i>

                    {/* <img className="trash-img" src="/assets/trash.svg" alt="trash" />
                    <img className="options-img" src="/assets/options.svg" alt="options" /> */}

                    <i onClick={() => setShowDeleteModal(true)} className="bi bi-trash trash-img"></i>

                    <i onClick={() => setShowEditModal(true)} className="bi bi-three-dots-vertical options-img"></i>



                </div>
            </div>


            <span className="directories-span">{data.directory}</span>


            <DeleteTaskModal
                show={showDeleteModal}
                handleClose={() => setShowDeleteModal(false)}
                onConfirm={handleDeleteTask}
            // onSubmit={handleDeleteTask}
            />

            <EditTaskModal
                show={showEditModal}
                handleClose={() => setShowEditModal(false)}
                onSubmit={handleEditTask}
                tasks={data}
            />


        </div >
    )
}