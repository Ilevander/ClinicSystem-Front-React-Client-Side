import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Link to="/">
        <Navbar.Brand>
          <i className="fa fa-h-square"></i> Clinic Booking System
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/" className="nav-link smoothScroll">
            Home
          </Link>
          <Link to="/about" className="nav-link smoothScroll">
            About Us
          </Link>
          <Link to="/team" className="nav-link smoothScroll">
            Doctors
          </Link>
          <Link to="#news" className="nav-link smoothScroll">
            News
          </Link>
          <Nav.Link to="/contact" data-toggle="modal" data-target="#contactModal">
          Contact
         </Nav.Link>
          <li className="nav-item appointment-btn">
            <Link
              to="/login"
              className="nav-link make-appointment"
              style={{ transition: 'background-color 0.3s, color 0.3s', color: 'Menu' }}
            >
              Make Appointment
            </Link>
          </li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
