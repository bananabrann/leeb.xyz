import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav: React.FC<any> = () => {
  return (
    <div className="Navbar">
      <div className="nav">
        <Link to="/about" className="nav-about">
          <p>About Me</p>
        </Link>

        <Link to="/freelance" className="nav-freelance">
          <p>Freelance Services</p>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
