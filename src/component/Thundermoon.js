import React from "react";
import Moon from "./Moon";
import Thunderrain from "./Thunderrain";

const Thundermoon = ({ className, style }) => {
  return (
    <div className={`thundermoon ${className || ""}`} style={style}>
      <div className="thundermoonbox">
        <Moon className="moon-in-thundermoon" />
        <Thunderrain className="thunder-in-thundermoon" />
      </div>
    </div>
  );
};

export default Thundermoon;
