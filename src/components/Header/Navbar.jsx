import React from 'react';
import '../Header/animate.css'; // Replace with the actual path to your animate.css file
import '../Header/style.css'


const Navbar = () => {
  return (
    <section className="ftco-section">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5"></div>
        </div>
      </div>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light fixed-top animated fadeInDown" id="ftco-navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="index.html">
              Clinic Management
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars"></span> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="#" className="nav-link stretched-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link stretched-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link stretched-link">
                    Blog
                  </a>
                </li>
                <li className="nav-item dropdown position-static">
                  <a
                    className="nav-link dropdown-toggle stretched-link"
                    href="#"
                    id="dropdown04"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Page
                  </a>
                  <div className="dropdown-menu p-4" aria-labelledby="dropdown04">
                    <div className="row">
                      <div className="col-md-3">
                        <a className="dropdown-item" href="#">
                          Page 1
                        </a>
                        <a className="dropdown-item" href="#">
                          Page 2
                        </a>
                        <a className="dropdown-item" href="#">
                          Page 3
                        </a>
                        <a className="dropdown-item" href="#">
                          Page 4
                        </a>
                      </div>
                      {/* ... (rest of the dropdown content) ... */}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
