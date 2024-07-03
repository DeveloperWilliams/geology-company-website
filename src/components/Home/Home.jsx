// File path: src/components/Home.js

import React from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import "./home.css";

const Home = () => {
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const ref4 = React.useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });

  return (
    <>
      <div className="hero">
        <h3>Our Services</h3>
        <div className="home">
          <Link className="content" ref={ref1}>
            <div className="top">
              <img src="./bore.webp" alt="borehole" loading="lazy" />
            </div>
            <motion.div
              className="lower"
              initial={{ x: -200, opacity: 0 }}
              animate={isInView1 ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h6>Ground Water Management</h6>
              <p>
                We specialize in efficient ground water management and borehole
                drilling to secure a sustainable water supply
              </p>
            </motion.div>
          </Link>
          <Link className="content" ref={ref2}>
            <div className="top">
              <img src="./mine.webp" alt="Ground" loading="lazy" />
            </div>
            <motion.div
              className="lower"
              initial={{ x: 200, opacity: 0 }}
              animate={isInView2 ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
              transition={{ duration: 1.4 }}
            >
              <h6>Geology and Minerals</h6>
              <p>
                Our geology and mineral services offer detailed analysis and
                exploration to uncover valuable natural resources.
              </p>
            </motion.div>
          </Link>
          <Link className="content" ref={ref3}>
            <div className="top">
              <img src="./solar.webp" alt="solar" loading="lazy" />
            </div>
            <motion.div
              className="lower"
              initial={{ x: -200, opacity: 0 }}
              animate={isInView3 ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h6>Solar Systems</h6>
              <p>
                We provide expert solar installation services to harness clean
                and renewable energy for your home or business.
              </p>
            </motion.div>
          </Link>
          <Link className="content" ref={ref4}>
            <div className="top">
              <img src="./sv.webp" alt="survey" loading="lazy" />
            </div>
            <motion.div
              className="lower"
              initial={{ x: 200, opacity: 0 }}
              animate={isInView4 ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
              transition={{ duration: 1.4 }}
            >
              <h6>Griding Survey</h6>
              <p>
                Our precision griding survey services ensure accurate land
                measurements for your projects.
              </p>
            </motion.div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
