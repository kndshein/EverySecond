import React from "react";
import "./App.css";

import Nav from "./components/Nav";
import SlideOne from "./components/SlideOne";
import Slide from "./components/Slide";

function App() {
  const [content, setContent] = React.useState(null);

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
        <Slide />
        <Slide />
        <Slide />
        <Slide />
      </div>
    </div>
  );
}

export default App;
