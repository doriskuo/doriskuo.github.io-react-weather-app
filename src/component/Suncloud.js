import React from "react";
import Cloud from "./Cloud";

const Suncloud = ({ className, style }) => {
  return (
    <div className={`suncloud ${className || ""}`} style={style}>
      <div className="suncloudbox">
        <svg viewBox="0 0 100 100">
          <circle className="suncloudcircle" cx="40" cy="35" r="20"></circle>
        </svg>
        <Cloud className="cloud-in-sun" />
      </div>
    </div>
  );
};

export default Suncloud;
