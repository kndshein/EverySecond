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

const SlideThree = (props) => {
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
        delay: 1.5,
      },
    },
  };

  const taglineTwoVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 3.5,
      },
    },
  };

  const spanVariants = {
    initial: { color: "#ffffff" },
    animate: {
      color: "#ad0c0c",
      transition: {
        duration: 3,
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
            there are about 130 fatal suicides per day
          </motion.div>
          <motion.div
            variants={taglineTwoVariants}
            animate={visible ? "animate" : "initial"}
            className="tagline-2"
          >
            which is almost{" "}
            <motion.span
              variants={spanVariants}
              animate={visible ? "animate" : "initial"}
            >
              6 suicidal deaths per hour
            </motion.span>
          </motion.div>
        </div>
        <div className="background-image">
          <img
            src="https://images.unsplash.com/photo-1513111168953-34fc252c9279?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
            alt="poop"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SlideThree;
