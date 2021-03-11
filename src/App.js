import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/App.css";

// import Nav from "./components/Nav";
import HomePage from "./components/Homepage";
import TopicPage from "./components/TopicPage";
// import SlideOne from "./components/SlideOne";
// import SlideTwo from "./components/SlideTwo";
// import SlideThree from "./components/SlideThree";
// import SlideFour from "./components/SlideFour";
// import Scrollbar from "./components/ScrollBar";
// import SeedData from "./SeedData.json";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/topic/:topicId" component={TopicPage} />
      </Router>
    </>
  );
}

export default App;
