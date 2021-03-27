import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Home.scss";

const Home: React.FC<any> = () => {
    useEffect(() => {
        /*
            TODO --
            Refactor to remove the underscore freaking out on page resizing. Use state and effects.
        */
        const blinkSpeed: number = 800;
        const underscore: HTMLElement | null = document.getElementById("underscore"); // prettier-ignore

        setInterval(function () {
            underscore!.style.opacity = underscore!.style.opacity == "0" ? "1" : "0"; // prettier-ignore
        }, blinkSpeed);

        // ---
    }, []);

    return (
        <div className="Home">
            <br />

            <h1>
                lee<span id="underscore">_</span>b.<span className="x">x</span>
                <span className="y">y</span>
                <span className="z">z</span>
            </h1>

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
                </div>

                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    a dignissim sapien. Proin convallis tellus et ipsum
                    accumsan, quis malesuada leo efficitur. Phasellus ac lectus
                    nunc. In rutrum sem vitae leo vehicula euismod. Sed pharetra
                    lorem dolor. In dictum risus molestie eros malesuada
                    suscipit. Nam quis neque nec magna elementum molestie.
                    Nullam posuere diam dictum est lacinia, at viverra diam
                    varius. Integer ac molestie sem. Fusce pretium porta tortor,
                    sit amet sagittis metus tempus id. Etiam volutpat, orci
                    vitae faucibus lacinia, tellus velit pulvinar leo, eget
                    luctus eros est a magna. Sed ac auctor dui. Quisque placerat
                    convallis ligula, vitae feugiat mauris facilisis eget.
                    Praesent nec tortor ac lorem pharetra molestie ut ac enim.
                    Quisque accumsan massa at lacus feugiat congue. Phasellus
                    nisi magna, maximus non dui ac, porta placerat odio. Fusce
                    ac ornare diam. Donec ac augue at metus mattis fringilla a
                    non augue. Proin vitae arcu diam. Ut hendrerit at elit nec
                    blandit. Proin elementum, metus at consequat viverra, erat
                    metus mattis sem, sollicitudin ultrices nulla risus vel
                    erat. Nulla ac ante sed nibh gravida ultrices.
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
