import React from 'react'
import LOGO from '../LOGO.png'
import './Sidebar.css';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <div className="logo">
            <img src={LOGO} alt="Logo" />
            <p>Bulkpe</p>
        </div>
        <nav className="nav">
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/dashboard" activeClassName="active" exact>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contacts" activeClassName="active">
              Contacts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/payout" activeClassName="active">
              Payout
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/payout" activeClassName="active">
              Transaction
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/payout" activeClassName="active">
              Report
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/payout" activeClassName="active">
              Verification
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/payout" activeClassName="active">
              Settings
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/logout" activeClassName="active">
              Log Out
            </NavLink>
          </li>
        </ul>
      </nav>
            
    </div>
  )
}

export default Sidebar;