import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Home.scss";

const Home: React.FC<any> = () => {
    return (
        <div className="Home">
            <Header />

            <div className="content">
                <div>
                    <p>
                        My name is <span className="my-name">Lee</span>. I'm a
                        software developer, former U.S. Marine, and an aquarium
                        lover. My favorite quote is from Wee Man, "'till the
                        wheels fall off."
                    </p>
                    <p>
                        The majority of my career has been as a contractor
                        successfully building enterprise web applications using
                        a wide variety of coding languages and tools. I'm a
                        certified Microsoft Azure developer with experience
                        building and deploying multiple applications both in a
                        team and solo.
                    </p>
                </div>

                <div>
                    <a href="./itil4foundation.pdf" target="_blank">
                        <p>ITIL 4 Foundation in IT Service Management</p>
                    </a>
                    <a href="./msazuredevassociate.pdf" target="_blank">
                        <p>Microsoft Certified Azure Developer Associate</p>
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
