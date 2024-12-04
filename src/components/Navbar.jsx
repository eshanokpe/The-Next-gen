import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  navbar-custom" style={{ background:'#251A44'}}>
      <div className="container"  >
        <Link className="navbar-brand" to="/">
          <img src="./src/assets/images/logo2x.png" alt="Bootstrap" width="115" height="43" />
        </Link>
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        <div  className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul  className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li> 
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/faq">FAQ's</Link>
            </li>
          </ul>
          <Link className="btn btn-outline-secondary btn-custom" to="/join">
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
