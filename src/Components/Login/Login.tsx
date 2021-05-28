import React, { useEffect } from "react";
import "./Login.scss";

const Login: React.FC<any> = (props: any) => {
    useEffect(() => {
        const pamEle = document.getElementById("pam-logo");
        const infoEle = document.getElementById("info-block");

        pamEle!.classList.add("displayed");

        setTimeout(() => {
            pamEle!.classList.add("red");
            pamEle!.children[1].classList.add("hide");

            infoEle!.classList.remove("hide");
            infoEle!.classList.add("displayed");
        }, 2000);
    }, []);

    return (
        <div className="Login">
            <div id="pam-logo">
                <i className="fas fa-cubes fa-7x"></i>
                <h2>P.A.M.</h2>
            </div>

            <div id="info-block" className="hide">
                <div className="input-container">
                    <input type="text" />
                    <input type="password" />
                </div>
            </div>
        </div>
    );
};

export default Login;
