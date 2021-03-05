import React from "react";
import "./App.css";

import Nav from "./components/Nav";
import SlideOne from "./components/SlideOne";
// import SlideTwo from "./components/SlideTwo";

function useOnScreen(options) {
  const [ref, setRef] = React.useState(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [setRef, visible];
}

function App() {
  const [setRef, visible] = useOnScreen({ threshold: 0.9 });

  return (
    <div className="App">
      <Nav />
      <SlideOne />
      <div className="slides">
        <div
          className="slide-two-container"
          ref={setRef}
          style={{ backgroundColor: visible ? "#23cebd" : "#efefef" }}
        >
          <div className="tagline">
            1.4 million adults in the United States attempted suicide in 2019
          </div>
          <div className="tagline-2">that's 4 attempts every 1000 adults</div>
        </div>
      </div>
    </div>
  );
}

export default App;
