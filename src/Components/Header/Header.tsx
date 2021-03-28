import React from "react";
import { useEffect } from "react";
import Logo from "../Logo/Logo";
import "./Header.scss";

const Header: React.FC<any> = () => {

    return (
        <div className="Header">
            <div className="header-content">
                <Logo />
                <p>Hello</p>
            </div>
        </div>
    );
};

export default Header;
