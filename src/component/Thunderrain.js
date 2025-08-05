import React from "react";
import Thunder from "./Thunder";
import Rain from "./Rain";

const Thunderrain = ({ className, style }) => {
  return (
    <div className={`thunderrain ${className || ""}`} style={style}>
      <div className="thunderrainbox">
        <Rain className="rain-in-thunder" />
        <Thunder className="thunder-in-rain" />
      </div>
    </div>
  );
};

export default Thunderrain;
