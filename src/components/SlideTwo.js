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

const variants = {
  initial: { opacity: 0.2 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const SlideTwo = (props) => {
  const [setRef, visible] = useOnScreen({ threshold: 0.9 });
  return (
    <div className="slides">
      <motion.div
        variants={variants}
        initial="initial"
        animate={visible ? "animate" : "initial"}
        className="slide-two-container"
        ref={setRef}
      >
        <div className="tagline">
          1.4 million adults in the United States attempted suicide in 2019
        </div>
        <div className="tagline-2">that's 4 attempts every 1000 adults</div>
      </motion.div>
    </div>
  );
};

export default SlideTwo;
