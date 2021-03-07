import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Nav = ({ content }) => {
  return (
    <div className="nav-bar-container">
      <MdKeyboardArrowLeft size={50} />
      <div className="logo-container">
        <div className="logo">Every Second</div>
        <div className="divider"></div>{" "}
        <div className="logo-tagline">{content?.title}</div>
      </div>
      <MdKeyboardArrowRight size={50} />
    </div>
  );
};

export default Nav;
