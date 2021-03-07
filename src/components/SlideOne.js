import React from "react";
import { MdPersonPinCircle } from "react-icons/md";

const SlideOne = (props) => {
  return (
    <div className="slides">
      <div className="slide-one-container">
        <div className="taglines-container">
          <div className="tagline">every 2.6 seconds,</div>
          <div className="tagline-2">
            somebody in the US is having thoughts of suicide
          </div>
        </div>
        <div className="animation">
          <MdPersonPinCircle size={50} />
        </div>
        <div className="background-image">
          <img src="https://images.unsplash.com/photo-1615027138404-06f31c35ae1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
        </div>
      </div>
    </div>
  );
};

export default SlideOne;
