import React from "react";
import { useEffect } from "react";
import Logo from "../Logo/Logo";
import NavItem from "./NavItem/NavItem";
import "./Header.scss";

const Header: React.FC<any> = () => {
    return (
        <div className="Header">
            <div className="header-content">
                <Logo />

                <NavItem
                    destination="/about"
                    label="About Me"
                    isDisabled={false}
                    navItemIdentifier="navitem-about"
                />

                <NavItem 
                    destination="/freelance"
                    label="Freelance Services"
                    isDisabled={false}
                    navItemIdentifier="navitem-freelance"
                />
            </div>
        </div>
    );
};

export default Header;
