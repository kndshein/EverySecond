import React from "react";
import { Link, useParams } from "react-router-dom";

import SeedData from "../SeedData.json";

const TopicPage = ({ match }) => {
  //   console.log("topicpage", props);

  const params = useParams();

  const [isLoading, setIsLoading] = React.useState(true);
  const [content, setContent] = React.useState(null);

  React.useEffect(() => {
    setContent(SeedData[params.topicId]);
    setIsLoading(false);
  }, []);

  return (
    <>
      {!isLoading && (
        <>
          <h1>{content.title}</h1>
          <Link to="/">Back to homepage</Link>
        </>
      )}
    </>
  );
};

export default TopicPage;
