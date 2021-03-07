import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Nav = (props) => {
  return (
    <div className="nav-bar-container">
      <MdKeyboardArrowLeft size={50} />
      <div className="logo-container">
        <div className="logo">Every Second</div>
        <div className="divider"></div>{" "}
        <div className="logo-tagline">Suicide Prevention</div>
      </div>
      <MdKeyboardArrowRight size={50} />
    </div>
  );
};

export default Nav;
