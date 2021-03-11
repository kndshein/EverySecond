import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";

import HomePage from "./components/Homepage";
import TopicPage from "./components/TopicPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/topic/:topicId" component={TopicPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
