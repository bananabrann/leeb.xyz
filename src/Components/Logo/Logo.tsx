import React from "react";
import { useEffect } from "react";
import "./Logo.scss";

const Logo: React.FC<any> = () => {
  useEffect(() => {
    const blinkSpeed: number = 800;
    const underscore: HTMLElement | null = document.getElementById("underscore"); // prettier-ignore

    setInterval(function () {
      underscore!.style.opacity = underscore!.style.opacity === "0" ? "1" : "0"; // prettier-ignore
    }, blinkSpeed);
  }, []);

  return (
    <div className="Logo">
      lee<span id="underscore">_</span>b.
      <span className="x">x</span>
      <span className="y">y</span>
      <span className="z">z</span>
    </div>
  );
};

export default Logo;
