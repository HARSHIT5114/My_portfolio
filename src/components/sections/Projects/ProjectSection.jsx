import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence, delay } from 'framer-motion';
import projects from './projects';
import './ProjectSection.css';

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-10% 0px', once: false });
  const [selectedProject, setSelectedProject] = useState(null);
  const [page, setPage] = useState(0);
  const projectsPerPage = 9; // 3x3 grid

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextProjects = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  const prevProjects = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <section className="project-section" ref={ref}>
      <h1>My Projects</h1>

      {/* Project Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          className="project-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'linear' }}
        >
          {projects
            .slice(page * projectsPerPage, (page + 1) * projectsPerPage)
            .map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: index * 0.1,
                  duration: 0.1,
                  ease: 'linear',
                }}
                whileHover={{
                  scale: 1.07,
                  boxShadow: '0 0 15px yellow',
                  transition: { duration: 0.1, ease: 'linear' },
                }}
              >
                <h2>{project.title}</h2>
              </motion.div>
            ))}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      {page > 0 && (
        <button
          className="project-nav prev"
          onClick={prevProjects}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {'<'}
        </button>
      )}

      {(page + 1) * projectsPerPage < projects.length && (
        <button
          className="project-nav next"
          onClick={nextProjects}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {'>'}
        </button>
      )}

      {/* Page Indicator */}
      <motion.div
        className="page-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {page + 1}/{totalPages}
      </motion.div>

      {/* Modal for Selected Project */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal"
            onClick={() => setSelectedProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-content"
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 15 }}
            >
              <h2 className="heading">{selectedProject.title}</h2>
              <div className="project-details">
                <ul>
                  {selectedProject.details.map((point, index) => (
                    <li key={index}>🔹 {point}</li>
                  ))}
                </ul>
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 View Project
                  </a>
                )}
              </div>
              <button
                className="btn-close"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectSection;
