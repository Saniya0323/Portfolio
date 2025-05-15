import React from "react";
import { motion } from "framer-motion";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Get in Touch
        <br></br>
      </motion.h2>
      <motion.form initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5 }}>

        <input type="text" className="nameip" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>

        <br></br>
        Mail me at - saniya.jadhav03@gmail.com
      </motion.form>
    </section>
  );
};

export default Contact;
