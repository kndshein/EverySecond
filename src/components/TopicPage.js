import React from "react";
import { useParams } from "react-router-dom";

import SeedData from "../SeedData.json";

import Nav from "./Nav";
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";
import SlideThree from "./SlideThree";
import SlideFour from "./SlideFour";
import Scrollbar from "./ScrollBar";

const TopicPage = ({ match }) => {
  const params = useParams();

  const [isLoading, setIsLoading] = React.useState(true);
  const [content, setContent] = React.useState(null);
  const [topic, setTopic] = React.useState({ previous: 0, next: 0 });

  const handlePrev = () => {
    window.location.assign(`/topic/${topic.previous}`);
  };

  const handleNext = () => {
    window.location.assign(`/topic/${topic.next}`);
  };

  React.useEffect(() => {
    setContent(SeedData[params.topicId]);
    setIsLoading(false);

    const navArrow = () => {
      let prev = 0;
      let next = 0;

      if (parseInt(params.topicId) === SeedData.length - 1) {
        prev = parseInt(params.topicId) - 1;
        next = -1;
      } else {
        prev = parseInt(params.topicId) - 1;
        next = parseInt(params.topicId) + 1;
      }
      setTopic({ previous: prev, next: next });
    };

    navArrow();
  }, []);

  return (
    <>
      {!isLoading && (
        <>
          <Nav
            content={content}
            topic={topic}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
          <div className="slides-container">
            <SlideOne content={content} />
            <SlideTwo content={content} />
            <SlideThree content={content} />
            <SlideFour content={content} />
          </div>
          <Scrollbar />
        </>
      )}
    </>
  );
};

export default TopicPage;
