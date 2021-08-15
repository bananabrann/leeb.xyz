import React from "react";
import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Separator from "../Separator/Separator";
import "./Header.scss";

// prettier-ignore
interface IHeaderProps {
}

const Header: React.FC<any> = (props: IHeaderProps) => {
  const [isNavDisplayed, setIsNavDisplayed] = useState<boolean>(false);

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

  function handleNavHamburgerClick(newValue?: boolean): void {
    console.log("click");

    if (newValue) {
      setIsNavDisplayed(newValue);
    } else {
      setIsNavDisplayed(!isNavDisplayed);
    }
  }

  const navArea: unknown = (
    <div className="nav-area">
      <div className="section">
        <div className="left">
          <i className="fas fa-user"></i>
        </div>
        <div className="right">
          <p>Resume</p>
          <p>About Me</p>
        </div>
      </div>
      <Separator />

      <div className="section">
        <div className="left">
          <i className="fas fa-terminal"></i>
        </div>
        <div className="right">
          <p>Services</p>
          <p>Contact</p>
        </div>
      </div>
      <Separator />


      <div className="section">
        <div className="left">
          <i className="fas fa-cubes"></i>
        </div>
        <div className="right">
          <p>Login</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="Header">
      <div className="header-second-angle"></div>
      <div className="header-content">
        <div className="badge">
          <Logo />
          <p className="subtitle">Web Development & Software Engineering</p>
        </div>

        <div className="right-side-dock">
          <i
            className="fas fa-bars fa-3x hamburger"
            onClick={() => handleNavHamburgerClick()}
          />
        </div>
      </div>

      {isNavDisplayed ? navArea : null}
    </div>
  );
};

export default Header;
