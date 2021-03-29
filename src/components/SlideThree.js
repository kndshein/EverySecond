import React from "react";
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

const SlideThree = ({ content }) => {
  const [setRef, visible] = useOnScreen({ threshold: 0.5 });

  const variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
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
        delay: 1,
      },
    },
  };

  const taglineTwoVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 3,
      },
    },
  };

  const spanVariants = {
    initial: { color: "#ffffff" },
    animate: {
      color: content?.SlideThree.color,
      transition: {
        duration: 2,
        delay: 4.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="slides">
      <motion.div
        variants={variants}
        animate={visible ? "animate" : "initial"}
        className="slide-three-container"
        ref={setRef}
      >
        <div className="taglines-container">
          <motion.div
            variants={taglineOneVariants}
            animate={visible ? "animate" : "initial"}
            className="tagline"
          >
            {content?.SlideThree.taglineOne}
          </motion.div>
          <motion.div
            variants={taglineTwoVariants}
            animate={visible ? "animate" : "initial"}
            className="tagline-2"
          >
            {content?.SlideThree.taglineTwo.tagline}{" "}
            <motion.span
              variants={spanVariants}
              animate={visible ? "animate" : "initial"}
            >
              {content?.SlideThree.taglineTwo.taglineFocus}
            </motion.span>
          </motion.div>
        </div>
        <div className="background-image">
          <img
            src={`${content?.SlideThree.background.img}`}
            alt={`${content?.SlideThree.background.alt}`}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SlideThree;
