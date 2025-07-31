import React from "react";
import Thunder from "./Thunder";
import Cloud from "./Cloud";

const Thundercloud = () => {
  return (
    <div className="thundercloudbox">
      <Thunder className="thunder-in-cloud" />
      <Cloud className="cloud-in-thunder" />
    </div>
  );
};

export default Thundercloud;
