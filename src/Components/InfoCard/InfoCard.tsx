import React from "react";
import { Link } from "react-router-dom";
import Separator from "../Separator/Separator";
import "./InfoCard.scss";

interface IInfoCardProps {
    icon: string;
    title: string;
    body?: string;
    downloadDestination?: string;
}

const InfoCard: React.FC<any> = (props: IInfoCardProps) => {
    const fontAwesomeCallString: string = `${props.icon} fa-3x`;

    return (
        <div className="InfoCard">
            <div className="info-card-icon">
                <i className={fontAwesomeCallString}></i>
            </div>

            <div className="info-card-body">
                <div className="info-card-upper">
                    <div className="title">{props.title}</div>

                    {props.downloadDestination ? (
                        <a
                            href={props.downloadDestination}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="far fa-eye fa-2x"></i>
                        </a>
                    ) : (
                        <div />
                    )}
                </div>

                <Separator />

                <p>{props.body}</p>
            </div>
        </div>
    );
};

export default InfoCard;
