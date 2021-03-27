import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav: React.FC<any> = (props: any) => { 
    return (
        <div className="Navbar">
            <div className="nav">
                <p>About Me</p>
                <p>Freelance Services</p>
            </div>
        </div>
    );
};

export default Nav;
