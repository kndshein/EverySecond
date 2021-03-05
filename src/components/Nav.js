import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Nav = (props) => {
  return (
    <div className="nav-bar-container">
      <MdKeyboardArrowLeft size={40} />
      <div className="logo">Every Second | Suicide Prevention</div>
      <MdKeyboardArrowRight size={40} />
    </div>
  );
};

export default Nav;
