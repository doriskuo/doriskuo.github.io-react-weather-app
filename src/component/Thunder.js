import React from "react";

const Thunder = ({ className, style }) => {
  return (
    <div className={`thunder ${className || ""}`} style={style}>
      <div className="thunderbox">
        <svg viewbox="0 0 100 100">
          <polyline
            className="thunderlight"
            points="50,25 38,50 50,50 35,75 60,43 45,45 50,25"
          ></polyline>
        </svg>
      </div>
    </div>
  );
};

export default Thunder;
