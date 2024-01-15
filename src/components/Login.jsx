import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/login.css';

const Login = ({ onSidebarLinkClick }) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSidebarLinkClick = () => {
    onSidebarLinkClick();
    history.push('/sidebar');
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://localhost:7171/api/Auth/login', {
        username: email,
        password: password,
      });

      // Handle successful login
      console.log('Login successful', response.data);
    } catch (error) {
      // Handle login error
      console.error('Login error', error);
    }
  };

  return (
    <div>
      <div className="section" style={{ marginTop: '-50px' }}>
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="wow fadeInUp">
                  <span>Log In </span>
                </h6>
                <input type="checkbox" id="reg-log" name="reg-log" />
                <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3 text-light">Log In</h4>
                          <div className="form-group">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autoComplete="off"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autoComplete="off"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button className="btn mt-4 text-light" onClick={handleLogin}>
                            Submit
                          </button>
                          <Link to="/registration" className="btn mt-4 ml-4 text-light">
                            Sign up
                          </Link>
                          <p className="mb-0 mt-4 text-center">
                            <Link to="#0" className="link">
                              Forgot your password?
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
