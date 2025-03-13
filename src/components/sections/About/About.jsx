import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Tetris from './Tetris';
import './about.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-10% 0px" });

  // State to force re-trigger animation when navigating back to Home
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
    }
  }, [isInView]);

  return (
    <section className="about-me" ref={ref}>
      <div className="container">
        <div className="content-grid">
          {/* Tetris Animation - Comes from Left */}
          <motion.div
            className="tetris-column"
            initial={{ x: -100, opacity: 0 }}
            animate={shouldAnimate ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Tetris />
          </motion.div>

          {/* Text Animation - Comes from Right */}
          <motion.div
            className="text-column"
            initial={{ x: 100, opacity: 0 }}
            animate={shouldAnimate ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            {/* Glitch Effect for Heading */}
            <motion.h1
              className="glitch"
              data-text="ABOUT ME"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={shouldAnimate ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              ABOUT ME
            </motion.h1>

            {/* Description - Fades in with Slight Scroll Motion */}
            <motion.p
              className="about-text"
              initial={{ opacity: 0, y: 20 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
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

            {/* Back to Home Button - Subtle Scale Effect */}
            <motion.a
              className="btn-back"
              href="/Home"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.preventDefault();
                setShouldAnimate(false); // Reset animation when navigating away
                document
                  .getElementById('Home')
                  .scrollIntoView({ behavior: 'smooth' });
              }}
            >
              ⬅️ Back to Home
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
