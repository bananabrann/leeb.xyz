import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Logo from "../Logo/Logo";
import Separator from "../Separator/Separator";
import "./Home.scss";

const Home: React.FC<any> = () => {
  return (
    <div className="Home page">
      <Header />

      <div className="content-wrap">
        <Logo />

        <p>
          I'm a web developer with a few years of experience in software
          engineering and systems development, primarily in the United States'
          public sector. I also occasionally freelance. I'm passionate about
          technology, and its application to the people it effects.
        </p>

        <br />

        {/* prettier-ignore */}
        <Link to="./res/resume.pdf" target="_">
          <i className="far fa-file" /> Resume
        </Link>
        {/* prettier-ignore */}
        <Link to="./res/msazuredevassociate.pdf" target="_">
          <i className="far fa-file" /> Microsoft Certified Azure Developer Associate (AZ-204)
        </Link>
        {/* prettier-ignore */}
        <Link to="./res/itil4foundation.pdf" target="_">
          <i className="far fa-file" /> ITIL 4 Foundation in IT Service Management
        </Link>

        <Separator />

        <div className="bottom row">
          <p>plbrannan95@gmail.com</p>
          <span className="social-media">
            <a
              href="https://www.github.com/bananabrann"
              target="_blank"
            >
              <p>GitHub</p>
            </a>
            <a
              href="https://www.linkedin.com/in/pbrann/"
              target="_blank"
            >
              <p>LinkedIn</p>
            </a>
            <a
              href="https://stackoverflow.com/users/story/11057120"
              target="_blank"
            >
              <p>Stack Overflow</p>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
