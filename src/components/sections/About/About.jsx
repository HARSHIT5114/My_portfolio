import React from 'react';
import { motion } from 'framer-motion';
import Tetris from './Tetris';
import './about.css';

const About = () => {
  return (
    <section className="about-me">
      <div className="container">
        <div className="content-grid">
          <div className="tetris-column">
            <Tetris />
          </div>

          <div className="text-column">
            <motion.h1
              className="glitch"
              data-text="ABOUT ME"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              ABOUT ME
            </motion.h1>

            <motion.p
              className="about-text"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              • Results-driven Software Engineer with expertise in full-stack
              development, AI integration, and system optimization. <br />
              <br /> • Developed scalable MERN applications, AI-powered
              solutions, and backend optimizations. <br />
              <br />• Implemented AI-powered solutions, including
              resume-building platforms, job ranking systems, and AI-driven mock
              interviews. <br />
              <br />• Strong problem-solving, teamwork, and performance
              optimization skills. <br />
              <br />• Secured 1st place in college internal hackathon, qualified
              for Smart India Hackathon 2024.
            </motion.p>

            <motion.a
              className="btn-back"
              href="/Home"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={e => {
                e.preventDefault();
                document
                  .getElementById('Home')
                  .scrollIntoView({ behavior: 'smooth' });
              }}
            >
              ⬅️ Back to Home
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
