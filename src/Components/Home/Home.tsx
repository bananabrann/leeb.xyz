import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Separator from "../Separator/Separator";
import "./Home.scss";
import BananaSVG from "../../res/banana.svg";

const Home: React.FC<any> = () => {
  return (
    <div className="Home page">
      <Header />

      <div className="content-wrap">
        <p>
          My name is Lee. I'm a web developer with a few years of
          experience in enterprise-level software engineering and systems
          development. I'm passionate about technology, and its application to
          the people it effects.
        </p>

        <h2>Files</h2>
        <Link to="./resume.pdf">Resume</Link>
        <Link to="./msazuredevassociate.pdf">
          Microsoft Certified Azure Developer Associate (AZ-204)
        </Link>
        <Link to="./itil4foundation.pdf">ITIL 4 Foundation in IT Service Management</Link>

        <h2>Contact</h2>
        <p>plbrannan95@gmail.com</p>

        <h2>Misc.</h2>
        <Link to="#" className="disabled">The Banana Hub</Link>

        <Separator />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
