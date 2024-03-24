import React,{useState} from 'react';
import UI from './UI';
import './App.css';


function App() {
 const [state,setState]=useState(false);

const check=()=>{
  setState(!state);
}

  return (
    <div>
       {state && <UI/>}
      
      <h1 onClick={check}>I am a button</h1>
    </div>
  )
}

export default App
