import React,{useState} from 'react'

function UI() {
        let day=1;
        const [toDos,setToDos]=useState([]);
        const [toDo,setToDo]=useState('');
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Day {day} </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder=" Add item..." />
        <i onClick={()=>setToDos([...toDos,{id: Date.now() ,text:toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        { 

              toDos.map((list)=>{

             
        return(
        <div className="todo">
          <div className="left">
            <input type="checkbox" name="" id="" />
            <p>{list.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
        )
         })
        }
      </div>
    </div>
  )
}

export default UI
