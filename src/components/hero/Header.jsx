import './header.scss';
import { motion } from 'framer-motion';

const variants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};

const Header = () => {
  const items = ['Homepage', 'Services', 'Projects', 'Contact'];

  return (
    <motion.div
      className="header"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <motion.div className="portfolio" variants={variants}>
        Portfolio
      </motion.div>
      <motion.div className="items" variants={variants}>
        {items.map((item) => (
          <a href={`#${item}`} key={item}>
            {item}
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Header;
