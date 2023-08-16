import React from 'react'
import '../css/button.css'

const Buttons= () => { 
  return (
    <div class="dropdown">
    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Add tasks
    </a>
  
    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <a class="dropdown-item" href="#">Add task name</a>
      <a class="dropdown-item" href="#">Add date and time</a>
      <a class="dropdown-item" href="#"></a>
    </div>
  </div>
   
  )
}

export default Buttons



