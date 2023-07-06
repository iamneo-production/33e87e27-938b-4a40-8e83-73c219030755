import React from 'react';
import './App.css';
import './components/Sidebar/Sidebar.css';
import Login from './components/login';
import SignUp from './components/signup';
import ForgotPassword from './components/forgotpassword';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListProjects from './pages/listProjects';


function App() {
  return (
    <div>
      <Router>
      <ToastContainer/>
        <Routes> 
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/listprojects" element={<ListProjects />} />
          <Route path="/" element={<Home />  } />
          <Route path="/home" element={ <Home />} />
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/mytasks" element={<MyTasks />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/logout" element={<Logout />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
