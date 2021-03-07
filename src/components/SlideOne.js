import React from "react";
import { MdPersonPinCircle } from "react-icons/md";
import { motion } from "framer-motion";

const SlideOne = ({ content }) => {
  console.log(1 + content?.SlideOne.second / 2);

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
      hidden: { display: "none", opacity: 0 },
      show: {
        display: "block",
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
            transition={{ duration: 1 }}
          >
            <motion.div
              className="taglines-container-container"
              animate={{ y: -50 }}
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
                  2.6
                </motion.span>{" "}
                seconds,
              </div>
              <div className="tagline-2">
                somebody in the US is having thoughts of suicide
              </div>
            </motion.div>
            <motion.div
              className="icons-container"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {num.map((x, index) => (
                <motion.div variants={item}>
                  <MdPersonPinCircle key={index} size={50} className="icon" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <div className="background-image">
            <img
              src="https://images.unsplash.com/photo-1615027138404-06f31c35ae1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="poop"
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
