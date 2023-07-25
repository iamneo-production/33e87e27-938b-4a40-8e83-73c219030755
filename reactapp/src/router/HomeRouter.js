import React from "react";
import "../App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects.jsx";
import MyTasks from "../Pages/MyTasks.js";
import Reports from "../Pages/Reports.js";
import Logindetails from "../components/profile/Logindetails";
import Chat from "../Pages/Chat.js";
import Logout from "../Pages/Logout.js";
import EditProject from "../components/ProjectComponents/EditProject";
import ViewProject from "../components/ProjectComponents/ViewProject";
// import GraphRender from "../components/chart1/GraphRender";


function HomeRoute() {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/mytasks" element={<MyTasks />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/profile" element={<Logindetails />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/logout" element={<Logout />} />
        <Route exact path="/editproject/:projectId" element={<EditProject />} />
        <Route exact path="/viewproject/:projectId" element={<ViewProject />} />
        {/* <Route path="/GraphRender" element={<GraphRender />} /> */}
      </Routes>
    </div>
  );
}

export default HomeRoute;
