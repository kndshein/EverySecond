import React from "react";
import { MdPersonPinCircle } from "react-icons/md";
import { motion } from "framer-motion";

const SlideOne = (props) => {
  var num = [],
    i = 0,
    len = 30;
  while (++i <= len) num.push(i);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 2.6,
        delayChildren: 4.6,
      },
    },
  };

  const item = {
    hidden: { display: "none", opacity: 0 },
    show: { display: "block", opacity: 1 },
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
            animate={{ y: -50 }}
            transition={{ duration: 2, delay: 2 }}
          >
            <div className="tagline">
              every{" "}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 1.3, yoyo: Infinity, delay: 3 }}
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
            {num.map((x) => (
              <motion.div variants={item}>
                <MdPersonPinCircle key={x.id} size={50} className="icon" />
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

export default SlideOne;
