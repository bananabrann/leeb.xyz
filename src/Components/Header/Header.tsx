import { Link } from "react-router-dom";
import "./Header.scss";

const Header: React.FC<any> = (props: any) => {
    return (
        <div className="Header">
            <div className="nav">
                <p>Homepage</p>
                <p>About Me</p>
                <p>For Corporate</p>
                <p>Independent Contracting</p>
            </div>

            {/* 
            <Link to="/login">
                <i className="fas fa-2x fa-sign-in-alt signin"></i>
            </Link>
            */}
        </div>
    );
};

export default Header;
