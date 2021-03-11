import React from "react";
import { motion } from "framer-motion";

const SlideOne = ({ content }) => {
  const loaded = () => {
    var num = [],
      i = 0,
      len = 30;
    while (++i <= len) num.push(i);

    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: content?.SlideOne.second,
          delayChildren: 2 + content?.SlideOne.second / 2,
        },
      },
    };

    const item = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { duration: 2.6, ease: "easeOut" },
      },
    };

    return (
      <div className="slides">
        <div className="slide-one-container">
          <motion.div
            className="taglines-container"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 2 }}
          >
            <motion.div
              className="taglines-container-container"
              initial={{ y: 50 }}
              animate={{ y: -25 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <div className="tagline">
                every{" "}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: content?.SlideOne.second / 2,
                    yoyo: Infinity,
                    delay: 2,
                  }}
                  ease={{ ease: "easeInOut" }}
                >
                  {content?.SlideOne.second}
                </motion.span>{" "}
                {content?.SlideOne.second > 1 ? "seconds," : "second,"}
              </div>
              <div className="tagline-2">{content?.SlideOne.tagline}</div>
            </motion.div>
            <motion.div
              className="icons-container"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {num.map((x, index) => (
                <motion.div variants={item} key={index}>
                  <img
                    className="icon"
                    src={`${content?.SlideOne.icon.img}`}
                    alt={`${content?.SlideOne.icon.alt}`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <div className="background-image">
            <img
              src={`${content?.SlideOne.background.img}`}
              alt={`${content?.SlideOne.background.alt}`}
            />
          </div>
        </div>
      </div>
    );
  };

  const loading = () => {
    return "Loading";
  };

  return content?.SlideOne ? loaded() : loading();
};

export default SlideOne;
