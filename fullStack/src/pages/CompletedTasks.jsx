import React from 'react'
import { Form, FormControl, Button, Container } from 'react-bootstrap'
import Card from '../components/Card'

import { useSelector, useDispatch } from 'react-redux'
import { useOutletContext } from 'react-router-dom'


export default function CompletedTasks() {
    let data = useSelector(state => state.tasks.tasks)
    let completedTasks = data.filter(task => task.completed);
    let { filter, searchTerm } = useOutletContext();


    if (searchTerm) {
        completedTasks = completedTasks.filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()))
    }


    if (filter === "completed-first") {
        completedTasks.sort((a, b) => b.completed - a.completed);
    }
    else if (filter === "order-added") {
        completedTasks.sort((a, b) => a.originalIndex - b.originalIndex);
    } else if (filter === "uncompleted-first") {
        completedTasks.sort((a, b) => a.completed - b.completed);
    } else if (filter === "earlier-first") {
        completedTasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    } else if (filter === "later-first") {
        completedTasks.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
    }




    return (
        <div className='bg-light mt-5 d-flex gap-3 con-card'>
            {completedTasks.map((card, index) => {

                if (card.completed) {
                    const deadlineDate = new Date(card.deadline)
                    return <Card key={index} data={card} date={deadlineDate} id={card._id} isFirst={index === 0} />
                }


            })}

        </div>
    )
}
