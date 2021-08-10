import React from "react";
import "./Footer.scss";

const Footer: React.FC<any> = () => {
  return (
    <div id="footer">
      <div className="main-footer-content">
        <div className="left">
          <p>Lee Brannan</p>
          <p className="email">plbrannan95@gmail.com</p>
          <p>Washington, D.C.</p>

          <div className="logo-row">
            <a
              href="https://www.linkedin.com/in/pbrann/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-2x fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/bananabrann"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-2x fa-github"></i>
            </a>
            <a
              href="https://stackoverflow.com/users/11057120/bananabrann"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-2x fa-stack-overflow"></i>
            </a>
          </div>

          <div className="legal">
            <p>leeb.xyz MIT license.</p>
          </div>
        </div>

        <div className="right">
          <div className="footer-nav">
            <p>Home</p>
            <p>About Me</p>
            <p>Freelance Services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
