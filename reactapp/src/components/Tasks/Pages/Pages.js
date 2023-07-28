import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './Pages.css'
export default function Pages() {

  const [tasks,setTasks]=useState([])
 
  
  const {id}=useParams();

  useEffect(()=>{
    loadUsers();
  },[]);

  const loadUsers=async()=>{
    const result=await axios.get("http://localhost:8080/mapmytasks/mytasks")//GET METHOD URL CREATE NEW TASK STATUS
    setTasks(result.data)
  }

  const deleteTask=async(id)=>{
    await axios.delete(`http://localhost:8080/mapmytasks/task/${id}`)
    loadUsers()
  }

  return (
    <div className='ml-56 Container'>
        <div className='py-4'>
        <table class="table table-striped border shadow">
  <thead>
    <tr>
      <th scope="col">S.NO</th>
      <th scope="col">TASK NAME</th>
      <th scope="col">TASK ID</th>
      <th scope="col">PROJECT NAME</th>
      <th scope="col">STATUS</th>
      <th scope="col">PROGRESS(%)</th>
      <th scope="col">DUE DATE</th>
      <th scope="col">NOTES</th>
      <th></th>
      <th></th>
      <th scope="col">ACTIONS</th>
      
      <td>
      </td>
    </tr>
  </thead>
  <tbody>
    {
      tasks.map((task,index)=>(
         <tr>
          <th scope="row" key={index}>{index+1}</th>
          
          <td>{task.taskname}</td>
          <td>{task.taskid}</td>
          <td>{task.projectname}</td>
          <td>{task.status}</td>
          <td>{task.percentagecompleted}</td>
          <td>{task.date}</td>
          <td>{task.notes}</td>
          <td></td>
          <td></td>
          
          <Link className='btn btn-outline-primary mx-4 my-4'
          to={`/viewtask/${task.id}`}>View</Link>
         
          <Link className='btn btn-primary mx-4 my-4'
          to={`/edittask/${task.id}`}
          >Edit</Link>

          <button className='btn btn-primary mx-4 my-4'
          onClick={()=>deleteTask(task.id)}
          >Delete</button>
         
          </tr>

      ))
    }
    
  </tbody>
</table>
        </div>
        </div>
  )
}
