import React ,{useEffect} from 'react'

function UI() {
         useEffect(()=>{
          console.log("mounting")
         })
  return (
    <div>
           <h1>I am a counter </h1>
    </div>
  )
}

export default UI
