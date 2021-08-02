import React from "react";
import "./ServiceItem.scss";

interface IServiceItemProps {
  icon: string;
  title: string;
  body: string;
  hoverColor?: string;
}

const ServiceItem: React.FC<any> = (props: IServiceItemProps) => {
  const faTag: string = `${props.icon} fa-2x`;

  return (
    <div className="ServiceItem">
      <i className={faTag}></i>
      <div className="right">
        <p className="serviceitem-title">{props.title}</p>
        <p className="serviceitem-body">{props.body}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
