import React from "react";
import Thunder from "./Thunder";
import Rain from "./Rain";

const Thunderrain = () => {
  return (
    <div className="thunderrainbox">
      <Rain className="rain-in-thunder" />
      <Thunder className="thunder-in-rain" />
    </div>
  );
};

export default Thunderrain;
