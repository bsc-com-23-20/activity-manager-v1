import React from 'react'
import "../css/navbar.css"

export function Navbar() {
  return (
    <nav className="nav">
    <div className="navtitle"> Activity Manager</div>
    <a href="/" className="navname">
    <ul>
      <li>
        <a href ="/signup">Signup</a>
        </li>
        <li>
        <a href ="/taskmanager">TaskManager</a>
        </li>
        <li>
        <a href ="/notifications">Notifications</a>
      </li>
    </ul>
    
    </a>
      
    </nav>
  )
}


