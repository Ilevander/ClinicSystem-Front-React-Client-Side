import React from 'react';
import { Link } from 'react-router-dom';

const SidebarDoctor = () => {
  const sidebarStyle = {
    zIndex: 1000,
    position: 'fixed',
    left: '0',
    width: '250px',
    height: '100%',
    overflowY: 'auto',
    background: '#37474F',
    transition: 'all 0.5s ease',
  };

  const headerStyle = {
    backgroundColor: '#263238',
    fontSize: '20px',
    lineHeight: '52px',
    textAlign: 'center',
  };

  const navItemStyle = {
    background: 'none',
    borderBottom: '1px solid #455A64',
    color: '#CFD8DC',
    fontSize: '14px',
    padding: '16px 24px',
  };

  const navItemIconStyle = {
    marginRight: '16px',
  };

  return (
    <div id="sidebar" style={sidebarStyle}>
      <header style={headerStyle}>
        <Link to="/homeDoctor">Doctor Dashboard</Link>
      </header><br />
      <ul className="nav">
        <li>
          <Link to="/appointments" style={navItemStyle}>
            <i className="zmdi zmdi-view-dashboard" style={navItemIconStyle}></i> View Appointments
          </Link>
        </li>
        <li>
          <Link to="/clinics" style={navItemStyle}>
            <i className="zmdi zmdi-link" style={navItemIconStyle}></i> Check Clinic Management
          </Link>
        </li>
        <li>
          <Link to="/fees" style={navItemStyle}>
            <i className="zmdi zmdi-widgets" style={navItemIconStyle}></i> Update Fees
          </Link>
        </li>
        <li>
          <Link to="/schedules" style={navItemStyle}>
            <i className="zmdi zmdi-widgets" style={navItemIconStyle}></i> Verify availability
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarDoctor;
