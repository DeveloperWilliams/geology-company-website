import React from "react";
import "./hire.css";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const Hire = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { threshold: 0 });

  return (
    <>
      <div className="hire" ref={ref}>
        <motion.div
          className="right"
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/hire-equipment">
            {" "}
            <button>Lease Geophyscical Equipment</button>
          </Link>
        </motion.div>
        <div class="vertical-line"></div>
        <motion.div
          className="right"
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Link to="/grid-survey">
            <button>3D Gridding Surveys</button>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default Hire;
