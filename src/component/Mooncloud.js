import React from "react";
import Moon from "./Moon";
import Cloud from "./Cloud";

const Mooncloud = ({ className, style }) => {
  return (
    <div className={`mooncloud ${className || ""}`} style={style}>
      <div className="mooncloudbox">
        <Moon className="moon-in-mooncloud" />
        <Cloud className="cloud-in-mooncloud" />
      </div>
    </div>
  );
};

export default Mooncloud;
