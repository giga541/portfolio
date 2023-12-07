import "./sidebar.scss";
import Links from "./Links";
import ToggleButton from "./ToggleButton";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1220px at 50px 50px)",
    transition: { type: "spring", stiffnes: 20 },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: { delay: 0.5, type: "spring", damping: 40, stiffness: 200 },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  let sidebarRef = useRef();

  useEffect(() => {
    let handleSidebar = e => {
      if (!sidebarRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleSidebar);

    return () => {
      document.removeEventListener("mousedown", handleSidebar);
    };
  });

  return (
    <motion.div
      className="sidebar"
      animate={open ? "open" : "closed"}
      ref={sidebarRef}
    >
      <motion.div className="backgorund" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton onOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
