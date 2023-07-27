import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "../components/Sidebar/Sidebar";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects.js";
import MyTasks from "../Pages/MyTasks.js";
import Reports from "../Pages/Reports.js";
import Logindetails from '../components/profile/Logindetails';
import Chat from "../Pages/Chat.js";
import Logout from "../Pages/Logout.js";
import ListProjects from "../components/pages/listProjects";
import GraphRender from '../components/chart1/GraphRender';
//import MyTaskApp from '../components/Tasks/MyTaskApp';
import Board from '../components/Tasks/Board/Board';
import Pages from '../components/Tasks/Pages/Pages';
import AddTasks from '../components/Tasks/Tasks/AddTasks';
import EditTasks from '../components/Tasks/Tasks/EditTasks';
import ViewTasks from '../components/Tasks/Tasks/ViewTasks';
function HomeRoute() {
  return (
    <div>
      
       <Sidebar/>
        <Routes> 
          <Route path="/" element={<Home />} />      
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/mytasks" element={<><Board/><Pages/></>}/>
          <Route exact path="/addtask" element={<AddTasks/>}/>
          <Route exact path="/edittask/:id" element={<EditTasks/>}/>
          <Route exact path="/viewtask/:id" element={<ViewTasks/>}/>
          <Route path="/reports" element={<Reports />} />
          <Route path="/profile" element={<Logindetails />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/listprojects" element={<ListProjects />} />
          <Route path="/GraphRender" element={<GraphRender />} />
        </Routes>
       
    
    </div>
  );
}

export default HomeRoute;