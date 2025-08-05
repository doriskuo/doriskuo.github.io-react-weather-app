import React from "react";

const Sun = ({ className, style }) => {
  return (
    <div className={`sun ${className || ""}`} style={style}>
      <div className="sunbox">
        <svg viewBox="0 0 100 100">
          <circle className="suncircle" cx="50" cy="30" r="18"></circle>
        </svg>
      </div>
    </div>
  );
};

export default Sun;
