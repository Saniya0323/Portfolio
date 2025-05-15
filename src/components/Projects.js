import React, { useState } from "react";
import { motion } from "framer-motion"; // Import for animations
import "../styles/projects.css";
const projectData = [
  {
    id: 1,
    title: "Kinny Rabbit",
    shortDesc: "Developed various chatbots and voice-agents using nocode tools",
    longDesc: `I designed and developed chatbots using Voiceflow and Make, making interactions smoother and 
    more engaging. I also managed customer data using Airtable and structured documents based on client needs to ensure clarity and efficiency.`
    },
  {
    id: 2,
    title: "HCLTech- XPD 3DEX Integration",
    shortDesc: "Optimized UI performance, integrated RESTful APIs, conducted manual testing",
    longDesc: `I worked on React.js and Java Spring Boot projects, improving UI performance and integrating RESTful APIs for better functionality. I also conducted manual testing, ensuring smooth application performance, 
    and led training sessions on Spring Boot and databases to help my team grow.`,
  },
  {
    id: 3,
    title: "College- Employee Anaytics Services",
    shortDesc: "This is my college project",
    longDesc: ` I built a web application to analyze employee performance, using Java, JSP, MySQL, and JavaScript. I designed an interactive UI, developed data-driven dashboards, and created 20+ visual reports to help organizations 
    track employee productivity. I also wrote test cases and conducted manual testing to ensure smooth functionality and reliability`,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            My Projects
          </motion.h2>

    <div className="projects-container">
      <div className="projects-grid">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => handleCardClick(project)}
          >
            <div className="card-inner">
              <div className="card-front">
                <h3>{project.title}</h3>
              </div>
              <div className="card-back">
                <p>{project.shortDesc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>
              &times;
            </button>
            <h3>{selectedProject.title}</h3>
            <br></br>
            <p>{selectedProject.longDesc}</p>
          </div>
        </div>
      )}
    </div>
    Note - Click on each card to know more
    </section>
  );
};

export default Projects;
