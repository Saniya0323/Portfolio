import React from "react";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/global.css";

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <Header />
//         <div className="content">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}>
//           <Routes>
//             <Route path="/portfolio" element={<Hero />} />
//             <Route path="/" element={<Hero />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </motion.div>
//         </div>
//         <Footer /> 
//       </div>
//     </Router>
//   );
// }
// export default App;


function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Routes>
            {/* <Route path="/portfolio" element={<Hero />} /> */}
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
