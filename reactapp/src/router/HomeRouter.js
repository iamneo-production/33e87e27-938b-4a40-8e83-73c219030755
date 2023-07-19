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
import ChartsRender from "../components/chart1/ChartsRender";

function HomeRoute() {
  return (
    <div>
      
       <Sidebar/>
        <Routes> 
          <Route path="/" element={<Home />} />      
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/mytasks" element={<MyTasks />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/profile" element={<Logindetails />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/listprojects" element={<ListProjects />} />
          <Route path="/ChartsRender" element={<ChartsRender />} />
        </Routes>
       
    
    </div>
  );
}

export default HomeRoute;