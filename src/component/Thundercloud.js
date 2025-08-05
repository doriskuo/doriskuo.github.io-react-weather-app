import React from "react";
import Thunder from "./Thunder";
import Cloud from "./Cloud";

const Thundercloud = ({ className, style }) => {
  return (
    <div className={`thundercloud ${className || ""}`} style={style}>
      <div className="thundercloudbox">
        <Thunder className="thunder-in-cloud" />
        <Cloud className="cloud-in-thunder" />
      </div>
    </div>
  );
};

export default Thundercloud;
