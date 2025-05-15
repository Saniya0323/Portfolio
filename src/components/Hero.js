// import React from "react";
import { motion } from "framer-motion";
import "../styles/hero.css";
import { Link } from "react-router-dom";  // <-- import Link


const Hero = () => {
  console.log("Hero Component Mounted"); // Debugging

  return (
    <section className="hero">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Hello and Welcome to my site. I'm <span className="highlight">Saniya</span>
      </motion.h1>
      <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5 }}>
        walking on the aisle for becoming expertise in development
      </motion.p>
      {/* <motion.a href="/projects" className="hero-btn" whileHover={{ scale: 1.1 }}>
        View My Work
      </motion.a> */}

      <br></br>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Link to="/projects" className="hero-btn">
          View My Work
        </Link>
      </motion.div>
    </section>
  );
};
export default Hero;