import React from "react";

const SlideTwo = (props) => {
  return (
    <div className="slides">
      <div
        className="slide-two-container"
        ref={props.ref}
        style={{ backgroundColor: props.visible ? "#23cebd" : "#efefef" }}
      >
        <div className="tagline">
          1.4 million adults in the United States attempted suicide in 2019
        </div>
        <div className="tagline-2">that's 4 attempts every 1000 adults</div>
      </div>
    </div>
  );
};

export default SlideTwo;
