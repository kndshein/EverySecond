import React from "react";
import "./styles/App.css";

import Nav from "./components/Nav";
import SlideOne from "./components/SlideOne";
import SlideTwo from "./components/SlideTwo";
import Scrollbar from "./components/ScrollBar";
// import SlideThree from "./components/SlideThree";

function App() {
  const [content, setContent] = React.useState(null);
  const [ref1, setRef1] = React.useState(null);

  React.useEffect(() => {
    const seedData = {
      title: "Suicide Prevention",
      SlideOne: {
        second: 2.6,
        icon: "MdPersonPinCircle",
      },
    };
    setContent(seedData);
  }, []);

  return (
    <div className="App">
      <Nav content={content} />
      <div className="slides-container">
        <SlideOne content={content} />
        <SlideTwo ref={ref1} setRef={setRef1} />
        {/* <SlideThree /> */}
        {/* <SlideThree /> */}
        {/* <SlideThree /> */}
      </div>
      <Scrollbar />
    </div>
  );
}

export default App;
