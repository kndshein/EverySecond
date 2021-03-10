import React from "react";
// import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function useOnScreen(options) {
  const [ref, setRef] = React.useState(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (visible === false) {
        setVisible(entry.isIntersecting);
      }
    }, options);

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options, visible]);

  return [setRef, visible];
}

// function useOnScreen(ref, rootMargin = "0px") {
//   // State and setter for storing whether element is visible
//   const [isIntersecting, setIntersecting] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         // Update our state when observer callback fires
//         setIntersecting(entry.isIntersecting);
//       },
//       {
//         rootMargin,
//       }
//     );
//     if (ref.current) {
//       observer.observe(ref.current);
//     }
//     return () => {
//       observer.unobserve(ref.current);
//     };
//   }, []); // Empty array ensures that effect is only run on mount and unmount

//   return isIntersecting;
// }

const SlideTwo = (props) => {
  var num = [],
    i = 0,
    len = 1000;
  while (++i <= len) num.push(i);

  const [setRef, visible] = useOnScreen({ threshold: 0.9 });

  const variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0,
      },
    },
  };

  const taglineOneVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 2,
      },
    },
  };

  const taglineTwoVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 4,
      },
    },
  };

  const iconsVariantsContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.002,
        delayChildren: 6,
        ease: "easeOut",
      },
    },
  };

  const iconsVariantsChild = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
    },
  };

  const iconsVariantsChildFocus = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 2, ease: "easeOut" },
    },
  };

  return (
    <div className="slides">
      <motion.div
        variants={variants}
        animate={visible ? "animate" : "initial"}
        className="slide-two-container"
        ref={setRef}
      >
        <div className="taglines-container">
          <motion.div
            variants={taglineOneVariants}
            animate={visible ? "animate" : "initial"}
            className="tagline"
          >
            1.4 million adults in the United States attempted suicide in 2019
          </motion.div>
          <motion.div
            variants={taglineTwoVariants}
            animate={visible ? "animate" : "initial"}
            className="tagline-2"
          >
            that's 4 attempts every 1000 adults
          </motion.div>
        </div>
        <motion.div
          variants={iconsVariantsContainer}
          initial="initial"
          animate={visible ? "animate" : "initial"}
          className="icons-container"
        >
          {num.map((x, index) => {
            if (index > num.length - 5) {
              return (
                <motion.div
                  variants={iconsVariantsChildFocus}
                  className="icon-container"
                  style={{ width: "min(3vw,15px)" }}
                  key={index}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Person_icon_BLACK-01.svg/225px-Person_icon_BLACK-01.svg.png"
                    key={index}
                    alt="human symbol"
                    className="icon"
                    style={{ opacity: "1" }}
                  />
                </motion.div>
              );
            }
            return (
              <motion.div
                variants={iconsVariantsChild}
                className="icon-container"
                style={{ width: "min(3vw,15px)" }}
                key={index}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Person_icon_BLACK-01.svg/225px-Person_icon_BLACK-01.svg.png"
                  alt="human symbol"
                  className="icon"
                />
              </motion.div>
            );
          })}
        </motion.div>
        <div className="background-image">
          <img
            src="https://images.unsplash.com/photo-1483653085484-eb63c9f02547?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="poop"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SlideTwo;
