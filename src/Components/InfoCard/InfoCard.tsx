import React from "react";
import Separator from "../Separator/Separator";
import "./InfoCard.scss";

interface IInfoCardProps {
    icon: string;
    title: string;
    body?: string;
}

const InfoCard: React.FC<any> = (props: IInfoCardProps) => {
    const fontAwesomeCallString: string = `${props.icon} fa-3x`;

    return (
        <div className="InfoCard">
            <div className="info-card-icon">
                <i className={fontAwesomeCallString}></i>
            </div>

            <div className="info-card-body">
                <div className="title">{props.title}</div>
                <Separator />
                <p>{props.body}</p>
            </div>
        </div>
    );
};

export default InfoCard;
