import React from "react";

const Moon = ({ className, style }) => {
  return (
    <div className={`moon ${className || ""}`} style={style}>
      <div className="moonbox">
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Moon;
