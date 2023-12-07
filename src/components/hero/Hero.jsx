import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
  scrollBtnAnimate: {
    opacity: 0,
    y: 10,
    transition: { duration: 2, repeat: Infinity },
  },
};
const slidingVariants = {
  initial: { x: 0 },
  animate: {
    x: "-300%",
    transition: { duration: 20, repeat: Infinity, repeatType: "mirror" },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="text-container"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Giga Mikashavidze</motion.h2>
          <motion.h1 variants={textVariants}>Web developer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.a href="#Projects" variants={textVariants}>
              Latest work
            </motion.a>
            <motion.a href="#Contact" variants={textVariants}>
              Contact me
            </motion.a>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt="down arrow"
            variants={textVariants}
            animate="scrollBtnAnimate"
          />
        </motion.div>
      </div>
      <motion.div
        className="sliding-text"
        variants={slidingVariants}
        initial="initial"
        animate="animate"
      >
        WELCOME TO MY WEBSITE
      </motion.div>
    </div>
  );
};

export default Hero;
