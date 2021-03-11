import React from "react";

const Scrollbar = (props) => {
  return (
    <div className={`scroll-tag ${props.visible ? "disable" : ""}`}>
      <div className="text">Scroll</div>
      <div className="bar"></div>
    </div>
  );
};

export default Scrollbar;
