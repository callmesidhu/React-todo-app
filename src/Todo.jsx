import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Todo({task,toggleComplete}) {
  return (
    <div className="Todo">
      <p onClick={()=> toggleComplete(task.id)} className={`${task.completed ? `completed`:""}`}>{task.task}</p>
      <div>
         <FontAwesomeIcon icon={faPenToSquare} />
         <FontAwesomeIcon  icon={faTrash} />
      </div>
    </div>
  )
}

export default Todo
