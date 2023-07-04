import './App.css';
import Login from './components/login';
import SignUp from './components/signup';
import ForgotPassword from './components/forgotpassword';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListProjects from './components/pages/listProjects';


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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
