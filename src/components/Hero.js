import React from "react";
import { motion } from "framer-motion";
import "../styles/hero.css";

const Hero = () => {
  console.log("Hero Component Mounted"); // Debugging

  return (
    <section className="hero">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Hello, Great to see you here. I'm <span className="highlight">Saniya</span>
      </motion.h1>
      <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5 }}>
        A passionate Software Engineer.
      </motion.p>
      <motion.a href="/projects" className="hero-btn" whileHover={{ scale: 1.1 }}>
        View My Work
      </motion.a>
    </section>
  );
};

export default Hero;
