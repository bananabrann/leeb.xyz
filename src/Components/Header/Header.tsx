import React from "react";
import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import NavItem from "./NavItem/NavItem";
import "./Header.scss";

const Header: React.FC<any> = () => {
  useEffect(() => {
    document.onscroll = () => handleNavStickyEffect();
  }, []);

  function handleNavStickyEffect() {
    const navbar: HTMLElement | null = document.getElementById("nav-slider"); //prettier-ignore
    let sticky: number = navbar ? navbar.offsetTop : NaN;

    if (navbar) {
      if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
        console.log("Yes");
      } else {
        navbar.classList.remove("sticky");
        console.log("No");
      }
    }
  }

  return (
    <div className="Header">
      <div className="header-content">
        <div className="badge">
          <Logo />
          <p className="subtitle">Web Development & Software Engineering</p>
        </div>

        <NavItem
          destination="/about"
          label="About Me"
          isDisabled={false}
          navItemIdentifier="navitem-about"
        />
        {/* 
                
                <NavItem
                destination="/freelance"
                label="Freelance Services"
                isDisabled={false}
                navItemIdentifier="navitem-freelance"
                />
                
            */}
      </div>

      <i className="fas fa-bars fa-3x" id="nav-slider"></i>
    </div>
  );
};

export default Header;
