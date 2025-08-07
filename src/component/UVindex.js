import React from "react";

const UVindex = ({ className, style }) => {
  return (
    <div className={`uvindex ${className || ""}`} style={style}>
      <div className="uvindexbox">
        <svg viewBox="0 0 100 100">
          <circle className="outer" cx="50" cy="50" r="28"></circle>
          <circle className="inner" cx="50" cy="50" r="18"></circle>
        </svg>
      </div>
    </div>
  );
};

export default UVindex;
