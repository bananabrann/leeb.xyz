import React from "react";
import { useEffect } from "react";
import Logo from "../Logo/Logo";
import NavItem from "./NavItem/NavItem";
import "./Header.scss";

const Header: React.FC<any> = () => {
    return (
        <div className="Header">
            <div className="header-content">
                <div className="badge">
                    <Logo />
                    <p className="subtitle">Software Engineer</p>
                </div>

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
