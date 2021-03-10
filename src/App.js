import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/App.css";

import Nav from "./components/Nav";
import SlideOne from "./components/SlideOne";
import SlideTwo from "./components/SlideTwo";
import SlideThree from "./components/SlideThree";
import SlideFour from "./components/SlideFour";
import Scrollbar from "./components/ScrollBar";
import SeedData from "./SeedData.json";

function App() {
  const [content, setContent] = React.useState(null);

  React.useEffect(() => {
    setContent(SeedData[0]);
  }, []);

  return (
    <div className="App">
      <Nav content={content} />
      <div className="slides-container">
        <SlideOne content={content} />
        <SlideTwo content={content} />
        <SlideThree content={content} />
        <SlideFour content={content} />
      </div>
      <Scrollbar />
    </div>
  );
}

export default App;
