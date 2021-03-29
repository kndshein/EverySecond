import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

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

const SlideFour = ({ content, setRefTopic }) => {
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

  const taglineVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 1,
      },
    },
  };

  const resourcesVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 1.5,
        delayChildren: 2.5,
      },
    },
  };

  const resourcesVariantsChild = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <div className="slides">
      <motion.div
        variants={variants}
        animate={visible ? "animate" : "initial"}
        className="slide-four-container"
        ref={setRef}
      >
        <div className="resources-container">
          <motion.div
            variants={taglineVariants}
            animate={visible ? "animate" : "initial"}
            className="tagline"
            ref={setRefTopic}
          >
            get involved. take action. lend a hand.
          </motion.div>
          <motion.div
            variants={resourcesVariants}
            animate={visible ? "animate" : "initial"}
            className="resources"
          >
            <motion.div variants={resourcesVariantsChild} className="resource">
              <div className="title" id="educate">
                Educate Yourself
              </div>
              <ul>
                {content?.SlideFour.educate.map((ele, index) => {
                  return (
                    <li key={index}>
                      <a href={`${ele.link}`} target="_blank" rel="noreferrer">
                        {ele.name} <FiExternalLink className="link" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
            <motion.div variants={resourcesVariantsChild} className="resource">
              <div className="title" id="awareness">
                Spread Awareness
              </div>
              <ul>
                {content?.SlideFour.awareness.map((ele, index) => {
                  return (
                    <li key={index}>
                      <a href={`${ele.link}`} target="_blank" rel="noreferrer">
                        {ele.name} <FiExternalLink className="link" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
            <motion.div variants={resourcesVariantsChild} className="resource">
              <div className="title" id="volunteer">
                Volunteer Your Time
              </div>
              <ul>
                {content?.SlideFour.volunteer.map((ele, index) => {
                  return (
                    <li key={index}>
                      <a href={`${ele.link}`} target="_blank" rel="noreferrer">
                        {ele.name} <FiExternalLink className="link" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
            <motion.div variants={resourcesVariantsChild} className="resource">
              <div className="title" id="financial">
                Help Financially
              </div>
              <ul>
                {content?.SlideFour.financial.map((ele, index) => {
                  return (
                    <li key={index}>
                      <a href={`${ele.link}`} target="_blank" rel="noreferrer">
                        {ele.name} <FiExternalLink className="link" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </motion.div>
        </div>
        <div className="background-image">
          <img
            src={`${content?.SlideFour.background.img}`}
            alt={`${content?.SlideFour.background.alt}`}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SlideFour;
