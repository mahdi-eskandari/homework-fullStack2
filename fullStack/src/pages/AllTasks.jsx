import React from 'react'
import { Form, FormControl, Button, Container } from 'react-bootstrap'
import Card from '../components/Card'

import { useSelector, useDispatch } from 'react-redux'
import { useOutletContext } from 'react-router-dom'


export default function AllTasks() {
    let data = useSelector(state => state.tasks.tasks)


    const { filter, searchTerm } = useOutletContext()
    console.log(filter);
    let filteredTasks = [...data]


    // if (searchTerm) {
    //     filteredTasks = filteredTasks.filter(task =>
    //         task.title.toLowerCase().includes(searchTerm.toLowerCase())
    //     );
    // }

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
        <div className='bg-light mt-5 d-flex gap-3 con-card'>
            {filteredTasks.map((card, index) => {
                const deadlineDate = new Date(card.deadline)
                return <Card key={index} data={card} date={deadlineDate} id={card._id} isFirst={index === 0} />
            })}

        </div>
    )
}
