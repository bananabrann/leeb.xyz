import React from "react";
import "./Login.scss";

const Login: React.FC<any> = (props: any) => {
    return(
        <div className="Login">
            <div className="input-container">
                <i className="fas fa-3x fa-lock"></i>
                <input type="text" />
                <input type="password" />
            </div>
        </div>
    )
}

export default Login;
