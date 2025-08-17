import React from "react";
import Moon from "./Moon";
import Rain from "./Rain";

const Moonrain = ({ className, style }) => {
  return (
    <div className={`moonrain ${className || ""}`} style={style}>
      <div className="moonrainbox">
        <Moon className="moon-in-moonrain" />
        <Rain className="rain-in-moonrain" />
      </div>
    </div>
  );
};

export default Moonrain;
