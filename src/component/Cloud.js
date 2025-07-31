import Cloudt from "react";

const Cloud = ({ className, style }) => {
  return (
    <div className={`cloud ${className || ""}`} style={style}>
      <div className="cloudbox">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
      </div>
    </div>
  );
};

export default Cloud;
