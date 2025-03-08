import React, { useState } from "react";
import "./ProjectSection.css";

const projects = [
  { id: 1, title: "Neuralize", details: ["AI-powered resume builder", "PDF generation with AI"], link: "https://github.com/yourusername/neuralize" },
  { id: 2, title: "Event Toolkit", details: ["Online booking & event tracking", "Vendor-user platform"], link: "https://github.com/yourusername/event-toolkit" },
  { id: 3, title: "E-Library", details: ["AI-based book recommendations", "Online lending system"], link: "https://github.com/yourusername/e-library" },
  { id: 4, title: "Process Scheduling", details: ["Simulates FCFS, SJF, Round Robin", "Interactive UI"], link: "https://github.com/yourusername/process-scheduling" },
  { id: 5, title: "Pet Boarding for Odoo", details: ["Pet care booking system", "Integrated with Odoo"], link: "https://github.com/yourusername/pet-boarding" },
  { id: 6, title: "Library Management", details: ["Automates library operations", "Supports physical & digital books"], link: "https://github.com/yourusername/library-management" },
  { id: 7, title: "Lost Treasure Hunt", details: ["Gamified puzzle system", "Leaderboard & rewards"], link: "https://github.com/yourusername/lost-treasure" },
  { id: 8, title: "Smart Home", details: ["IoT-based automation", "Remote control via mobile app"], link: "https://github.com/yourusername/smart-home" },
  { id: 9, title: "Chatbot AI", details: ["NLP-powered chatbot", "Supports multiple languages"], link: "https://github.com/yourusername/chatbot-ai" },
  { id: 10, title: "Stock Predictor", details: ["AI-driven stock price prediction", "Real-time market analysis"], link: "https://github.com/yourusername/stock-predictor" },
];

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [page, setPage] = useState(0);
  const projectsPerPage = 9;

  const nextProjects = () => {
    if ((page + 1) * projectsPerPage < projects.length) {
      setPage(page + 1);
    }
  };

  const prevProjects = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <section className="project-section">
      <h1>My Projects</h1>

      {page > 0 && (
        <button className="project-nav prev" onClick={prevProjects}>
          {"<"}
        </button>
      )}

      <div className="project-container">
        {projects.slice(page * projectsPerPage, (page + 1) * projectsPerPage).map((project) => (
          <div key={project.id} className="project-card" onClick={() => setSelectedProject(project)}>
            <h2>{project.title}</h2>
          </div>
        ))}
      </div>

      {((page + 1) * projectsPerPage < projects.length) && (
        <button className="project-nav next" onClick={nextProjects}>
          {">"}
        </button>
      )}

      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>
            <div className="project-details">
              <ul>
                {selectedProject.details.map((point, index) => (
                  <li key={index}>🔹 {point}</li>
                ))}
              </ul>
              <a href={selectedProject.link} className="project-link" target="_blank" rel="noopener noreferrer">
                🔗 View Project
              </a>
            </div>
            <button className="btn-close" onClick={() => setSelectedProject(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
