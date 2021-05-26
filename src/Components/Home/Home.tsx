import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Home.scss";

const Home: React.FC<any> = (props: any) => {
    useEffect(() => {
        const blinkSpeed: number = 800;
        const underscore: HTMLElement | null =
            document.getElementById("underscore");

        setInterval(function () {
            // prettier-ignore
            underscore!.style.opacity = underscore!.style.opacity === "0" ? "1" : "0";
        }, blinkSpeed);
    }, []);

    function handleMouseHoverEffect(element: any, letter: string) {
        element.classList.add(`hovered-over-${letter}`);
    }

    return (
        <div className="Home">
            <Header />

            <div className="content">
                <h1>
                    lee<span id="underscore">_</span>b.
                    {/* prettier-ignore */}
                    <span className="x" onMouseOver={(e) => handleMouseHoverEffect(e.target, "x")}>x</span>
                    {/* prettier-ignore */}
                    <span className="y" onMouseOver={(e) => handleMouseHoverEffect(e.target, "y")}>y</span>
                    {/* prettier-ignore */}
                    <span className="z" onMouseOver={(e) => handleMouseHoverEffect(e.target, "z")}>z</span>
                </h1>

                <div className="section links">
                    <div id="social-media">
                        {/* prettier-ignore */}
                        <a href="https://www.linkedin.com/in/pbrann/" target="_blank" rel="noreferrer">
                            <i className="fab fa-2x fa-linkedin"></i>
                        </a>
                        {/* prettier-ignore */}
                        <a href="https://github.com/bananabrann" target="_blank" rel="noreferrer">
                            <i className="fab fa-2x fa-github"></i>
                        </a>
                        {/* prettier-ignore */}
                        <a href="https://stackoverflow.com/users/11057120/bananabrann" target="_blank" rel="noreferrer">
                            <i className="fab fa-2x fa-stack-overflow"></i>
                        </a>
                    </div>
                    <line />
                    <div id="professional-links">
                        <a href="./resume.pdf" target="_blank">
                            <p>Resume</p>
                        </a>
                        <a href="./itil4foundation.pdf" target="_blank">
                            <p>ITIL 4 Foundation in IT Service Management</p>
                        </a>
                        <a href="./msazuredevassociate.pdf" target="_blank">
                            <p>Microsoft Certified Azure Developer Associate</p>
                        </a>
                    </div>
                </div>

                <br />
                <br />
            </div>
        </div>
    );
};

export default Home;
