import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavItem.scss";

interface INavItemProps {
    navItemIdentifier: string;
    destination: string;
    isDisabled: boolean;
    label: string;
}

const NavItem: React.FC<any> = (props: INavItemProps) => {
    const [isDisabled, setIsDisabled] = useState<boolean>(props.isDisabled);

    useEffect(() => {
        setIsDisabled(false);
    }, [props.isDisabled]);

    const navItemContent = isDisabled ? (
        <div></div>
    ) : (
        <Link to={props.destination}>{props.label}</Link>
    );

    return (
        <div className="NavItem" id={props.navItemIdentifier}>
            {navItemContent}
        </div>
    );
};

export default NavItem;
