
import React from 'react'
import { Link } from 'react-router-dom'
import './Board.css'


export default function Board(){
  return(
    <div>
      <nav className="ml-56 navbar navbar-expand-lg navbar bg-primary" data-bs-theme="dark">
        <div className="  container-fluid">
          <a className="navbar-brand" href="#">
             MY TASKS
          </a>
          <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>

          <Link className="btn btn-danger" to="/addtask">UPDATE STATUS</Link>
        </div>
      </nav>
    </div>
  )
}
