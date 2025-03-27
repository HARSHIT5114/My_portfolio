import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './herosection.css';

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Triggers animation every time it enters the viewport

  return (
    <section className="hero" ref={ref}>
      <div className="outer-container">
        {/* Pixelated Image Section */}
        {/* <motion.div
          className="pixelated-frame"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <img
            src="https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI1LTAxL3Jhd3BpeGVsX29mZmljZV8zM19pbGx1c3RyYXRpb25fb2ZfYV9zbWlsZXlfZmFjZV9pbl9hX3BpeGVsYXRlZF9iNmVlMzY2NS04OTRmLTRlYTAtYTZkZC05ZmM2ZWRlODUwNTFfMS5wbmc.png"
            alt="Megh"
            className="pixelated-image"
          />
        </motion.div> */}

        {/* Name and project redirector - sub section */}
        <div className="container">
          {/* Heading animation */}
          <motion.h1
            className="glitch"
            data-text="WELCOME"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 1 }}
          >
            WELCOME
          </motion.h1>

          {/* Subtext animation */}
          <motion.p
            className="subtext"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            To Harshit's portfolio
          </motion.p>

          {/* Projects button */}
          <motion.a
            className="btn-start"
            href="Projects"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={e => {
              e.preventDefault();
              document
                .getElementById('Projects')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            🎮 Projects
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
