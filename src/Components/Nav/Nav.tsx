import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav: React.FC<any> = (props: any) => {
    return (
        <div className="Navbar">
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

export default Nav;
