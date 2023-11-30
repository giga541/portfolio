import "./contact.scss";
import { motion } from "framer-motion";
import Svg from "./Svg";

const variants = {
  initial: { y: 500, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
};

const Contact = () => {
  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="text-container" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>gigamikasha@gmail.com</span>
        </motion.div>
      </motion.div>
      <div className="form-container">
        <Svg />
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Mail" />
          <textarea rows={8} placeholder="Message"></textarea>
          <button>Submit</button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
