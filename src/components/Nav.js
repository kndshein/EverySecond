import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Nav = ({ content, topic, handlePrev, handleNext }) => {
  console.log("topic", topic);

  return (
    <div className="nav-bar-container">
      <MdKeyboardArrowLeft
        size={50}
        className={`arrow-left ${topic.previous === -1 ? "none" : ""}`}
        onClick={() => handlePrev()}
      />
      <div className="logo-container">
        <div className="logo">Every Second</div>
        <div className="divider"></div>{" "}
        <div className="logo-tagline">{content?.title}</div>
      </div>
      <MdKeyboardArrowRight
        size={50}
        className={`arrow-right ${topic.next === -1 ? "none" : ""}`}
        onClick={() => handleNext()}
      />
    </div>
  );
};

export default Nav;
