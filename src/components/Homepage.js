import React from "react";
import { Link, Redirect } from "react-router-dom";

import SeedData from "../SeedData.json";

const Homepage = (props) => {
  const [content, setContent] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setContent(SeedData);
    setIsLoading(false);
  }, []);

  return <Redirect to={`/topic/0`} />;
  //     <>
  //       {!isLoading &&
  //         content.map((topic, index) => {
  //           return (
  //             <h1 key={index}>
  //               <Link to={`/topic/${index}`}>{topic.title}</Link>
  //             </h1>
  //           );
  //         })}
  //     </>
  //   );
};

export default Homepage;
