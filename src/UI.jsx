import React , {useState} from 'react'
import {v4 as uuidv4} from 'uuid';
import Todo from './Todo';
uuidv4();

function UI() {
   const [value,setValue]=useState("")
   const handleSubmit = e => {
     e.preventDefault();
     addTodo(value);
     setValue("")
   }

   const [todos,setTodos]=useState([])
   const addTodo = todo=>{
    setTodos([...todos,{id: uuidv4(), task: todo, complete: false, isEditing: false}])
    console.log(todos)
   }
   const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  const deleteTodo = id =>{
    setTodos(todos.filter(todo => todo.id !==id))
  }



  return (
    <div>
          <div className='TodoWrapper'>
            <h1>Get Things Done!</h1>
            <form className='TodoForm' onSubmit={handleSubmit}>
            <input value={value} className='todo-input' type='text' placeholder='What is the task today?' onChange={(e)=> setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Add Task</button>
            </form>
            {
              todos.map((todo, index)=>(
                <Todo key={todo.id} task={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
              ))
            }
          </div>
    </div>
  )
}

export default UI;

