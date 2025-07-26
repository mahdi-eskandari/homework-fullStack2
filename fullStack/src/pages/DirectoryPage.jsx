// pages/DirectoryPage.jsx
import { useOutletContext, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../components/Card";

export default function DirectoryPage() {
    const { dirName } = useParams(); // مثلا "Main" یا "Secondary"
    const tasks = useSelector(state => state.tasks.tasks);
    let { filter, searchTerm } = useOutletContext()

    let filteredTasks = tasks.filter(task =>
        task.directory &&
        task.directory.toLowerCase() === dirName.toLowerCase()
    );


    if (searchTerm) {
        filteredTasks = filteredTasks.filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()))
    }




    if (filter === "completed-first") {
        filteredTasks.sort((a, b) => b.completed - a.completed);
    }
    else if (filter === "order-added") {
        filteredTasks.sort((a, b) => a.originalIndex - b.originalIndex);
    } else if (filter === "uncompleted-first") {
        filteredTasks.sort((a, b) => a.completed - b.completed);
    } else if (filter === "earlier-first") {
        filteredTasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    } else if (filter === "later-first") {
        filteredTasks.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
    }


    return (
        <div className="mt-5 d-flex gap-3 con-card">
            {/* <h5>{dirName} Tasks ({filteredTasks.length})</h5> */}
            {filteredTasks.length === 0 ? (
                <p>No tasks in this directory.</p>
            ) : (
                filteredTasks.map((task, index) => (
                    <Card key={index} data={task} id={task._id} date={new Date(task.deadline)} isFirst={index === 0} />
                ))
            )}
        </div>
    );
}
