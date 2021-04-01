import React from "react";
import "./ServiceItem.scss";

interface IServiceItemProps {
    content: string;
    hoverColor: string;
}

const ServiceItem: React.FC<any> = (props: IServiceItemProps) => {

    return(
        <div className="ServiceItem">
            <p>{props.content}</p>
            <i className="fas fa-chevron-right"></i>
        </div>
    )
}

export default ServiceItem;
