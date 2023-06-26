import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { FaBars, FaHome, FaProjectDiagram, FaUser, FaComment, FaSignOutAlt } from 'react-icons/fa';
import "./Sidebar.css"
const Sidebar = ({ setActiveSection }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="dashboard">
          <FaBars className="menu-icon" />
          <span>Dashboard</span>
        </div>
      </div>
      <Nav vertical>
        <NavItem>
          <NavLink onClick={() => setActiveSection('home')}>
            <FaHome className="sidebar-icon" />
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => setActiveSection('projects')}>
            <FaProjectDiagram className="sidebar-icon" />
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => window.location.href = 'http://localhost:3000/profile'}>
            <FaUser className="sidebar-icon" />
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => setActiveSection('chat')}>
            <FaBars className="sidebar-icon" />
            My tasks
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => setActiveSection('chat')}>
            <FaComment className="sidebar-icon" />
            Chat
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => setActiveSection('logout')}>
            <FaSignOutAlt className="sidebar-icon" />
            Logout
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Sidebar;
