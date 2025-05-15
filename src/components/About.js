import React from "react";
import { motion } from "framer-motion";
import "../styles/about.css";

const About = () => {
  return (
    <section className="about">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
      With a strong foundation in front-end development, particularly React.js, I specialize in building scalable, high-performance applications. 
      My expertise extends to React.js, Java, Spring Boot, Manual Testing, and databases like SQL/MySQL. 
      <br></br>
      Additionally, I have hands-on experience in chatbot and voice agent development using no-code tools, enabling seamless automation and user interactions.
</motion.p>
    </section>
  );
};

export default About;
