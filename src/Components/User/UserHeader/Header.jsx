import React from "react";
import "./Header.css";
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary ">
        <div className="container-fluid">
        
          <b>DMYTHRA</b>
       
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active mx-3" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">
                  Gallery
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">
                  Events
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="logoutBtn">Logout</div>
      </nav>
      
    </div>
  );
}

export default Header;
