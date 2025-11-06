import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <>
      <div className="header">
        <nav className="nav-menu">
        <ul className="nav-list">
          <li className="nav-item">
            <Link className="nav-link" to="/">HR Application</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About HR App</Link> 
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/addemployee">Add New Employee</Link> 
          </li>
          {/* Add more navigation links here */}
        </ul>
        </nav>
      </div>
      </>
    )
};

export default Header;