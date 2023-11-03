import React from 'react'

function MyButton() {

  function handleClick(){
    alert ("you clicked me!");
  }
  return (
    
    <button onClick={handleClick}>MyButton</button>
  )
} 

export default MyButton