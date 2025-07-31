import React from "react";
import Cloud from "./Cloud";

const Rain = ({ className, style }) => {
  return (
    <div className={`rain ${className || ""}`} style={style}>
      <div className="rainbox">
        <Cloud />
        <div className="rain rain1"></div>
        <div className="rain rain2"></div>
        <div className="rain rain3"></div>
      </div>
    </div>
  );
};

export default Rain;
