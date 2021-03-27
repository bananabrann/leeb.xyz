import { Link } from "react-router-dom";
import "./Header.scss";

const Header: React.FC<any> = (props: any) => {
    return (
        <div className="Header">
            <Link to="/login">
                <i className="fas fa-2x fa-sign-in-alt signin"></i>
            </Link>
        </div>
    );
};

export default Header;
