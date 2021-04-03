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
                <img src={BananaSVG} alt="" id="home-banana" />

                <Separator />

                <div className="selections">
                    <Link to="/freelance">
                        <p className="home-selection-item hover-purple">{">"} See information on freelance services</p>
                    </Link>
                    {/* 
                    <Link to="/labs">
                        <p>{">"} See some projects</p>
                    </Link>
                    */}

                    <Link to="/">
                        <p className="home-selection-item hover-cyan">{">"} View my resume and certificates</p>
                    </Link>

                </div>

                {/* 
                <div>
                    <a href="./itil4foundation.pdf" target="_blank">
                        <p>ITIL 4 Foundation in IT Service Management</p>
                    </a>
                    <a href="./msazuredevassociate.pdf" target="_blank">
                        <p>Microsoft Certified Azure Developer Associate</p>
                    </a>
                </div>
                */}
            </div>

            {/*
            <Footer />
            */}
        </div>
    );
};

export default Home;
