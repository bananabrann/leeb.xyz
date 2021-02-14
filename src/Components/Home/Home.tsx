import React, { useEffect, useState } from "react";

import "./Home.scss";

const Home: React.FC<any> = (props: any) => {
    const [isUnderscoreVisible, setIsUnderscoreVisible] = useState<Boolean>();

    useEffect(() => {
        const blinkSpeed: number = 800;
        const underscore: HTMLElement | null = document.getElementById(
            "underscore"
        );

        setInterval(function () {
            underscore!.style.opacity =
                underscore!.style.opacity == "0" ? "1" : "0";
        }, blinkSpeed);
    }, []);

    return (
        <div className="Home">
            <h1>
                lee<span id="underscore">_</span>b.<span className="x">x</span>
                <span className="y">y</span>
                <span className="z">z</span>
            </h1>

            <div className="content">
                <div>
                    <h2>Hi</h2>
                    <p>
                        My name is <span className="my-name">Lee</span>. I'm a software
                        developer, former U.S. Marine, and an aquarium lover. My
                        favorite quote is from Wee Man, "'till the wheels fall
                        off."
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
                        <i className="fab fa-3x fa-github"></i>
                        <i className="fab fa-3x fa-linkedin"></i>
                        <i className="fab fa-3x fa-stack-overflow"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
