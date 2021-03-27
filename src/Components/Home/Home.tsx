import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Home.scss";

const Home: React.FC<any> = (props: any) => {
    useEffect(() => {
        const blinkSpeed: number = 800;
        const underscore: HTMLElement | null = document.getElementById(
            "underscore"
        );

        setInterval(function () {
            // prettier-ignore
            underscore!.style.opacity = underscore!.style.opacity == "0" ? "1" : "0";
        }, blinkSpeed);
    }, []);

    return (
        <div className="Home">
            <Header />

            <h1>
                lee<span id="underscore">_</span>b.<span className="x">x</span>
                <span className="y">y</span>
                <span className="z">z</span>
            </h1>

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
                        a wide variety of coding languages and tools.
                    </p>
                </div>

                <div>
                    <h2>View my...</h2>
                    <a href="./itil4foundation.pdf" target="_blank">
                        <p>ITIL 4 Foundation in IT Service Management</p>
                    </a>
                    <a href="./msazuredevassociate.pdf" target="_blank">
                        <p>Microsoft Certified Azure Developer Associate</p>
                    </a>

                    <br />

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
                </div>
            </div>
        </div>
    );
};

export default Home;
