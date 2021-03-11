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

const SlideTwo = ({ content }) => {
  var num = [],
    i = 0,
    len = content?.SlideTwo.graphic.num2;
  while (++i <= len) num.push(i);
  const [setRef, visible] = useOnScreen({ threshold: 0.5 });
  const [resizer, setResizer] = React.useState({ vw: 0, px: 0 });

  React.useEffect(() => {
    const calcSize = (num) => {
      let vw = 0;
      let px = 0;
      vw = Math.round(29.863 * Math.pow(num, -0.479) * 10) / 10;
      console.log(vw);
      px = Math.round(298.68 * Math.pow(num, -0.479) * 10) / 10;
      setResizer({ vw: vw, px: px });
    };

    calcSize(content?.SlideTwo.graphic.num2);
  }, []);

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
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        delay: 1.5,
      },
    },
  };

  const taglineTwoVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        delay: 3.5,
      },
    },
  };

  const iconsVariantsContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.002,
        delayChildren: 5.5,
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
    initial: { opacity: 0, x: -50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 3, delay: 5.5, ease: "easeOut" },
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
            {content?.SlideTwo.taglineOne}
          </motion.div>
          <motion.div
            variants={taglineTwoVariants}
            animate={visible ? "animate" : "initial"}
            className="tagline-2"
          >
            {content?.SlideTwo.taglineTwo}
          </motion.div>
        </div>
        <motion.div
          variants={iconsVariantsContainer}
          initial="initial"
          animate={visible ? "animate" : "initial"}
          className="icons-container"
        >
          {num.map((x, index) => {
            if (index < content?.SlideTwo.graphic.num1) {
              return (
                <motion.div
                  variants={iconsVariantsChildFocus}
                  className="icon-container"
                  style={{
                    width: `calc(max(${resizer.vw}vw,${resizer.px}px))`,
                  }}
                  key={index}
                >
                  <img
                    src={`${content?.SlideTwo.graphic.icon.img}`}
                    key={index}
                    alt={`${content?.SlideTwo.graphic.icon.alt}`}
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
                style={{ width: `calc(max(${resizer.vw}vw,${resizer.px}px))` }}
                key={index}
              >
                <img
                  src={`${content?.SlideTwo.graphic.icon.img}`}
                  alt={`${content?.SlideTwo.graphic.icon.alt}`}
                  className="icon"
                />
              </motion.div>
            );
          })}
        </motion.div>
        <div className="background-image">
          <img
            src={`${content?.SlideTwo.background.img}`}
            alt={`${content?.SlideTwo.background.alt}`}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SlideTwo;
