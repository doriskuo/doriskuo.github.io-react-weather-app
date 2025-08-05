import React from "react";
import Sun from "./Sun";
import Thunderrain from "./Thunderrain";

const Thundersun = ({ className, style }) => {
  return (
    <div className={`thundersun ${className || ""}`} style={style}>
      <div className="thundersunbox">
        <Sun className="sun-in-thundersun" />
        <Thunderrain className="thunderrain-in-thundersun"></Thunderrain>
      </div>
    </div>
  );
};

export default Thundersun;
