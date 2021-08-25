import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Separator from "../Separator/Separator";
import "./Header.scss";

// prettier-ignore
interface IHeaderProps {
}

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
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
        <Link to="/">
          <i className="fas fa-home fa-2x"></i>
        </Link>
      </div>
    </div>
  );
};

export default Header;
