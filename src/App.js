import React from "react";
import "./App.css";

import Nav from "./components/Nav";
import SlideOne from "./components/SlideOne";
import SlideTwo from "./components/SlideTwo";

function App() {
  // const [content, setContent] = React.useState({});

  return (
    <div className="App">
      <Nav />
      <div className="slides-container">
        <SlideOne />
        <SlideTwo />
        <SlideTwo />
        <SlideTwo />
        <SlideTwo />
      </div>
    </div>
  );
}

export default App;
