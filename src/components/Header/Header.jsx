import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginDialog from "../Login/LoginDialog";
import "./Header.css";

const Header = () => {
  const [Open, setOpen] = useState(false);

  return (
    <>
    <header className="header">
      <div className="website-name">INDOplacements</div>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <Link to="/about" className="main-nav-link">
              <p>About Us</p>
            </Link>
          </li>
          <li>
            <Link to="/company" className="main-nav-link">
              <p>Company</p>
            </Link>
          </li>
          <li>
            <Link to="/education" className="main-nav-link">
              <p>Education</p>
            </Link>
          </li>
          <li>
            <Link to="/internships" className="main-nav-link">
              <p>Internships</p>
            </Link>
          </li>
          <li>
            <Link to="/vacancies" className="main-nav-link">
              <p>Current Vacancies</p>
            </Link>
          </li>
          <li>
            <div
              className="main-nav-link"
              style={{ color: "#ff7e0e", fontWeight: "bold",cursor:'pointer' }}
              onClick={() => {
                setOpen(true);
              }}
            >
              Login
            </div>
          </li>
          <li>
            <Link to="/" className="btn">
              <p>Join Us</p>
            </Link>
          </li>
        </ul>
      </nav>
      
    </header>
    <LoginDialog Open={Open} setOpen={setOpen} />
    </>
  ); 
};

export default Header;
