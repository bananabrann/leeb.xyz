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
        <Separator />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
