import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="home">
        <Link to="/grid-survey">
          <motion.div className="myservices">
            <img src="sv.webp" alt="Sample Image"></img>
            <div className="txt">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Gridding Survey
              </motion.h1>
            </div>
          </motion.div>
        </Link>
        <Link to="/ground-water-management">
          <motion.div className="myservices">
            <img src="groundwater.webp" alt="Sample Image"></img>
            <div className="txt">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }} // Ensures the animation only happens once when it comes into view
              >
                Groundwater Management
              </motion.h1>
            </div>
          </motion.div>
        </Link>
        <Link to="/geology-and-minerals">
          <motion.div className="myservices">
            <img src="mine1.webp" alt="Sample Image"></img>
            <div className="txt">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Geology and Mineral
              </motion.h1>
            </div>
          </motion.div>
        </Link>
        <Link to="/solar-system">
          <motion.div className="myservices">
            <img src="solar1.webp" alt="Sample Image"></img>
            <div className="txt">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Solar System
              </motion.h1>
            </div>
          </motion.div>
        </Link>
      </div>
    </>
  );
};

export default Home;
