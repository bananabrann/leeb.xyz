import React, { useEffect, useState } from "react";

import "./Home.scss";

const Home: React.FC<any> = (props: any) => {
    const [isUnderscoreVisible, setIsUnderscoreVisible] = useState<Boolean>();

    useEffect(() => {
        const underscore: HTMLElement | null = document.getElementById("underscore");

        setInterval(function() {
            underscore!.style.opacity = (underscore!.style.opacity == '0' ? '1' : '0');
        }, 1000);
    
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
                    <p>
                        Hi there, I'm <span className="my-name">Lee</span>. I'm
                        a software developer, former U.S. Marine, and an
                        aquarium lover. My favorite quote is from Wee Man,
                        "'till the wheels fall off."
                    </p>
                    <p>
                        The majority of my career has been as a contractor
                        successfully building enterprise web applications using
                        a wide variety of coding languages and tools.
                    </p>
                </div>

                <div>
                    <p>Resume</p>
                    <p>ITIL 4 Foundation in IT Service Management</p>
                    <p>Microsoft Certified Azure Developer Associate</p>

                    <p>Connect with me on...</p>
                    <div className="logo-row">
                        <i className="fab fa-github"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-stack-overflow"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
