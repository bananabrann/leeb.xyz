import React, { useState} from "react";
import "./Header.scss";

const Header: React.FC<any> = (props: any) => {
    const [isLoginShown, setIsLoginShown] = useState<Boolean>(false);

    return(
        <div className="Header">
            <i className="fas fa-2x fa-sign-in-alt signin"></i>
        </div>
    )
}

export default Header;
