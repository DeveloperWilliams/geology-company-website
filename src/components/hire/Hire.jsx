import React from "react";
import "./hire.css";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const Hire = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { threshold: 0 });

  return (
    <>
      <div className="hire">
        <div className="left" ref={ref}>
          <h3>
            Lease top-notch equipment from GeoTruth <br className="myBr" />
            today!
          </h3>
        </div>
        <motion.div
          className="right"
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Link to="/hire-equipment">Lease Equipment Now</Link>
        </motion.div>
      </div>
    </>
  );
};

export default Hire;
