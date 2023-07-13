import React from 'react';
import './App.css';
import './components/Sidebar/Sidebar.css';
import Login from './components/login';
import SignUp from './components/signup';
import ForgotPassword from './components/forgotpassword';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './Pages/Home.js';
import Projects from './Pages/Projects.js';
import MyTasks from './Pages/MyTasks.js';
import Reports from './Pages/Reports.js';
import Profile from './Pages/Profile';
import Chat from './Pages/Chat.js';
import Logout from './Pages/Logout.js';
import ListProjects from './components/pages/listProjects';
import ChartsRender from './components/chart1/ChartsRender';


function App() {
  return (
    <div>
      <Router>
      <Sidebar>
      <ToastContainer/>
        <Routes> 
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/listprojects" element={<ListProjects />} />
<<<<<<< HEAD
          <Route path="/" element={<Home />  } />
          <Route path="/home" element={ <Home />} />
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/mytasks" element={<MyTasks />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/logout" element={<Logout />} />

=======
          <Route path="/ChartsRender" element={<ChartsRender />} />
>>>>>>> 57d3d108ab00c5ad0595bbcf6189e016f965d20e
        </Routes>
        </Sidebar>
      </Router>
    </div>
  );
}

export default App;
